import React from 'react';
import { Menu, Upload } from 'antd';
import classnames from 'classnames';
import _ from 'lodash';

import { MenubarFile } from './file';
import styles from './index.less';

const { SubMenu } = Menu;

export function Menubar() {
	const files = new MenubarFile();
	const menus = _.keys(files).map(key => files['newFile']());
	return (
		<Menu mode="horizontal" theme="dark" className={classnames(styles.menu)}>
			<SubMenu title="文件">{menus}</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.Item key="setting:1">Option 1</Menu.Item>
				<Menu.Item key="setting:2">Option 2</Menu.Item>
				<Menu.Item key="setting:3">Option 3</Menu.Item>
				<Menu.Item key="setting:4">Option 4</Menu.Item>
			</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.Item key="setting:1">Option 1</Menu.Item>
				<Menu.Item key="setting:2">Option 2</Menu.Item>
				<Menu.Item key="setting:3">Option 3</Menu.Item>
				<Menu.Item key="setting:4">Option 4</Menu.Item>
			</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.Item key="setting:1">Option 1</Menu.Item>
				<Menu.Item key="setting:2">Option 2</Menu.Item>
				<Menu.Item key="setting:3">Option 3</Menu.Item>
				<Menu.Item key="setting:4">Option 4</Menu.Item>
			</SubMenu>
			<SubMenu title="Navigation Three - Submenu">
				<Menu.Item key="setting:1">Option 1</Menu.Item>
				<Menu.Item key="setting:2">Option 2</Menu.Item>
				<Menu.Item key="setting:3">Option 3</Menu.Item>
				<Menu.Item key="setting:4">Option 4</Menu.Item>
			</SubMenu>
		</Menu>
	);
}
