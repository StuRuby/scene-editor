import * as THREE from 'three';
import * as  _ from 'lodash';

import { EditorSignals } from './signals';
import { Geometries, Materials, Textures, Helpers, Cameras, Helper } from './interface';

console.log('PerspectiveCamera', THREE.PerspectiveCamera);

const DEFAULT_CAMERA = new THREE.PerspectiveCamera(50, 1, 0.01, 1000);
DEFAULT_CAMERA.name = 'Camera';
DEFAULT_CAMERA.position.set(0, 5, 10);
DEFAULT_CAMERA.lookAt(new THREE.Vector3());

export class Editor {
    signals: EditorSignals;
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    viewportCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    scene: THREE.Scene;
    sceneHelpers: THREE.Scene;
    geometries: Geometries;
    materials: Materials;
    textures: Textures;
    materialsRefCounter: Map<THREE.Material, number>;
    selected: THREE.Object3D | undefined;
    helpers: Helpers;
    cameras: Cameras;
    constructor() {
        this.signals = new EditorSignals();
        this.camera = DEFAULT_CAMERA.clone();

        this.scene = new THREE.Scene();
        this.scene.name = 'Scene';
        this.scene.background = new THREE.Color(0xaaaaaa);

        this.sceneHelpers = new THREE.Scene();

        this.geometries = {};
        this.materials = {};
        this.textures = {};
        // 用于追踪`material`被3D对象使用的频率
        this.materialsRefCounter = new Map();

        this.selected = undefined;
        this.helpers = {};
        this.cameras = {};
        this.viewportCamera = this.camera;

        this.addCamera(this.camera);
    }

    setScene(scene: THREE.Scene) {
        this.scene.uuid = scene.uuid;
        this.scene.name = scene.name;
        this.scene.background = scene.background !== null ? scene.background.clone() : null;

        if(scene.fog !== null) {
            this.scene.fog = scene.fog.clone();
        }
        // 复制`scene`对象中存储的自定义数据.
        this.scene.userData = JSON.parse(JSON.stringify(scene.userData));
        // 设置`sceneGraphChanged`信号状态为不活跃,避免每次添加`object`对象时都要渲染.
        this.signals.sceneGraphChanged.active = false;

        while(scene.children.length > 0) {
            this.addObject(scene.children[0]);
        }

        this.signals.sceneGraphChanged.active = true;
        this.signals.sceneGraphChanged.dispatch();

    }

    // ---------------------------------------------------------------------------
    // Object Api
    // ---------------------------------------------------------------------------

    addObject(object: THREE.Object3D | THREE.Mesh, params: { parent?: THREE.Object3D; index?: number } = {}) {
        const { parent, index } = params;
        object.traverse(child => {
            if((child as THREE.Mesh).geometry !== undefined) {
                this.addGeometry((child as THREE.Mesh).geometry);
            }
            if((child as THREE.Mesh).material !== undefined) {
                this.addMaterial((child as THREE.Mesh).material);
            }

            this.addCamera(<THREE.PerspectiveCamera | THREE.OrthographicCamera>child);
            this.addHelper(child);
        });

        if(parent === undefined) {
            this.scene.add(object);
        } else {
            parent.children.splice(index ? index : parent.children.length - 1, 0, object);
            object.parent = parent;
        }

        this.signals.objectAdded.dispatch(object);
        this.signals.sceneGraphChanged.dispatch();
    }

    moveObject(object: THREE.Object3D, parent?: THREE.Object3D, before?: THREE.Object3D) {
        if(parent === undefined) {
            parent = this.scene;
        }
        parent.add(object);

        if(before !== undefined) {
            const index = parent.children.indexOf(before);
            parent.children.splice(index, 0, object);
            parent.children.pop();
        }

        this.signals.sceneGraphChanged.dispatch();
    }

    nameObject(object: THREE.Object3D, name: string) {
        object.name = name;
        this.signals.sceneGraphChanged.dispatch();
    }

    removeObject(object: THREE.Object3D) {
        // 避免删除`camera`或者`scene`等根节点
        if(object.parent === null) {
            return;
        }

        object.traverse(child => {
            this.removeCamera(<THREE.PerspectiveCamera | THREE.OrthographicCamera>child);
            this.removeHelper(child);
            if((<THREE.Mesh>child).material !== undefined) {
                this.removeMaterial((<THREE.Mesh>child).material);
            }
        });
        object.parent.remove(object);

        this.signals.objectRemoved.dispatch(object);
        this.signals.sceneGraphChanged.dispatch();
    }

    getObjectByUuid(uuid: string) {
        return this.scene.getObjectByProperty(
            'uuid',
            uuid,
        );
    }


    // ---------------------------------------------------------------------------
    // Geometry Api
    // ---------------------------------------------------------------------------

    addGeometry(geom: THREE.Geometry | THREE.BufferGeometry) {
        this.geometries[geom.uuid] = geom;
    }

    setGeometryName(geom: THREE.Geometry, name: string) {
        geom.name = name;
        this.signals.sceneGraphChanged.dispatch();
    }

    // ---------------------------------------------------------------------------
    // Material Api
    // ---------------------------------------------------------------------------

    addMaterial(material: THREE.Material | THREE.Material[]) {
        if(Array.isArray(material)) {
            for(let i = 0, len = material.length; i < len; i++) {
                this.addMaterialToRefCounter(material[i]);
            }
        } else {
            this.addMaterialToRefCounter(material);
        }

        this.signals.materialAdded.dispatch();
    }

    removeMaterial(material: THREE.Material | THREE.Material[]) {
        if(Array.isArray(material)) {
            for(let i = 0, len = material.length; i < len; i++) {
                this.removeMaterialToRefCounter(material[i]);
            }
        } else {
            this.removeMaterialToRefCounter(material);
        }

        this.signals.materialRemoved.dispatch();
    }

    addMaterialToRefCounter(material: THREE.Material) {
        const counter = this.materialsRefCounter;
        let count = counter.get(material);

        if(count === undefined) {
            counter.set(material, 1);
            this.materials[material.uuid] = material;
        } else {
            count++;
            counter.set(material, count);
        }
    }

    removeMaterialToRefCounter(material: THREE.Material) {
        const counter = this.materialsRefCounter;
        let count = counter.get(material);

        if(count === undefined) {
            return;
        } else {
            count--;
            if(count === 0) {
                counter.delete(material);
                delete this.materials[material.uuid];
            } else {
                counter.set(material, count);
            }
        }
    }

    getMaterialById(id: number) {
        let material;
        const materials = _.flattenDeep(
            _.values(this.materials),
        )

        for(let i = 0, len = materials.length; i < len; i++) {
            if(materials[i].id === id) {
                material = materials[i];
                break;
            }
        }

        return material;
    }


    setMaterialName(material: THREE.Material, name: string) {
        material.name = name;
        this.signals.sceneGraphChanged.dispatch();
    }

    getObjectMaterial(object: THREE.Mesh, index?: number) {
        let material = object.material;
        if(_.isArray(material) && !_.isUndefined(index)) {
            material = material[index];
        }

        return material;
    }

    setObjectMaterial(object: THREE.Mesh, index: number, newMaterial: THREE.Material) {
        if(Array.isArray(object.material) && index !== undefined) {
            object.material[index] = newMaterial;
        } else {
            object.material = newMaterial;
        }
    }


    addTexture(texture: THREE.Texture) {
        this.textures[texture.uuid] = texture;
    }

    // ---------------------------------------------------------------------------
    // Camera Api
    // ---------------------------------------------------------------------------

    /**
     * 添加摄像机
     * @param camera 
     */
    addCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera) {
        if(camera.isCamera) {
            this.cameras[camera.uuid] = camera;
            // 触发`camera add`事件
            this.signals.cameraAdded.dispatch(camera);
        }
    }
    /**
     * 移除摄像机
     * @param camera 
     */
    removeCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera) {
        if(this.cameras[camera.uuid] !== undefined) {
            delete this.cameras[camera.uuid];
            this.signals.cameraRemoved.dispatch(camera);
        }
    }

    setViewportCamera(uuid: string) {
        this.viewportCamera = this.cameras[uuid];
        this.signals.viewportCameraChanged.dispatch(this.viewportCamera);
    }

    // ---------------------------------------------------------------------------
    // Helper Api
    // ---------------------------------------------------------------------------

    addHelper(object: THREE.Object3D, helper?: Helper) {
        if(helper === undefined) {
            if((<THREE.PerspectiveCamera | THREE.OrthographicCamera>object).isCamera) {
                helper = new THREE.CameraHelper(<THREE.PerspectiveCamera | THREE.OrthographicCamera>object);
            } else if((<THREE.PointLight>object) instanceof THREE.PointLight) {
                helper = new THREE.PointLightHelper(<THREE.PointLight>object);
            } else if(<THREE.DirectionalLight>object instanceof THREE.DirectionalLight) {
                helper = new THREE.DirectionalLightHelper(<THREE.DirectionalLight>object);
            } else if(<THREE.SpotLight>object instanceof THREE.SpotLight) {
                helper = new THREE.SpotLightHelper(<THREE.SpotLight>object);
            } else if(<THREE.HemisphereLight>object instanceof THREE.HemisphereLight) {
                helper = new THREE.HemisphereLightHelper(<THREE.HemisphereLight>object, 1);
            } else if(<THREE.SkinnedMesh>object instanceof THREE.SkinnedMesh) {
                helper = new THREE.SkeletonHelper((<THREE.SkinnedMesh>object).skeleton.bones[0]);
            } else {
                return;
            }
            const geom = new THREE.SphereBufferGeometry(2, 4, 2);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000, visible: false });
            const picker = new THREE.Mesh(geom, material);
            picker.name = 'picker';
            picker.userData.object = object;
            helper.add(picker);
        }

        this.sceneHelpers.add(helper);
        this.helpers[object.id] = helper;

        this.signals.helperAdded.dispatch(helper);
    }

    removeHelper(object: THREE.Object3D) {
        if(this.helpers[object.id] !== undefined) {
            const helper = this.helpers[object.id];
            helper.parent?.remove(helper);
            delete this.helpers[object.id];
            this.signals.helperRemoved.dispatch(helper);
        }
    }

    // ---------------------------------------------------------------------------
    // Operation Api
    // ---------------------------------------------------------------------------
    select(object: THREE.Object3D | undefined) {
        if(this.selected === object) return;

        let uuid = null;
        if(object !== undefined) {
            uuid = object.uuid;
        }

        this.selected = object;
        // TODO
        //this.config.setKey('selected', uuid);
        this.signals.objectSelected.dispatch(object);
    }

    selectById(id: number) {
        if(id === this.camera.id) {
            this.select(this.camera);
            return;
        }

        this.select(
            this.scene.getObjectById(id)
        );
    }

    selectByUuid(uuid: string) {
        this.scene.traverse(child => {
            if(child.uuid === uuid) {
                this.select(child);
            }
        })
    }

    deselect() {
        this.select(undefined);
    }

    focus(object: THREE.Object3D | undefined) {
        if(object !== undefined) {
            this.signals.objectFocused.dispatch(object);
        }
    }

    focusById(id: number) {
        this.focus(
            this.scene.getObjectById(id)
        )
    }

    clear() {
        //TODO
        // this.history.clear();
        // this.storage.clear();

        this.camera = DEFAULT_CAMERA;
        this.scene.name = 'Scene';
        this.scene.userData = {};
        this.scene.background = new THREE.Color(0xaaaaaa);
        this.scene.fog = null;

        const objects = this.scene.children;

        while(objects.length > 0) {
            this.removeObject(objects[0]);
        }

        this.geometries = {};
        this.materials = {};
        this.textures = {};

        this.materialsRefCounter.clear();

        this.deselect();

        this.signals.editorCleared.dispatch();
    }

    fromJSON(json: any) {
        const loader = new THREE.ObjectLoader();
        const camera = loader.parse(json.camera);

        this.camera = <THREE.PerspectiveCamera>camera;
        this.camera.aspect = DEFAULT_CAMERA.aspect;
        this.camera.updateProjectionMatrix();

        // this.history.fromJSON(json.history);

        loader.parse(json.scene, (scene) => this.setScene(<THREE.Scene>scene));
    }
    // TODO
    toJSON() {
        const scene = this.scene;

        return {
            metadata: {},
            project: {

            },
            camera: this.camera.toJSON(),
            scene: this.scene.toJSON(),

        }
    }
}


