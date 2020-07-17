import React, { useState } from 'react';
import * as THREE from 'three';
import { createModel } from 'hox';

const DEFAULT_SCENE: SceneModel = {
	type: 'Scene',
	name: 'Scene',
	position: new THREE.Vector3(0, 0, 0),
	rotation: new THREE.Euler(0, 0, 0),
	scale: new THREE.Vector3(1.0, 1.0, 1.0),
	visible: true,
	frustumCulled: true,
	castShadow: false,
	userData: {},
};

function useScene() {
	const [scene, setScene] = useState<SceneModel>(DEFAULT_SCENE);
	return {
		scene,
		setScene,
	};
}

export default createModel(useScene);

interface SceneModel {
	type?: 'Scene';
	uuid?: string;
	name?: string;
	position?: THREE.Vector3;
	rotation?: THREE.Euler;
	scale?: THREE.Vector3;
	visible?: boolean;
	frustumCulled?: boolean;
	castShadow?: boolean;
	userData?: any;
}
