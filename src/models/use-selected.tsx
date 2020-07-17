/**
 * 设置选中`three.js`元素的uuid
 */
import React, { useState } from 'react';
import { createModel } from 'hox';

function useSelected() {
	const [selectedUuid, setSelected] = useState<string | null>(null);
	return {
		selectedUuid,
		setSelected,
	};
}

export default createModel(useSelected);
