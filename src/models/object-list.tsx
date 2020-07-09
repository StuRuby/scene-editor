import React, { useState } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';
import { createModel } from 'hox';

function useObjectList() {
	const [objectList, setObjectList] = useState<THREE.Object3D[]>();

	const addObject = (object: THREE.Object3D, parent?: THREE.Object3D, index?: number) => {
		const list = [...objectList, object];
		return setObjectList(list);
	};

	const removeObject = (object: THREE.Object3D) => {
		const uuid = object.uuid;
		const list = objectList?.filter(item => item.uuid !== uuid);
		return setObjectList(list);
	};

	return {
		objectList,
		addObject,
		removeObject,
	};
}

export default createModel(useObjectList);
