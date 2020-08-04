import React, { useState } from 'react';
import * as THREE from 'three';
import { Space, Row, Col, Input, InputNumber, Button, Checkbox } from 'antd';
import { RGBColor } from 'react-color';

import { ColorPicker } from '@src/components/common/color-picker';
import useSelected from '@src/models/use-selected';
import useMeshList from '@src/models/use-mesh-list';
import { values } from 'lodash';

const { TextArea } = Input;

export function SidebarObjectProperty() {
	const [colorState, setColor] = useState<RGBColor>();
	const { selectedUuid } = useSelected();
	const { getMesh, updateMesh } = useMeshList();
	if (!selectedUuid) return null;

	const selected = getMesh(selectedUuid);
	if (!selected) return null;
	const {
		type,
		uuid,
		name,
		position,
		rotation,
		scale,
		visible,
		frustumCulled,
		renderOrder,
		// left,
		// right,
		// top,
		// bottom,
		// fov,
		// near,
		// far,
		// intensity,
		// color,
		// groundColor,
		// distance,
		// angle,
		// penumbra,
		// decay,
		castShadow,
		receiveShadow,
		// shadow,
		userData,
	} = selected;



	const onPositionXUpdate = value => updateMesh(uuid: { position: new THREE.Vector3(value, position?.y, position?.z) });
	const onPositionYUpdate = value => updateMesh(uuid: { position: new THREE.Vector3(position?.x, value, position?.z) });
	const onPositionZUpdate = value => updateMesh(uuid: { position: new THREE.Vector3(position?.x, position?.y, value) });

	const onNameUpdate = (evt) => {
		const nextName = evt.target.value;
		updateMesh(uuid, { name: nextName });
	}

	return (
		<Space direction="vertical" style={{ width: '100%' }}>
			{type && (
				<Row align="middle">
					<Col span={6} offset={1}>
						类型
					</Col>
					<Col span={15}>{type}</Col>
				</Row>
			)}
			{uuid && (
				<Row align="middle">
					<Col span={6} offset={1}>
						识别码
					</Col>
					<Col span={13}>{uuid}</Col>

				</Row>
			)}
			{name && (
				<Row align="middle">
					<Col span={6} offset={1}>
						名称
					</Col>
					<Col span={15}>
						<Input value={name} size="small" onChange={onNameUpdate} />
					</Col>
				</Row>
			)}
			{position && (
				<Row align="middle">
					<Col span={6} offset={1}>
						位置
					</Col>
					<Col span={15}>
						<Space size="small" align="start">
							<InputNumber
								min={0}
								step={0.1}
								value={position.x}
								size="small"
								style={{ width: '60px' }}
								onChange={onPositionXUpdate}
							/>
							<InputNumber
								min={0}
								step={0.1}
								value={position.y}
								size="small"
								style={{ width: '60px' }}
								onChange={onPositionYUpdate}
							/>
							<InputNumber
								min={0}
								step={0.1}
								value={position.z}
								size="small"
								style={{ width: '60px' }}
								onChange={onPositionZUpdate}
							/>
						</Space>
					</Col>
				</Row>
			)}
			{rotation && (
				<Row align="middle">
					<Col span={6} offset={1}>
						旋转
					</Col>
					<Col span={15}>
						<Space size="small" align="start">
							<InputNumber
								min={0}
								step={0.001}
								size="small"
								style={{ width: '60px' }}
							/>
							<InputNumber
								min={0}
								step={0.001}
								size="small"
								style={{ width: '60px' }}
							/>
							<InputNumber
								min={0}
								step={0.001}
								size="small"
								style={{ width: '60px' }}
							/>
						</Space>
					</Col>
				</Row>
			)}
			{scale && (
				<Row align="middle">
					<Col span={6} offset={1}>
						缩放
					</Col>
					<Col span={15}>
						<Space size="small" align="start">
							<InputNumber
								min={0}
								step={0.001}
								size="small"
								style={{ width: '60px' }}
							/>
							<InputNumber
								min={0}
								step={0.001}
								size="small"
								style={{ width: '60px' }}
							/>
							<InputNumber
								min={0}
								step={0.001}
								size="small"
								style={{ width: '60px' }}
							/>
						</Space>
					</Col>
				</Row>
			)}
			{receiveShadow && (
				<Row align="middle">
					<Col span={6} offset={1}>
						阴影
					</Col>
					<Col span={15}>
						<Checkbox value="cast">产生</Checkbox>
						<Checkbox value="receive">接受</Checkbox>
					</Col>
				</Row>
			)}
			{visible && (
				<Row align="middle">
					<Col span={6} offset={1}>
						可见性
					</Col>
					<Col span={15}>
						<Checkbox value="visible"></Checkbox>
					</Col>
				</Row>
			)}
			{frustumCulled && (
				<Row align="middle">
					<Col span={6} offset={1}>
						视椎体裁剪
					</Col>
					<Col span={15}>
						<Checkbox value="frustumCull"></Checkbox>
					</Col>
				</Row>
			)}
			{renderOrder && (
				<Row align="middle">
					<Col span={6} offset={1}>
						渲染次序
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{/* {left && (
				<Row align="middle">
					<Col span={6} offset={1}>
						左
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{right && (
				<Row align="middle">
					<Col span={6} offset={1}>
						右
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{top && (
				<Row align="middle">
					<Col span={6} offset={1}>
						上
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{bottom && (
				<Row align="middle">
					<Col span={6} offset={1}>
						下
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{near && (
				<Row align="middle">
					<Col span={6} offset={1}>
						近点
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{far && (
				<Row align="middle">
					<Col span={6} offset={1}>
						远点
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{fov && (
				<Row align="middle">
					<Col span={6} offset={1}>
						视角
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{intensity && (
				<Row align="middle">
					<Col span={6} offset={1}>
						强度
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{color && (
				<Row align="middle">
					<Col span={6} offset={1}>
						颜色
					</Col>
					<Col span={15}>
						<ColorPicker color={colorState} setColor={setColor} />
					</Col>
				</Row>
			)}
			{groundColor && (
				<Row align="middle">
					<Col span={6} offset={1}>
						基色
					</Col>
					<Col span={15}>
						<ColorPicker color={colorState} setColor={setColor} />
					</Col>
				</Row>
			)}
			{distance && (
				<Row align="middle">
					<Col span={6} offset={1}>
						距离
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{angle && (
				<Row align="middle">
					<Col span={6} offset={1}>
						角度
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{penumbra && (
				<Row align="middle">
					<Col span={6} offset={1}>
						边缘
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)}
			{decay && (
				<Row align="middle">
					<Col span={6} offset={1}>
						衰减
					</Col>
					<Col span={15}>
						<InputNumber min={0} step={0.001} size="small" style={{ width: '60px' }} />
					</Col>
				</Row>
			)} */}
			{castShadow && (
				<Row align="middle">
					<Col span={6} offset={1}>
						阴影
					</Col>
					<Col span={15}>
						<Checkbox value="cast">产生</Checkbox>
					</Col>
				</Row>
			)}
			{userData && (
				<Row align="middle">
					<Col span={6} offset={1}>
						自定义数据
					</Col>
					<Col span={15}>
						<TextArea defaultValue="{}" autoSize={{ minRows: 3, maxRows: 5 }} />
					</Col>
				</Row>
			)}
		</Space>
	);
}
