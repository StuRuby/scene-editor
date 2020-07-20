import React from 'react';
import * as THREE from 'three';

import useBox from '../../models/use-box';

export function AddGroup() {
	return <div>组</div>;
}

export function AddPlane() {
	return <div>平面</div>;
}

export function AddBox() {
	const { addBox } = useBox();

	const onClick = () => {
		const uuid = THREE.MathUtils.generateUUID();
		console.log(uuid, 'add_uuid');
		addBox({ uuid });
	};
	return <div onClick={onClick}>box</div>;
}

export function AddCircle() {
	return <div>圆</div>;
}

export function AddPointLight() {
	return <div>点光源</div>;
}

export function AddSpotLight() {
	return <div>聚光灯</div>;
}

export function AddDirectionalLight() {
	return <div>平行光</div>;
}

export function AddHemiSphereLight() {
	return <div>半球光</div>;
}

export function AddAmbientLight() {
	return <div>环境光</div>;
}

export function AddPerspectiveCamera() {
	return <div>透视相机</div>;
}

export function AddOrthographicCamera() {
	return <div>正交相机</div>;
}
