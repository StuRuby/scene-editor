import React from 'react';
import { Tabs } from 'antd';

import { SidebarSettings } from './settings';
import { SidebarProject } from './project';
import { SidebarScene } from './scene';

const { TabPane } = Tabs;

export function Sidebar() {
	return (
		<Tabs defaultActiveKey="scene" type="card">
			<TabPane tab="场景" key="scene">
				<SidebarScene />
			</TabPane>
			<TabPane tab="项目" key="project">
				<SidebarProject />
			</TabPane>
			<TabPane tab="设置" key="settings">
				<SidebarSettings />
			</TabPane>
		</Tabs>
	);
}
