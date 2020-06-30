import React, { useState } from 'react';
import * as THREE from 'three';
import { createModel } from 'hox';

function useObjects() {
	const [objects, setObjects] = useState<Objects>({});
	return {
		objects,
		setObjects,
	};
}

export default createModel(useObjects);

interface Objects {
	type?: string;
	uuid?: string;
	name?: string;
	position?: THREE.Vector3;
	rotation?: THREE.Vector3;
	scale?: THREE.Vector3;
	visible?: boolean;
	frustumCulled?: boolean;
	renderOrder?: boolean;
	// OrthographicCamera
	left?: number;
	right?: number;
	top?: number;
	bottom?: number;
	// PerspectiveCamera
	fov?: number;
	near?: number;
	far?: number;
	// light
	intensity?: number;
	color?: number;
	groundColor?: number;
	distance?: number;
	angle?: number;
	penumbra?: number;
	decay?: number;
	castShadow?: boolean;
	receiveShadow?: boolean;
	shadow?: boolean;
}
