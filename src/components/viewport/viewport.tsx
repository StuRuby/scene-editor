import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { useThree } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import useOrbitMode from '../../models/orbit';
import useSelected from '../../models/use-selected';
import objectList from '../../models/object-list';
import { getMousePosition } from '../../utils/dom';
// TODO
import { Object3DList } from '../three/object3D-list';

export function ViewportEditor() {
	const orbitMode = useOrbitMode();
	const { setSelected } = useSelected();

	const { gl, camera } = useThree();

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
				const intersects = getIntersects(onUpPosition, objectList.objects);
				debugger;
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

		return () => dom.removeEventListener('mousedown', onMouseDown, false);
	}, []);

	return (
		<>
			<pointLight position={[10, 10, 10]} />
			<Object3DList />
			<OrbitControls enabled={orbitMode.enabled} />
		</>
	);
}
