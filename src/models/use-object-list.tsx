import React, { useState } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';
import { createModel } from 'hox';

import useSelected from './use-selected';



function useBox() {
	const [boxes, setBoxes] = useState<BoxModel[]>([]);

	const { selectedUuid } = useSelected();

	const getSelected = () => _.find(boxes, box => box.uuid === selectedUuid);
	const addBox = (box: BoxModel = DEFAULT_BOX) => {
		return setBoxes([...boxes, { ...DEFAULT_BOX, ...box }]);
	};
	const removeBox = (uuid: string) => setBoxes(_.filter(boxes, box => box.uuid === uuid));
	const updateBox = (uuid: string, box: BoxModel) => {
		const updatedBoxes = boxes.map(value => {
			if (value.uuid === uuid) {
				return { ...value, ...box };
			}
			return value;
		});
		return setBoxes(updatedBoxes);
	}

	return {
		boxes,
		getSelected,
		addBox,
		removeBox,
		updateBox,
	};
}

function useObjectList() {
	const [ids, setIds] = useState<Set<string>>(new Set());

	const addObject = (uuid: string) => {
		ids.add(uuid);
	};
	const removeObject = (uuid: string) => {
		ids.delete(uuid);
	}

	return {
		ids,
		addObject,
		removeObject
	}
}

export default createModel(useObjectList);


