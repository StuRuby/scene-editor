import React from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';

import useTransformMode from '../../models/transform';
import { TransformMode } from '../../config/constants';
import { RadioChangeEvent } from 'antd/lib/radio';

const ViewportToolbarDiv = styled.div`
	position: absolute;
	bottom: 10px;
	font-size: 12px;
	left: 50%;
	margin-left: -235px;
`;

export function ViewportToolbar() {
	const { mode, setRotateMode, setScaleMode, setTranslateMode } = useTransformMode();
	const onSelectChange = (evt: RadioChangeEvent) => {
		const value = evt.target.value;
		switch (value) {
			case TransformMode.translate:
				setTranslateMode();
				break;
			case TransformMode.rotate:
				setRotateMode();
				break;
			case TransformMode.scale:
				setScaleMode();
				break;
			default:
				break;
		}
	};
	return (
		<ViewportToolbarDiv>
			<Radio.Group defaultValue={mode} onChange={onSelectChange}>
				<Radio.Button value={TransformMode.translate}>平移</Radio.Button>
				<Radio.Button value={TransformMode.rotate}>旋转</Radio.Button>
				<Radio.Button value={TransformMode.scale}>缩放</Radio.Button>
			</Radio.Group>
		</ViewportToolbarDiv>
	);
}
