import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export function MenubarHelp() {
	return (
		<SubMenu key="help">
			<Menu.Item>源码</Menu.Item>
			<Menu.Item>关于</Menu.Item>
		</SubMenu>
	);
}
