import React from 'react';
import { Menu } from 'antd';

export class MenubarHelp {
	runList: RunItemName[];
	constructor() {
		this.runList = ['sourceCode', 'about'];
	}

	sourceCode() {
		return <Menu.Item key="sourceCode">源码</Menu.Item>;
	}

	about() {
		return <Menu.Item key="about">关于</Menu.Item>;
	}
}

type RunItemName = 'sourceCode' | 'about';
