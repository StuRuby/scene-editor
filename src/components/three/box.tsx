import React from 'react';
import * as THREE from 'three';
import { extend } from 'react-three-fiber';

export function Box() {
	return (
		<mesh>
			<boxGeometry></boxGeometry>
			<meshNormalMaterial />
		</mesh>
	);
}
