import React from 'react';
import { Space, Row, Col, Input } from 'antd';

import useObjects from '../../../models/objects';

export function SidebarObjectProperty() {
	const objects = useObjects();
	return (
		<div>
			<Space direction="vertical" style={{ width: '100%' }}>
				<Row align="middle">
					<Col span={8} offset={1}>
						类型
					</Col>
					<Col span={13}>Mesh</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						类型
					</Col>
					<Col span={13}>Mesh</Col>
				</Row>
			</Space>
		</div>
	);
}
