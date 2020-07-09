import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import useOrbitMode from '../../models/orbit';
import useSelected from '../../models/use-selected';
import useObjectList from '../../models/object-list';
import { getMousePosition } from '../../utils/dom';
// TODO
import { BoxList } from '../three/box-list';

export function ViewportEditor() {
	const orbitMode = useOrbitMode();
	const { objects } = useObjectList();
	const { selectedUuid, setSelected } = useSelected();
	const { gl, scene, camera } = useThree();

	const onDownPosition = new THREE.Vector2();
	const onUpPosition = new THREE.Vector2();
	const onDblPosition = new THREE.Vector2();
	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2();

	function getIntersects(point: THREE.Vector2, objects: THREE.Object3D[]) {
		mouse.set(point.x * 2 - 1, -(point.y * 2) + 1);
		raycaster.setFromCamera(mouse, camera);
		return raycaster.intersectObjects(objects);
	}

	useEffect(() => {
		const dom = gl.domElement;
		function onMouseUp(evt: MouseEvent) {
			const array = getMousePosition(dom, evt.clientX, evt.clientY);
			onUpPosition.fromArray(array);
			if (onDownPosition.distanceTo(onUpPosition) === 0) {
				const intersects = getIntersects(onUpPosition, objects);

				if (intersects.length > 0) {
					const object = intersects[0].object;
					const uuid = object.uuid;
					setSelected(uuid);
				} else {
					setSelected(null);
				}
			}
			dom.removeEventListener('mouseup', onMouseUp, false);
		}
		function onMouseDown(evt: MouseEvent) {
			const array = getMousePosition(dom, evt.clientX, evt.clientY);
			onDownPosition.fromArray(array);
			dom.addEventListener('mouseup', onMouseUp, false);
		}

		function onDblclick(evt: MouseEvent) {
			console.log();
		}

		dom.addEventListener('mousedown', onMouseDown, false);
	});

	return (
		<>
			<pointLight position={[10, 10, 10]} />
			<BoxList />
			<OrbitControls enabled={orbitMode.enabled} />
		</>
	);
}
