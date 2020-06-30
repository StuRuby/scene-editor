import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import { TransformControl } from '../three/transform-controls';
import useOrbitMode from '../../models/orbit';

export function ViewportEditor() {
	const orbitMode = useOrbitMode();
	return (
		<Canvas>
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<sphereBufferGeometry attach="geometry" />
				<meshStandardMaterial attach="material" color="hotpink" />
			</mesh>
			<TransformControl />
			<OrbitControls enabled={orbitMode.enabled} />
		</Canvas>
	);
}
