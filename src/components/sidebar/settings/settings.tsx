import React from 'react';
import { Row, Col, InputNumber, Input, Space, Switch, Divider } from 'antd';

export function Settings() {
	return (
		<React.Fragment>
			<Space direction="vertical">
				<Row align="middle">
					<Col span={8} offset={1}>
						输出精度
					</Col>
					<Col span={13} offset={2}>
						<InputNumber min={1} max={10} defaultValue={6} size="small" />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						移动
					</Col>
					<Col span={13} offset={2}>
						<Input size="small" defaultValue="w" />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						旋转
					</Col>
					<Col span={13} offset={2}>
						<Input size="small" defaultValue="e" />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						缩放
					</Col>
					<Col span={13} offset={2}>
						<Input size="small" defaultValue="r" />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						撤销
					</Col>
					<Col span={13} offset={2}>
						<Input size="small" defaultValue="z" />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						聚焦
					</Col>
					<Col span={13} offset={2}>
						<Input size="small" defaultValue="f" />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						网格
					</Col>
					<Col span={13} offset={2}>
						<Switch defaultChecked></Switch>
					</Col>
				</Row>
			</Space>
			<Divider />
		</React.Fragment>
	);
}
