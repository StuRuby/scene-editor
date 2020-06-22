import React from 'react';
import { Menu } from 'antd';

export class MenubarExample {
	runList: RunItemName[];
	constructor() {
		this.runList = ['arkanoid', 'camera', 'particles', 'pong', 'shaders'];
	}

	arkanoid() {
		return <Menu.Item key="arkanoid">打砖块</Menu.Item>;
	}

	camera() {
		return <Menu.Item key="camera">摄像机</Menu.Item>;
	}

	particles() {
		return <Menu.Item key="particles">粒子</Menu.Item>;
	}

	pong() {
		return <Menu.Item key="pong">乒乓球</Menu.Item>;
	}

	shaders() {
		return <Menu.Item key="shaders">着色器</Menu.Item>;
	}
}

type RunItemName = 'arkanoid' | 'camera' | 'particles' | 'pong' | 'shaders';
