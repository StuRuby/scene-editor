import THREE from 'three';

import { STATE } from './interface';

export class EditorControl extends THREE.EventDispatcher {
    enabled: boolean;
    center: THREE.Vector3;
    panSpeed: number;
    zoomSpeed: number;
    rotationSpeed: number;

    private vector: THREE.Vector3;
    private delta: THREE.Vector3;
    private box: THREE.Box3;
    private state: STATE;
    private normalMatrix: THREE.Matrix3;
    private pointer: THREE.Vector2;
    private prevPointer: THREE.Vector2;
    private touches: [THREE.Vector3, THREE.Vector3, THREE.Vector3];
    private prevTouches: [THREE.Vector3, THREE.Vector3, THREE.Vector3];
    private prevTouchDistance!: number;
    private spherical: THREE.Spherical;
    private sphere: THREE.Sphere;
    private changeEvent: { type: 'change' };
    private container: HTMLElement;
    private object: THREE.Object3D;
    constructor(object: THREE.Object3D, dom: HTMLElement) {
        super();
        this.enabled = true;
        this.center = new THREE.Vector3();
        this.panSpeed = 0.002;
        this.zoomSpeed = 0.1;
        this.rotationSpeed = 0.005;
        // private
        this.container = dom;
        this.object = object;
        this.state = STATE.NONE;
        this.vector = new THREE.Vector3();
        this.delta = new THREE.Vector3();
        // 边界框
        this.box = new THREE.Box3();

        this.normalMatrix = new THREE.Matrix3();
        this.pointer = new THREE.Vector2();
        this.prevPointer = new THREE.Vector2();
        this.spherical = new THREE.Spherical();
        this.sphere = new THREE.Sphere();
        this.touches = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
        this.prevTouches = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];

        this.changeEvent = { type: 'change' };

        // 绑定`this`
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseWheel = this.onMouseWheel.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        dom.addEventListener('touchstart', this.onTouchStart, false);
        dom.addEventListener('touchmove', this.onTouchMove, false);

        dom.addEventListener('contextmenu', this.onContextMenu, false);
        dom.addEventListener('mousedown', this.onMouseDown, false);
        dom.addEventListener('wheel', this.onMouseWheel, false);
    }

    onTouchStart(evt: TouchEvent) {
        if(this.enabled === false) return;

        switch(evt.touches.length) {
            case 1:
                // 区分高清屏
                this.touches[0]
                    .set(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                this.touches[1]
                    .set(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                break;
            case 2:
                this.touches[0]
                    .set(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                this.touches[1]
                    .set(
                        evt.touches[1].pageX,
                        evt.touches[1].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                this.prevTouchDistance = this.touches[0].distanceTo(this.touches[1]);
                break;
            default:
                break;
        }

        this.prevTouches[0].copy(this.touches[0]);
        this.prevTouches[1].copy(this.touches[1]);
    }

    onTouchMove(evt: TouchEvent) {
        if(this.enabled === false) return;
        evt.preventDefault();
        evt.stopPropagation();

        const getClosest = (touch: THREE.Vector3, touches: [THREE.Vector3, THREE.Vector3, THREE.Vector3]) => {
            let closest = touches[0];
            for(let i in touches) {
                if(closest.distanceTo(touch) > touches[i].distanceTo(touch)) {
                    closest = touches[i];
                }
            }
            return closest;
        };

        switch(evt.touches.length) {
            case 1:
                this.touches[0]
                    .set(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                this.touches[1]
                    .set(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                this.rotate(
                    this.touches[0]
                        .sub(
                            getClosest(this.touches[0], this.prevTouches)
                        )
                        .multiplyScalar(-1)
                )
                break;
            case 2:
                this.touches[0]
                    .set(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);
                this.touches[1]
                    .set(
                        evt.touches[1].pageX,
                        evt.touches[1].pageY,
                        0
                    )
                    .divideScalar(window.devicePixelRatio);

                const distance = this.touches[0].distanceTo(this.touches[1]);
                this.zoom(
                    this.delta.set(0, 0, this.prevTouchDistance - distance)
                );
                this.prevTouchDistance = distance;

                const offset0 = this.touches[0].clone().sub(getClosest(this.touches[0], this.prevTouches));
                const offset1 = this.touches[1].clone().sub(getClosest(this.touches[1], this.prevTouches));
                offset0.x = - offset0.x;
                offset1.x = -offset1.x;

                this.pan(offset0.add(offset1));
                break;
            default:
                break;
        }

        this.prevTouches[0].copy(this.touches[0]);
        this.prevTouches[1].copy(this.touches[1]);
    }

    onContextMenu(evt: MouseEvent) {
        evt.preventDefault();
    }

    onMouseDown(evt: MouseEvent) {
        if(this.enabled === false) return;

        switch(evt.button) {
            case STATE.ROTATE:
                this.state = STATE.ROTATE;
                break;
            case STATE.ZOOM:
                this.state = STATE.ZOOM;
                break;
            case STATE.PAN:
                this.state = STATE.PAN;
                break;
            default:
                this.state = STATE.NONE;
                break;
        }

        this.prevPointer.set(evt.clientX, evt.clientY);

        this.container.addEventListener('mousemove', this.onMouseMove, false);
        this.container.addEventListener('mouseup', this.onMouseUp, false);
        this.container.addEventListener('mouseout', this.onMouseUp, false);
        this.container.addEventListener('dblclick', this.onMouseUp, false);
    }

    onMouseWheel(evt: WheelEvent) {
        evt.preventDefault();
        const z = evt.deltaY > 0 ? 1 : -1;
        this.zoom(
            this.delta.set(0, 0, z)
        );
    }

    onMouseMove(evt: MouseEvent) {
        if(this.enabled === false) return;

        this.pointer.set(evt.clientX, evt.clientY);

        const movementX = this.pointer.x - this.prevPointer.x;
        const movementY = this.pointer.y - this.prevPointer.y;

        if(this.state === STATE.ROTATE) {

        }

        this.prevPointer.set(evt.clientX, evt.clientY);
    }

    onMouseUp(evt: MouseEvent) {
        this.container.removeEventListener('mousemove', this.onMouseMove, false);
        this.container.removeEventListener('mouseup', this.onMouseUp, false);
        this.container.removeEventListener('mouseout', this.onMouseUp, false);
        this.container.removeEventListener('dblclick', this.onMouseUp, false);

        this.state = STATE.NONE;
    }

    focus(target: THREE.Object3D) {
        let distance;
        // 设置用来计算边界框的3D对象
        this.box.setFromObject(target);

        if(this.box.isEmpty() === false) {
            // 获取边界框的中心点坐标
            this.box.getCenter(this.center);
            // 获取包围球的半径
            distance = this.box.getBoundingSphere(this.sphere).radius;
        } else {
            // 聚焦到`Group`、`AmbientLight`等
            // `target.matrixWorld`：物体的世界变换
            // 从物体的世界变换中，设置中心点为其中与位置相关的元素
            this.center.setFromMatrixPosition(target.matrixWorld);
            distance = 0.1;
        }

        this.delta.set(0, 0, 1);
        // 将表示对象局部旋转的四元数应用到`delta`值上
        this.delta.applyQuaternion(this.object.quaternion);
        // 将`distance`* 4 作为标量与`delta`相乘
        this.delta.multiplyScalar(distance * 4);

        this.object.position.copy(this.center).add(this.delta);

        this.dispatchEvent(this.changeEvent);
    }

    pan(delta: THREE.Vector3) {
        // 计算物体的坐标与中心点之间的距离
        const distance = this.object.position.distanceTo(this.center);
        // 计算拖拽后的`delta`值
        this.delta.multiplyScalar(distance * this.panSpeed);
        this.delta.applyMatrix3(this.normalMatrix.getNormalMatrix(this.object.matrix));

        this.object.position.add(this.delta);
        this.center.add(this.delta);

        this.dispatchEvent(this.changeEvent);
    }

    zoom(delta: THREE.Vector3) {
        const distance = this.object.position.distanceTo(this.center);
        this.delta.multiplyScalar(distance * this.zoomSpeed);

        if(this.delta.length() > distance) return;

        this.delta.applyMatrix3(this.normalMatrix.getNormalMatrix(this.object.matrix));
        this.object.position.add(this.delta);

        this.dispatchEvent(this.changeEvent);
    }

    rotate(delta: THREE.Vector3) {
        // 计算物体的位置减去中心点位置
        this.vector.copy(this.object.position).sub(this.center);
        // 设置`this.vector`的值为球坐标的半径、方位角(theta)、极坐标(phi)
        // `theta`:原点到目标点的连线在xy平面的投影线与正x轴之间的方位角，在地理坐标系中表示经度
        // `phi`:原点到目标点的连线与正z轴之间的极角，在地理坐标系中表示纬度
        // https://zh.wikipedia.org/wiki/%E7%90%83%E5%BA%A7%E6%A8%99%E7%B3%BB#%E5%9C%B0%E7%90%86%E5%BA%A7%E6%A8%99%E7%B3%BB
        this.spherical.setFromVector3(this.vector);
        // 计算旋转后球坐标的x值 
        this.spherical.theta += this.delta.x * this.rotationSpeed;
        // 计算旋转后球坐标的y值
        this.spherical.phi += this.delta.y * this.rotationSpeed;
        // 将极角 phi 的值限制在0.000001 和 pi - 0.000001 之间
        this.spherical.makeSafe();
        // 设置`vector`变量为旋转后的球坐标
        this.vector.setFromSpherical(this.spherical);

        this.object.position.copy(this.center).add(this.vector);
        this.object.lookAt(this.center);

        this.dispatchEvent(this.changeEvent);
    }

    dispose() {
        this.container.removeEventListener('contextmenu', this.onContextMenu, false);
        this.container.removeEventListener('mousedown', this.onMouseDown, false);
        this.container.removeEventListener('wheel', this.onMouseWheel, false);

        this.container.removeEventListener('mousemove', this.onMouseMove, false);
        this.container.removeEventListener('mouseup', this.onMouseUp, false);
        this.container.removeEventListener('mouseout', this.onMouseUp, false);
        this.container.removeEventListener('dblclick', this.onMouseUp, false);

        this.container.removeEventListener('touchstart', this.onTouchStart, false);
        this.container.removeEventListener('touchmove', this.onTouchMove, false);
    }


}