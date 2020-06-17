import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export function MenubarEdit() {
	return (
		<SubMenu key="edit">
			<Menu.Item>撤销(Ctrl+Z)</Menu.Item>
			<Menu.Item>重做(Ctrl+Shift+Z)</Menu.Item>
			<Menu.Item>清空历史记录</Menu.Item>
			<Menu.Item>拷贝</Menu.Item>
			<Menu.Item>删除(Del)</Menu.Item>
			<Menu.Item>压缩着色器</Menu.Item>
			<Menu.Item>修复颜色贴图</Menu.Item>
		</SubMenu>
	);
}
