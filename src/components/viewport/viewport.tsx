import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import { TransformControl } from '../three/transform-controls';
import useOrbitMode from '../../models/orbit';
import useScene from '../../models/use-scene';

// TODO
import { BoxList } from '../three/box-list';

export function ViewportEditor() {
	const orbitMode = useOrbitMode();
	const scene = useScene();

	return (
		<Canvas>
			<pointLight position={[10, 10, 10]} />
			<BoxList />
			<OrbitControls enabled={orbitMode.enabled} />
		</Canvas>
	);
}
