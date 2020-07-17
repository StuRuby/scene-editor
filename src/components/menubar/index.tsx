import React from 'react';
import { Menu } from 'antd';
import classnames from 'classnames';
import * as _ from 'lodash';

import { MenubarFile } from './file';
import {
	AddGroup,
	AddBox,
	AddPlane,
	AddCircle,
	AddPointLight,
	AddSpotLight,
	AddDirectionalLight,
	AddHemiSphereLight,
	AddAmbientLight,
	AddPerspectiveCamera,
	AddOrthographicCamera,
} from './add';
import { MenubarEdit } from './edit';
import { MenubarExample } from './example';
import { MenubarHelp } from './help';
import styles from './index.less';

const { SubMenu } = Menu;

export function Menubar() {
	const file = new MenubarFile();
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
				<Menu.Item key="group">
					<AddGroup />
				</Menu.Item>
				<Menu.Item key="plane">
					<AddPlane />
				</Menu.Item>
				<Menu.Item key="box">
					<AddBox />
				</Menu.Item>
				<Menu.Item key="circle">
					<AddCircle />
				</Menu.Item>
				<Menu.Item key="pointLight">
					<AddPointLight />
				</Menu.Item>
				<Menu.Item key="spotLight">
					<AddSpotLight />
				</Menu.Item>
				<Menu.Item key="directionalLight">
					<AddDirectionalLight />
				</Menu.Item>
				<Menu.Item key="hemisphereLight">
					<AddHemiSphereLight />
				</Menu.Item>
				<Menu.Item key="ambientLight">
					<AddAmbientLight />
				</Menu.Item>
				<Menu.Item key="perspectiveCamera">
					<AddPerspectiveCamera />
				</Menu.Item>
				<Menu.Item key="orthographicCamera">
					<AddOrthographicCamera />
				</Menu.Item>
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
