import React from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import classnames from 'classnames';
import { Space, Row, Col, InputNumber, Input, List, Button } from 'antd';

import useSelected from '@src/models/use-selected';
import useMeshList from '@src/models/use-mesh-list';
import useVertexNormalHelper from '@src/models/use-vertex-normal-helper';
import { isNotUndefined } from '@src/utils/lodash-enhance';

const SidebarContainer = styled.div`
	.ant-btn.active {
		background-color: #ff4d4f;
		border-color: #ff4d4f;
	}
`;

export function SidebarGeometryProperty() {
	const { selectedUuid } = useSelected();
	const { getMesh, updateMeshGeometry } = useMeshList();
	const { vertexNormalHelperVisible, setVertexNormalHelperVisible } = useVertexNormalHelper();

	if (!selectedUuid) return null;
	const selected = getMesh(selectedUuid);
	if (!selected) return null;

	const { geometry } = selected;
	const meshUuid = selected.uuid;
	if (!geometry) return null;

	const { type, uuid, name, width, height, depth, widthSegments, heightSegments, depthSegments, index, attributes } = geometry;

	const onNameUpdate = (evt) => updateMeshGeometry(meshUuid, { name: evt.target.value });

	const onWidthUpdate = value => updateMeshGeometry(meshUuid, { width: value });
	const onHeightUpdate = value => updateMeshGeometry(meshUuid, { height: value });
	const onDepthUpdate = value => updateMeshGeometry(meshUuid, { depth: value });
	const onWidthSegmentsUpdate = value => updateMeshGeometry(meshUuid, { widthSegments: value });
	const onHeightSegmentsUpdate = value => updateMeshGeometry(meshUuid, { heightSegments: value });
	const onDepthSegmentsUpdate = value => updateMeshGeometry(meshUuid, { depthSegments: value });

	const onVertexNormalHelperClicked = () => {
		setVertexNormalHelperVisible(!vertexNormalHelperVisible);
	};



	console.log(attributes, 'attributes');

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
			{isNotUndefined(attributes) && (
				<Row align="middle">
					<Col span={6} offset={1}>
						属性
					</Col>
					<Col span={15}>
						<List
							size='small'
							bordered
							dataSource={
								[`索引 : ${index || 'null'}`].concat(
									_.map(
										_.keys(attributes),
										key => {
											const value: THREE.BufferAttribute = attributes[key];
											const text = `${value.count} (${value.itemSize})`;
											return `${key} : ${text}`;
										}
									)
								)
							}
							renderItem={item => <List.Item>{item}</List.Item>}
						/>
					</Col>
				</Row>
			)}
			<Row align='middle'>
				<Col span={8} offset={8}>
					<Button
						type='primary'
						size='small'
						className={classnames({ 'active': vertexNormalHelperVisible })}
						onClick={onVertexNormalHelperClicked}
					>显示顶点法线</Button>
				</Col>
			</Row>
		</Space>
	</SidebarContainer>
}
