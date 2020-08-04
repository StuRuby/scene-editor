import React from 'react';
import { Space, Row, Col, Input, InputNumber, Button, Checkbox } from 'antd';

import useCommonGeometry from '@src/models/geometry';

export function Geometry() {
	const { commonGeometry, setCommonGeometry } = useCommonGeometry();

	if (commonGeometry === null) return null;

	const { type, name, uuid, bounds, showVertexNormals } = commonGeometry;

	return (
		<Space direction="vertical" style={{ width: '100%' }}>
			{type && (
				<Row align="middle">
					<Col span={6} offset={1}>
						类型
					</Col>
					<Col span={15}>BufferGeometry</Col>
				</Row>
			)}
			{uuid && (
				<Row align="middle">
					<Col span={6} offset={1}>
						识别码
					</Col>
					<Col span={8}>Mesh</Col>
					<Col span={9}>
						<Button type="dashed" size="small">
							更新
						</Button>
					</Col>
				</Row>
			)}
			{name && (
				<Row align="middle">
					<Col span={6} offset={1}>
						名称
					</Col>
					<Col span={15}>
						<Input defaultValue="Input" size="small" />
					</Col>
				</Row>
			)}
			{bounds && (
				<Row align="middle">
					<Col span={6} offset={1}>
						界限
					</Col>
					<Col span={15}>36921</Col>
				</Row>
			)}
			{showVertexNormals && (
				<Row align="middle">
					<Col span={23} offset={1}>
						<Button type="dashed" size="small">
							显示顶点法线
						</Button>
					</Col>
				</Row>
			)}
		</Space>
	);
}
