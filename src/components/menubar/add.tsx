import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export function MenubarAdd() {
	return (
		<SubMenu key="add">
			<Menu.Item>组</Menu.Item>
			<Menu.Item>正方体</Menu.Item>
			<Menu.Item>圆</Menu.Item>
			<Menu.Item>圆柱体</Menu.Item>
			<Menu.Item>十二面体</Menu.Item>
			<Menu.Item>二十面体</Menu.Item>
			<Menu.Item>酒杯</Menu.Item>
			<Menu.Item>八面体</Menu.Item>
			<Menu.Item>平面</Menu.Item>
			<Menu.Item>环</Menu.Item>
			<Menu.Item>球体</Menu.Item>
			<Menu.Item>精灵</Menu.Item>
			<Menu.Item>四面体</Menu.Item>
			<Menu.Item>环面扭结体</Menu.Item>
			<Menu.Item>管</Menu.Item>
			<Menu.Item>环境光</Menu.Item>
			<Menu.Item>平行光</Menu.Item>
			<Menu.Item>半球光</Menu.Item>
			<Menu.Item>点光源</Menu.Item>
			<Menu.Item>聚光灯</Menu.Item>
			<Menu.Item>正交相机</Menu.Item>
			<Menu.Item>透视相机</Menu.Item>
		</SubMenu>
	);
}
