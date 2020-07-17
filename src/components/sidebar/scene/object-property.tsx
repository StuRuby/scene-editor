import React, { useState } from 'react';
import { Space, Row, Col, Input, InputNumber, Button, Checkbox } from 'antd';
import { RGBColor } from 'react-color';

import { ColorPicker } from '../../common/color-picker';

const { TextArea } = Input;

export function SidebarObjectProperty() {
	const [colorState, setColor] = useState<RGBColor>();
	return null;
	// const {
	// 	type,
	// 	uuid,
	// 	name,
	// 	position,
	// 	rotation,
	// 	scale,
	// 	visible,
	// 	frustumCulled,
	// 	renderOrder,
	// 	left,
	// 	right,
	// 	top,
	// 	bottom,
	// 	fov,
	// 	near,
	// 	far,
	// 	intensity,
	// 	color,
	// 	groundColor,
	// 	distance,
	// 	angle,
	// 	penumbra,
	// 	decay,
	// 	castShadow,
	// 	receiveShadow,
	// 	shadow,
	// 	userdata,
	// } = selected;

	// return (
	// 	<Space direction="vertical" style={{ width: '100%' }}>
	// 		{type && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					类型
	// 				</Col>
	// 				<Col span={15}>Mesh</Col>
	// 			</Row>
	// 		)}
	// 		{uuid && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					识别码
	// 				</Col>
	// 				<Col span={8}>Mesh</Col>
	// 				<Col span={9}>
	// 					<Button type="dashed" size="small">
	// 						更新
	// 					</Button>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{name && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					名称
	// 				</Col>
	// 				<Col span={15}>
	// 					<Input defaultValue="Input" size="small" />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{position && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					位置
	// 				</Col>
	// 				<Col span={15}>
	// 					<Space size="small" align="start">
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 					</Space>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{rotation && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					旋转
	// 				</Col>
	// 				<Col span={15}>
	// 					<Space size="small" align="start">
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 					</Space>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{scale && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					缩放
	// 				</Col>
	// 				<Col span={15}>
	// 					<Space size="small" align="start">
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 						<InputNumber
	// 							min={0}
	// 							step={0.001}
	// 							size="small"
	// 							style={{ width: '60px' }}
	// 						/>
	// 					</Space>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{receiveShadow && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					阴影
	// 				</Col>
	// 				<Col span={15}>
	// 					<Checkbox value="cast">产生</Checkbox>
	// 					<Checkbox value="receive">接受</Checkbox>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{visible && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					可见性
	// 				</Col>
	// 				<Col span={15}>
	// 					<Checkbox value="visible"></Checkbox>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{frustumCulled && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					视椎体裁剪
	// 				</Col>
	// 				<Col span={15}>
	// 					<Checkbox value="frustumCull"></Checkbox>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{renderOrder && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					渲染次序
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{left && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					左
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{right && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					右
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{top && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					上
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{bottom && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					下
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{near && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					近点
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{far && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					远点
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{fov && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					视角
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{intensity && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					强度
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{color && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					颜色
	// 				</Col>
	// 				<Col span={15}>
	// 					<ColorPicker color={colorState} setColor={setColor} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{groundColor && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					基色
	// 				</Col>
	// 				<Col span={15}>
	// 					<ColorPicker color={colorState} setColor={setColor} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{distance && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					距离
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{angle && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					角度
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{penumbra && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					边缘
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{decay && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					衰减
	// 				</Col>
	// 				<Col span={15}>
	// 					<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{castShadow && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					阴影
	// 				</Col>
	// 				<Col span={15}>
	// 					<Checkbox value="cast">产生</Checkbox>
	// 				</Col>
	// 			</Row>
	// 		)}
	// 		{userdata && (
	// 			<Row align="middle">
	// 				<Col span={6} offset={1}>
	// 					自定义数据
	// 				</Col>
	// 				<Col span={15}>
	// 					<TextArea defaultValue="{}" autoSize={{ minRows: 3, maxRows: 5 }} />
	// 				</Col>
	// 			</Row>
	// 		)}
	// 	</Space>
	// );
}
