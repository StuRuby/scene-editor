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
	const { getMesh, updateMeshGeometry } = useMeshList();

	if (!selectedUuid) return null;
	const selected = getMesh(selectedUuid);
	if (!selected) return null;

	const { geometry } = selected;
	const meshUuid = selected.uuid;
	if (!geometry) return null;

	const { type, uuid, name, width, height, depth, widthSegments, heightSegments, depthSegments, attributes } = geometry;

	const onNameUpdate = (evt) => updateMeshGeometry(meshUuid, { name: evt.target.value });

	const onWidthUpdate = value => updateMeshGeometry(meshUuid, { width: value });
	const onHeightUpdate = value => updateMeshGeometry(meshUuid, { height: value });
	const onDepthUpdate = value => updateMeshGeometry(meshUuid, { depth: value });
	const onWidthSegmentsUpdate = value => updateMeshGeometry(meshUuid, { widthSegments: value });
	const onHeightSegmentsUpdate = value => updateMeshGeometry(meshUuid, { heightSegments: value });
	const onDepthSegmentsUpdate = value => updateMeshGeometry(meshUuid, { depthSegments: value });

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
						<Input defaultValue={name} size="small" onChange={onNameUpdate} />
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
							defaultValue={width}
							size="small"
							style={{ width: '60px' }}
							onChange={onWidthUpdate}
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
							value={height}
							size="small"
							style={{ width: '60px' }}
							onChange={onHeightUpdate}
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
							value={depth}
							size="small"
							style={{ width: '60px' }}
							onChange={onDepthUpdate}
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
							value={widthSegments}
							size="small"
							style={{ width: '60px' }}
							onChange={onWidthSegmentsUpdate}
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
							value={heightSegments}
							size="small"
							style={{ width: '60px' }}
							onChange={onHeightSegmentsUpdate}
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
							value={depthSegments}
							size="small"
							style={{ width: '60px' }}
							onChange={onDepthSegmentsUpdate}
						/>
					</Col>
				</Row>
			)}
		</Space>
	</SidebarContainer>
}
