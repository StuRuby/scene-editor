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
			{/* <MenubarEdit />
			<MenubarAdd />
			<MenubarExample />
			<MenubarHelp /> */}
		</Menu>
	);
}
