import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export function MenubarExample() {
	return (
		<SubMenu key="example">
			<Menu.Item>打砖块</Menu.Item>
			<Menu.Item>摄像机</Menu.Item>
			<Menu.Item>粒子</Menu.Item>
			<Menu.Item>乒乓球</Menu.Item>
			<Menu.Item>着色器</Menu.Item>
		</SubMenu>
	);
}
