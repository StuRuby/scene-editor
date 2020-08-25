import React from 'react';
import * as THREE from 'three';

import { Mesh } from '@src/models/use-mesh-list';
import useSelected from '@src/models/use-selected';
import { MeshStandardMaterial } from '@src/components/three/material/mesh-standard-material';

export default React.forwardRef((props: Props, ref: any) => {
    const { setSelected } = useSelected();
    const { instance } = props;
    const { uuid, name, visible, userData, position, rotation, scale, frustumCulled, castShadow, geometry, material } = instance;

    let Material = null;
    switch (material?.type) {
        case 'MeshStandardMaterial':
            Material = <MeshStandardMaterial material={material} />
            break;
        case 'MeshPhongMaterial':

            break;
        default:
            break;
    }

    return <mesh
        ref={ref}
        uuid={uuid}
        name={name}
        visible={visible}
        userData={userData}
        position={position}
        rotation={rotation}
        scale={scale}
        frustumCulled={frustumCulled}
        castShadow={castShadow}
        onClick={(evt) => setSelected(uuid)}
        dispose={null}
    >
        <boxBufferGeometry
            uuid={geometry?.uuid}
            name={geometry?.name}
            attach="geometry"
            args={[
                geometry?.width,
                geometry?.height,
                geometry?.depth,
                geometry?.widthSegments,
                geometry?.heightSegments,
                geometry?.depthSegments,
            ]}
        />
        {Material}
    </mesh>
});


export function setupDefaultBox() {
    const box: Mesh = {
        type: 'box',
        name: 'box',
        uuid: THREE.MathUtils.generateUUID(),
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0, 0, 0),
        scale: new THREE.Vector3(1.0, 1.0, 1.0),
        visible: true,
        frustumCulled: true,
        castShadow: false,
        userData: {},
        geometry: {
            index: null,
            type: 'BoxBufferGeometry',
            name: '',
            uuid: THREE.MathUtils.generateUUID(),
            width: 1,
            height: 1,
            depth: 1,
            widthSegments: 1,
            heightSegments: 1,
            depthSegments: 1,
            attributes: {
                position: new THREE.BufferAttribute(
                    new Float32Array([
                        -1.0, -1.0, 1.0,
                        1.0, -1.0, 1.0,
                        1.0, 1.0, 1.0,

                        1.0, 1.0, 1.0,
                        -1.0, 1.0, 1.0,
                        -1.0, -1.0, 1.0
                    ]), 3),
            }
        },
        material: {
            type: 'MeshStandardMaterial',
            uuid: THREE.MathUtils.generateUUID(),
            name: '',
            color: 0xffffff,
            roughness: 1.0, // 材质的粗糙程度
            metalness: 0.0, // 材质与金属的相似度
            emissive: 0xffffff,
            vertexTangents: false,// 定义是否使用必须在vec4切线属性中提供的预先计算的顶点切线
            vertexColors: false, // 定义是否使用顶点着色
            skinning: false, // 定义材质是否使用蒙皮
            map: null, // 颜色贴图
            alphaMap: null, // alpha贴图是一张灰度纹理,用于控制整个表面的不透明度
            // bumpMap: null, // 用于创建凹凸贴图的纹理
            side: THREE.FrontSide,
            flatShading: false, // 定义材质是否使用平面着色进行渲染。默认值为false。
            blending: THREE.NormalBlending, // 在使用此材质显示对象时要使用何种混合。
            opacity: 1.0,
            transparent: false,
            alphaTest: 0, // 设置运行alphaTest时要使用的alpha值。如果不透明度低于此值，则不会渲染材质
            depthTest: true,
            depthWrite: true,
            wireframe: false, // 将几何体渲染为线框
        }
    };

    return box;

}


interface Props {
    instance: Mesh
}
