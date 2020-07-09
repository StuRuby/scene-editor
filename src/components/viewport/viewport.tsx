import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import useOrbitMode from '../../models/orbit';
import useSelected from '../../models/use-selected';
// TODO
import { BoxList } from '../three/box-list';

export function ViewportEditor() {
	const orbitMode = useOrbitMode();
	const { selectedUuid, setSelected } = useSelected();

	const onDownPosition = new THREE.Vector2();
	const onUpPosition = new THREE.Vector2();
	const onDblPosition = new THREE.Vector2();

	function onClick(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		setSelected(null);
	}
	return (
		<Canvas onClick={onClick}>
			<pointLight position={[10, 10, 10]} />
			<BoxList />
			<OrbitControls enabled={orbitMode.enabled} />
		</Canvas>
	);
}
