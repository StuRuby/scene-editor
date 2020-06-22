import React from 'react';
import { Menu } from 'antd';
import classnames from 'classnames';
import _ from 'lodash';

import { MenubarFile } from './file';
import { MenubarAdd } from './add';
import { MenubarEdit } from './edit';
import { MenubarExample } from './example';
import { MenubarHelp } from './help';
import styles from './index.less';

const { SubMenu } = Menu;

export function Menubar() {
	const file = new MenubarFile();
	const add = new MenubarAdd();
	const edit = new MenubarEdit();
	const example = new MenubarExample();
	const help = new MenubarHelp();
	return (
		<Menu mode="horizontal" theme="dark" className={classnames(styles.menu)}>
			<SubMenu title="文件" key="file">
				{_.map(file.runList, item => file[item]())}
			</SubMenu>
			<SubMenu title="编辑" key="edit">
				{_.map(edit.runList, item => edit[item]())}
			</SubMenu>
			<SubMenu title="添加" key="add">
				{_.map(add.runList, item => add[item]())}
			</SubMenu>
			<SubMenu title="示例" key="example">
				{_.map(example.runList, item => example[item]())}
			</SubMenu>
			<SubMenu title="帮助" key="help">
				{_.map(help.runList, item => help[item]())}
			</SubMenu>
		</Menu>
	);
}
