/**
 * 设置选中`three.js`元素的uuid
 */
import React, { useState } from 'react';
import { createModel } from 'hox';

function useSelected() {
	const [selectedUuid, setSelected] = useState<string>();
	return {
		selectedUuid,
		setSelected,
	};
}

export default createModel(useSelected);
