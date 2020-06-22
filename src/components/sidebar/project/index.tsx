import React from 'react';
import { SaveTwoTone } from '@ant-design/icons';
import {
	Row,
	Col,
	Space,
	Input,
	Switch,
	Divider,
	Select,
	InputNumber,
	Card,
	List,
	Button,
} from 'antd';

const { Option } = Select;

const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
];

export function SidebarProject() {
	return (
		<React.Fragment>
			<Space direction="vertical">
				<Row align="middle">
					<Col span={8} offset={1}>
						标题
					</Col>
					<Col span={13}>
						<Input size="small" placeholder="请输入标题" style={{ width: '120px' }} />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						可编辑性
					</Col>
					<Col span={13}>
						<Switch defaultChecked />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						虚拟现实
					</Col>
					<Col span={13}>
						<Switch defaultChecked />
					</Col>
				</Row>
				<Divider />
				<Row align="middle">
					<Col span={8} offset={1}>
						渲染器
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						抗锯齿
					</Col>
					<Col span={13}>
						<Switch defaultChecked />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						阴影
					</Col>
					<Col span={13}>
						<Switch defaultChecked />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						阴影类型
					</Col>
					<Col span={13}>
						<Select defaultValue="pcf" size="small" style={{ width: 120 }}>
							<Option value="basic">BASIC</Option>
							<Option value="pcf">PCF</Option>
							<Option value="pcfSoft">PCF(SOFT)</Option>
						</Select>
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						物理光照
					</Col>
					<Col span={13}>
						<Switch defaultChecked />
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						色调映射
					</Col>
					<Col span={13}>
						<Select defaultValue="none" size="small" style={{ width: 120 }}>
							<Option value="none">NONE</Option>
							<Option value="linear">LINEAR</Option>
							<Option value="reinhard">REINHARD</Option>
							<Option value="uncharted2">UNCHARTED2</Option>
							<Option value="cineon">CINEON</Option>
							<Option value="acesfilmic">ACESFILMIC</Option>
						</Select>
					</Col>
				</Row>
				<Row align="middle">
					<Col span={8} offset={1}>
						曝光
					</Col>
					<Col span={13}>
						<InputNumber min={1} max={10} defaultValue={6} size="small" />
					</Col>
				</Row>
				<Divider />
				<Row align="middle">
					<Col span={8} offset={1}>
						渲染器
					</Col>
				</Row>
				<Card>
					<List
						size="small"
						style={{ height: '300px', overflowY: 'scroll' }}
						dataSource={data}
						renderItem={item => <List.Item>{item}</List.Item>}
					/>
				</Card>
				<Row align="middle">
					<Col span={8} offset={1}>
						<Button type="primary" size="small" icon={<SaveTwoTone />}>
							应用
						</Button>
					</Col>
				</Row>
			</Space>
		</React.Fragment>
	);
}
