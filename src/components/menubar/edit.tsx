import React from 'react';
import { Menu } from 'antd';

export class MenubarEdit {
	runList: RunItemName[];
	constructor() {
		this.runList = [
			'undo',
			'redo',
			'clearHistory',
			'clone',
			'delete',
			'minifyShaders',
			'fixColorMaps',
		];
	}

	redo() {
		return <Menu.Item key="redo">撤销</Menu.Item>;
	}

	undo() {
		return <Menu.Item key="undo">重做</Menu.Item>;
	}

	clearHistory() {
		return <Menu.Item key="clearHistory">清空历史记录</Menu.Item>;
	}

	clone() {
		return <Menu.Item key="clone">拷贝</Menu.Item>;
	}

	delete() {
		return <Menu.Item key="delete">删除</Menu.Item>;
	}

	minifyShaders() {
		return <Menu.Item key="minifyShaders">压缩着色器</Menu.Item>;
	}

	fixColorMaps() {
		return <Menu.Item key="fixColorMaps">修复颜色贴图</Menu.Item>;
	}
}

type RunItemName =
	| 'redo'
	| 'undo'
	| 'clearHistory'
	| 'clone'
	| 'delete'
	| 'minifyShaders'
	| 'fixColorMaps';
