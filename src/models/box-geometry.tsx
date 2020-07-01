import React, { useState } from 'react';
import * as THREE from 'three';
import { createModel } from 'hox';

function useBoxGeometry() {
	const [boxGeometry, setBoxGeometry] = useState<BoxGeometry | null>(null);

	return {
		boxGeometry,
		setBoxGeometry,
	};
}

export default createModel(useBoxGeometry);

interface BoxGeometry {
	width?: number;
	height?: number;
	depth?: number;
	widthSegments?: number;
	heightSegments?: number;
	depthSegments?: number;
}
