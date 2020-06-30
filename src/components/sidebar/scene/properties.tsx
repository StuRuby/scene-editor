import React from 'react';
import { Tabs } from 'antd';

import { SidebarObjectProperty } from './object-property';
import { SidebarGeometryProperty } from './geometry-property';
import { SidebarMaterialProperty } from './material-property';

const { TabPane } = Tabs;

export function SidebarProperties() {
	return (
		<Tabs defaultActiveKey="object" type="card">
			<TabPane tab="属性" key="object">
				<SidebarObjectProperty />
			</TabPane>
			<TabPane tab="几何组件" key="geometry">
				<SidebarGeometryProperty />
			</TabPane>
			<TabPane tab="材质组件" key="material">
				<SidebarMaterialProperty />
			</TabPane>
		</Tabs>
	);
}
