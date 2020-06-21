import React from 'react';
import { Menu } from 'antd';

import { MenubarAdd } from './add';
import { MenubarEdit } from './edit';
import { MenubarExample } from './example';
import { MenubarFile } from './file';
import { MenubarHelp } from './help';

const { SubMenu } = Menu;

export function Menubar() {
	const menubarFile = new MenubarFile();
	return (
		<Menu mode="horizontal">
			<SubMenu title="Navigation Three - Submenu">
				<Menu.ItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.ItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.ItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.ItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
		</Menu>
	);
}
