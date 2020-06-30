import React, { useState } from 'react';
import * as THREE from 'three';
import { createModel } from 'hox';

function useCommonGeometry() {
	const [commonGeometry, setCommonGeometry] = useState<CommonGeometry | null>(null);
	return {
		commonGeometry,
		setCommonGeometry,
	};
}

export default createModel(useCommonGeometry);

interface CommonGeometry {
	type?: string;
	uuid?: string;
	name?: string;
	bounds?: string;
	showVertexNormals?: boolean;
}
