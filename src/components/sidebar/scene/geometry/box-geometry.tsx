import React from 'react';
import { Row, Col, Input, InputNumber } from 'antd';

import useBoxGeometry from '@src/models/box-geometry';

export function BoxGeometry() {
	const { boxGeometry, setBoxGeometry } = useBoxGeometry();

	if (boxGeometry === null) return null;

	const { width, height, depth, widthSegments, heightSegments, depthSegments } = boxGeometry;

	return (
		<React.Fragment>
			{width && (
				<Row align="middle">
					<Col span={6} offset={1}>
						宽度
					</Col>
					<Col span={15}>
						<InputNumber size="small" />
					</Col>
				</Row>
			)}
			{height && (
				<Row align="middle">
					<Col span={6} offset={1}>
						高度
					</Col>
					<Col span={15}>
						<InputNumber size="small" />
					</Col>
				</Row>
			)}
			{depth && (
				<Row align="middle">
					<Col span={6} offset={1}>
						深度
					</Col>
					<Col span={15}>
						<InputNumber size="small" />
					</Col>
				</Row>
			)}
			{widthSegments && (
				<Row align="middle">
					<Col span={6} offset={1}>
						宽度分段
					</Col>
					<Col span={15}>
						<InputNumber size="small" />
					</Col>
				</Row>
			)}
			{heightSegments && (
				<Row align="middle">
					<Col span={6} offset={1}>
						高度分段
					</Col>
					<Col span={15}>
						<InputNumber size="small" />
					</Col>
				</Row>
			)}
			{depthSegments && (
				<Row align="middle">
					<Col span={6} offset={1}>
						深度分段
					</Col>
					<Col span={15}>
						<InputNumber size="small" />
					</Col>
				</Row>
			)}
		</React.Fragment>
	);
}
