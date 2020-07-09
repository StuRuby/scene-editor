import React, { useState } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';
import { createModel } from 'hox';

function useObjectList() {
	const [objects, setObjectList] = useState<THREE.Object3D[]>([]);

	const addObject = (object: THREE.Object3D, parent?: THREE.Object3D, index?: number) => {
		const list = [...objects, object];
		return setObjectList(list);
	};

	const removeObject = (object: THREE.Object3D) => {
		const uuid = object.uuid;
		const list = objects?.filter(item => item.uuid !== uuid);
		return setObjectList(list);
	};

	return {
		objects,
		addObject,
		removeObject,
	};
}

export default createModel(useObjectList);
