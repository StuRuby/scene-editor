import React from 'react';
import THREE from 'three';
import styled from 'styled-components';
import { List } from 'antd';

const ViewportInfoDiv = styled.div`
	position: absolute;
	left: 10px;
	bottom: 10px;
	font-size: 12px;
	color: rgb(255, 255, 255);
`;

const ListItem = styled(List)`
	color: #fff;
`;

export function ViewportInfo() {
	return (
		<ViewportInfoDiv>
			<List split={false} size="small">
				<ListItem key="objects">物体：0</ListItem>
				<ListItem key="vertices">顶点：0</ListItem>
				<ListItem key="triangles">三角形：0</ListItem>
				<ListItem key="frametime">帧时：0ms</ListItem>
			</List>
		</ViewportInfoDiv>
	);
}
