import React, { useRef, useEffect } from 'react';
import { useResource, useThree, extend } from 'react-three-fiber';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper';


import { Mesh as MeshModel } from '@src/models/use-mesh-list';
import useSelected from '@src/models/use-selected';
import useTransformMode from '@src/models/use-transform-mode';
import useOrbitMode from '@src/models/use-orbit-mode';
import useMeshList from '@src/models/use-mesh-list';
import useVertexNormalHelper from '@src/models/use-vertex-normal-helper';
import Box from './mesh/box';

extend({ TransformControls, VertexNormalsHelper });


export function Mesh(props: Props) {
    const transform = useRef<TransformControls>();
    const { instance } = props;
    const [ref, mesh] = useResource<THREE.Mesh>();
    const { camera, gl, scene } = useThree();
    const { selectedUuid } = useSelected();
    const { mode } = useTransformMode();
    const { setOrbitEnabled } = useOrbitMode();
    const { updateMesh } = useMeshList();
    const { vertexNormalHelperVisible } = useVertexNormalHelper();

    const { type, uuid } = instance;

    let MeshComponent;
    switch (type) {
        case 'box':
            MeshComponent = <Box instance={instance} ref={ref} />;
            break;
        default:
            MeshComponent = <Box instance={instance} ref={ref} />;
            break;
    }

    useEffect(() => {
        const controls = transform.current;
        const callback = (evt: THREE.Event) => {
            const { position, rotation, scale } = mesh;
            updateMesh(uuid, { uuid, position, rotation, scale });
            setOrbitEnabled(!evt.value);
        };
        if (controls) {
            controls.setMode(mode);
            controls.addEventListener('dragging-changed', callback);
        }
        return () => {
            if (controls) {
                controls.removeEventListener('dragging-changed', callback)
            }
        };
    }, [uuid, selectedUuid, mode]);

    if (selectedUuid === uuid) {
        return <>
            {MeshComponent}
            {mesh && <transformControls ref={transform} args={[camera, gl.domElement]} onUpdate={self => self.attach(mesh)} />}
            {mesh && vertexNormalHelperVisible && <vertexNormalsHelper args={[mesh, 2, 0x00ff00, 1]} />}
        </>;
    }

    return MeshComponent;
}

interface Props {
    instance: MeshModel
}