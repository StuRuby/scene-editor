import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';

import { TransformControl } from './transform-controls';
import { BoxModel } from '../../models/use-object-list';
import useSelected from '../../models/use-selected';
import objectList from '../../models/object-list';

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



export function Box(props: Props) {
	const { selectedUuid } = useSelected();
	const box = useRef<THREE.Object3D>(null);
	const { uuid } = props;

	let object = objectList.getObject(uuid);

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
			name={object?.name || ''}
			// visible={visible}
			// userData={userData}
			// position={position}
			// rotation={rotation}
			// scale={scale}
			// frustumCulled={frustumCulled}
			// castShadow={castShadow}
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
	return object ?;
}

interface Props {
	box: BoxModel;
}


interface BoxModel {
	type?: 'Mesh';
	uuid: string;
	name?: string;
	position?: THREE.Vector3;
	rotation?: THREE.Euler;
	scale?: THREE.Vector3;
	visible?: boolean;
	frustumCulled?: boolean;
	castShadow?: boolean;
	userData?: any;
	geometry?: BoxGeometryModel;
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