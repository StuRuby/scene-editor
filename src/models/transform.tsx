import React, { useState } from 'react';
import { createModel } from 'hox';

import { TransformMode } from '../config/constants';

function useTransformMode() {
	const [mode, setMode] = useState(TransformMode.translate);
	const setTranslateMode = () => setMode(TransformMode.translate);
	const setRotateMode = () => setMode(TransformMode.rotate);
	const setScaleMode = () => setMode(TransformMode.scale);

	return {
		mode,
		setTranslateMode,
		setRotateMode,
		setScaleMode,
	};
}

export default createModel(useTransformMode);
