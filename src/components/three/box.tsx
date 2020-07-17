import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';

import { TransformControl } from './transform-controls';
import { BoxModel } from '../../models/use-box';
import useSelected from '../../models/use-selected';
import objectList from '../../models/object-list';

export function Box(props: Props) {
	const { selectedUuid } = useSelected();
	const box = useRef<THREE.Object3D>(null);

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


	useEffect(() => {
		const current = box.current;
		if (current) {
			objectList.addObject(current);
		}
		return () => {
			if (current) {
				objectList.removeObject(current);
			}
		};
	}, [uuid, selectedUuid]);

	const boxMesh = (
		<mesh
			ref={box}
			uuid={uuid}
			name={name}
			visible={visible}
			userData={userData}
			position={position}
			rotation={rotation}
			scale={scale}
			frustumCulled={frustumCulled}
			castShadow={castShadow}
			dispose={null}
		>
			<boxBufferGeometry
				uuid={geometry?.uuid}
				name={geometry?.name}
				attach="geometry"
				args={[
					geometry?.width,
					geometry?.height,
					geometry?.depth,
					geometry?.widthSegments,
					geometry?.heightSegments,
					geometry?.depthSegments,
				]}
			/>
			<meshStandardMaterial attach="material" color="hotpink" transparent />
		</mesh>
	);

	if (selectedUuid === uuid) {
		return <>
			<TransformControl ref={box} />
			{boxMesh}
		</>
	}
	return boxMesh;
}

interface Props {
	box: BoxModel;
}
