import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';
import { extend, useThree } from 'react-three-fiber';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import useTransformMode from '../../models/transform';
import useOrbitMode from '../../models/orbit';
import useBox, { BoxModel } from '../../models/use-object-list';
import useSelected from '../../models/use-selected';

extend({ TransformControls, OrbitControls });

export const TransformControl = React.forwardRef((props: any, ref: any) => {
    const transform = useRef<TransformControls>();
    const orbit = useRef<OrbitControls>();
    const { camera, gl } = useThree();
    const { updateBox } = useBox();
    const { selectedUuid } = useSelected();

    const { mode } = useTransformMode();
    const orbitMode = useOrbitMode();

    useEffect(() => {
        if (transform.current) {
            const control = transform.current;
            control.setMode(mode);

            const fn = (evt: THREE.Event) => {
                orbitMode.setOrbitEnabled(!evt.value);
                const object = control.object;
                if (!selectedUuid) return;
            };
            control.addEventListener('dragging-changed', fn);
            return () => control.removeEventListener('dragging-changed', fn);
        }
    }, [mode]);
    return (
        <>
            <transformControls ref={transform} args={[camera, gl.domElement]} onUpdate={self => self.attach(ref.current)} />
            <orbitControls ref={orbit} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.1} />
        </>
    );
});