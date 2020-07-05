import React from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';

import { TransformControl } from './transform-controls';
import { BoxModel } from '../../models/use-box';
import useSelected from '../../models/use-selected';

export function Box(props: Props) {
	const { selectedUuid } = useSelected();

	const {
		uuid,
		name,
		position,
		rotation,
		scale,
		visible,
		frustumCulled,
		castShadow,
		userData,
		geometry,
	} = props.box;

	const boxMesh = (
		<mesh
			uuid={uuid}
			name={name}
			visible={visible}
			userData={userData}
			position={position}
			rotation={rotation}
			scale={scale}
			frustumCulled={frustumCulled}
			castShadow={castShadow}>
			<boxBufferGeometry
				uuid={geometry.uuid}
				name={geometry.name}
				attach="geometry"
				args={[
					geometry.width,
					geometry.height,
					geometry.depth,
					geometry.widthSegments,
					geometry.heightSegments,
					geometry.depthSegments,
				]}
			/>
			<meshStandardMaterial attach="material" color="hotpink" transparent />
		</mesh>
	);

	if (selectedUuid === uuid) return <TransformControl>{boxMesh}</TransformControl>;
	return boxMesh;
}

interface Props {
	box: BoxModel;
}
