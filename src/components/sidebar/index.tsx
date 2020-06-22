import React from 'react';
import { Tabs } from 'antd';

import { SidebarSettings } from './settings';
import { SidebarProject } from './project';

const { TabPane } = Tabs;

export function Sidebar() {
	return (
		<Tabs defaultActiveKey="settings" type="card">
			<TabPane tab="场景" key="scene">
				Content of Tab Pane 1
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
