import React, { useState } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';
import { createModel } from 'hox';

import useSelected from './use-selected';

const DEFAULT_BOX_GEOMETRY: BoxGeometryModel = {
	type: 'BoxBufferGeometry',
	name: '',
	uuid: THREE.MathUtils.generateUUID(),
	width: 1,
	height: 1,
	depth: 1,
	widthSegments: 1,
	heightSegments: 1,
	depthSegments: 1,
};

const DEFAULT_BOX: BoxModel = {
	type: 'Mesh',
	name: 'Box',
	uuid: THREE.MathUtils.generateUUID(),
	position: new THREE.Vector3(0, 0, 0),
	rotation: new THREE.Euler(0, 0, 0),
	scale: new THREE.Vector3(1.0, 1.0, 1.0),
	visible: true,
	frustumCulled: true,
	castShadow: false,
	userData: {},
	geometry: DEFAULT_BOX_GEOMETRY,
};

function useBox() {
	const [boxes, setBoxes] = useState<BoxModel[]>([]);

	const { selectedUuid } = useSelected();

	const getSelected = () => _.find(boxes, box => box.uuid === selectedUuid);
	const addBox = (box: BoxModel = DEFAULT_BOX) => {
		return setBoxes([...boxes, { ...DEFAULT_BOX, ...box }]);
	};
	const removeBox = (uuid: string) => setBoxes(_.filter(boxes, box => box.uuid === uuid));

	return {
		boxes,
		getSelected,
		addBox,
		removeBox,
	};
}

export default createModel(useBox);

export interface BoxModel {
	type: 'Mesh';
	uuid: string;
	name: string;
	position: THREE.Vector3;
	rotation: THREE.Euler;
	scale: THREE.Vector3;
	visible: boolean;
	frustumCulled: boolean;
	castShadow: boolean;
	userData: any;
	geometry: BoxGeometryModel;
	material?: BoxMaterialModel;
}

interface BoxGeometryModel {
	type?: 'BoxBufferGeometry';
	uuid?: string;
	name?: string;
	width?: number;
	height?: number;
	depth?: number;
	widthSegments?: number;
	heightSegments?: number;
	depthSegments?: number;
	attributes?: THREE.BufferAttribute; //TODO
}

interface BoxMaterialModel {
	[key: string]: any;
}
