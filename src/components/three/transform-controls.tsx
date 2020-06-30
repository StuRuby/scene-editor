import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls';
import { TransformControls } from 'drei';

import useTransformMode from '../../models/transform';
import useOrbitMode from '../../models/orbit';

export function TransformControl() {
	const transform = useRef<TransformControlsImpl>();
	const transformMode = useTransformMode();
	const orbitMode = useOrbitMode();

	useEffect(() => {
		if (transform.current) {
			const controls = transform.current;
			controls.setMode(transformMode.mode);
			const fn = (event: THREE.Event) => {
				orbitMode.setOrbitEnabled(!event.value);
			};
			controls.addEventListener('dragging-changed', fn);
			return () => controls.removeEventListener('dragging-changed', fn);
		}
	});
	return (
		<TransformControls ref={transform}>
			<mesh>
				<boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
				<meshNormalMaterial attach="material" />
			</mesh>
		</TransformControls>
	);
}
