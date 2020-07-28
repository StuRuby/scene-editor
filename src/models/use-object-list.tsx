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

function deepCloneSet(set: Set) {
	return new Set([...set]);
}

function useObjectList() {
	const [ids, setIds] = useState<string[]>([]);

	const addObject = (uuid: string) => {
		setIds([...ids, uuid]);
	};
	const removeObject = (uuid: string) => {
		setIds(_.remove(ids, id => id === uuid));
	}

	return {
		ids,
		addObject,
		removeObject
	}
}

export default createModel(useObjectList);


