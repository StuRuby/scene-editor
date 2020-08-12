import React from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import classnames from 'classnames';
import { Space, Row, Col, Input, InputNumber, List, Button } from 'antd';

import useMeshList from '@src/models/use-mesh-list';
import useSelected from '@src/models/use-selected';
import { isNotUndefined } from '@src/utils/lodash-enhance';

const SidebarContainer = styled.div`

`;

export function SidebarMaterialProperty() {
	const { selectedUuid } = useSelected();
	const { getMesh, updateMeshMaterial } = useMeshList();

	if (!selectedUuid) return null;
	const selected = getMesh(selectedUuid);
	if (!selected) return null;

	const { material } = selected;
	console.log(material, 'material');
	const { type } = material;

	const meshUuid = selected.uuid;

	const onNameUpdate = (evt) => updateMeshMaterial()

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
		</Space>
	</SidebarContainer>
}
