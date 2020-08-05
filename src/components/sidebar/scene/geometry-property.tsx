import React from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Space, Row, Col, InputNumber, Input } from 'antd';

import useSelected from '@src/models/use-selected';
import useMeshList from '@src/models/use-mesh-list';
import { isNotUndefined } from '@src/utils/lodash-enhance';

const SidebarContainer = styled.div`

`;

export function SidebarGeometryProperty() {
	const { selectedUuid } = useSelected();
	const { getMesh, updateMesh } = useMeshList();

	if (!selectedUuid) return null;
	const selected = getMesh(selectedUuid);
	if (!selected) return null;

	const { geometry } = selected;
	if (!geometry) return null;

	const { type, uuid, name, width, height, depth, widthSegments, heightSegments, depthSegments, attributes } = geometry;

	const onNameUpdate = (evt) => {

	}

	return <SidebarContainer>
		<Space direction="vertical" style={{ width: '100%' }}>
			{isNotUndefined(type) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						类型
					</Col>
					<Col span={15}>{type}</Col>
				</Row>
			)}
			{isNotUndefined(uuid) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						识别码
					</Col>
					<Col span={13}>{uuid}</Col>

				</Row>
			)}
			{isNotUndefined(name) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						名称
					</Col>
					<Col span={15}>
						<Input value={name} size="small" onChange={onNameUpdate} />
					</Col>
				</Row>
			)}
			{isNotUndefined(width) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						宽度
					</Col>
					<Col span={15}>
						<InputNumber
							min={0}
							step={0.1}
							value={position.x}
							size="small"
							style={{ width: '60px' }}
							onChange={onPositionXUpdate}
						/>
					</Col>
				</Row>
			)}
			{isNotUndefined(height) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						高度
					</Col>
					<Col span={15}>
						<InputNumber
							min={0}
							step={0.1}
							value={position.x}
							size="small"
							style={{ width: '60px' }}
							onChange={onPositionXUpdate}
						/>
					</Col>
				</Row>
			)}
			{isNotUndefined(depth) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						深度
					</Col>
					<Col span={15}>
						<InputNumber
							min={0}
							step={0.1}
							value={position.x}
							size="small"
							style={{ width: '60px' }}
							onChange={onPositionXUpdate}
						/>
					</Col>
				</Row>
			)}
			{isNotUndefined(widthSegments) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						宽度分段
					</Col>
					<Col span={15}>
						<InputNumber
							min={0}
							step={0.1}
							value={position.x}
							size="small"
							style={{ width: '60px' }}
							onChange={onPositionXUpdate}
						/>
					</Col>
				</Row>
			)}
			{isNotUndefined(heightSegments) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						高度分段
					</Col>
					<Col span={15}>
						<InputNumber
							min={0}
							step={0.1}
							value={position.x}
							size="small"
							style={{ width: '60px' }}
							onChange={onPositionXUpdate}
						/>
					</Col>
				</Row>
			)}
			{isNotUndefined(depthSegments) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						深度分段
					</Col>
					<Col span={15}>
						<InputNumber
							min={0}
							step={0.1}
							value={position.x}
							size="small"
							style={{ width: '60px' }}
							onChange={onPositionXUpdate}
						/>
					</Col>
				</Row>
			)}
		</Space>
	</SidebarContainer>
}
