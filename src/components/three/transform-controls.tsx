import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as _ from 'lodash';
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls';
import { TransformControls } from 'drei';

import useTransformMode from '../../models/transform';
import useOrbitMode from '../../models/orbit';
import useSelected from '../../models/use-selected';
import useBox, { BoxModel } from '../../models/use-box';

export function TransformControl(props: any) {
	const transform = useRef<TransformControlsImpl>();
	const transformMode = useTransformMode();
	const orbitMode = useOrbitMode();
	const { selectedUuid } = useSelected();
	const { updateBox } = useBox();

	useEffect(() => {
		if (transform.current) {
			const controls = transform.current;
			controls.setMode(transformMode.mode);
			const fn = (event: THREE.Event) => {
				orbitMode.setOrbitEnabled(!event.value);
				const object = controls.object;
				console.log(controls, '--')
				if (!selectedUuid || !object) return;
				updateBox(selectedUuid, _.pick(object, ['position', 'rotation', 'scale']) as BoxModel);
				controls.attach(object);
			};
			controls.addEventListener('dragging-changed', fn);
			return () => controls.removeEventListener('dragging-changed', fn);
		}
	}, [selectedUuid]);
	return <TransformControls ref={transform}  {...props} >{props.children}</TransformControls>;
}
