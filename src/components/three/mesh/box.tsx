import React from 'react';
import * as THREE from 'three';

import { Mesh } from '@src/models/use-mesh-list';
import useSelected from '@src/models/use-selected';

export default React.forwardRef((props, ref) => {
    const { setSelected } = useSelected();
    const { instance } = props;
    const { uuid, name, visible, userData, position, rotation, scale, frustumCulled, castShadow, geometry } = instance;
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
        <meshStandardMaterial attach="material" color="hotpink" transparent />
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
    };

    return box;

}


interface Props {
    instance: Mesh
}
