import React from 'react';
import { Menu } from 'antd';

export class MenubarAdd {
	runList: RunItemName[];
	constructor() {
		this.runList = [
			'group',
			'plane',
			'box',
			'circle',
			'cylinder',
			'ring',
			'sphere',
			'dodecahedron',
			'icosahedron',
			'octahedron',
			'tetrahedron',
			'torus',
			'tube',
			'torusKnot',
			'lathe',
			'sprite',
			'pointLight',
			'spotLight',
			'directionalLight',
			'hemisphereLight',
			'ambientLight',
			'perspectiveCamera',
			'orthographicCamera',
		];
	}

	group() {
		return <Menu.Item key="group">组</Menu.Item>;
	}

	plane() {
		return <Menu.Item key="plane">平面</Menu.Item>;
	}

	box() {
		return <Menu.Item key="box">正方体</Menu.Item>;
	}

	circle() {
		return <Menu.Item key="circle">圆</Menu.Item>;
	}

	cylinder() {
		return <Menu.Item key="cylinder">圆柱体</Menu.Item>;
	}

	ring() {
		return <Menu.Item key="ring">环</Menu.Item>;
	}

	sphere() {
		return <Menu.Item key="sphere">球体</Menu.Item>;
	}

	dodecahedron() {
		return <Menu.Item key="dodecahedron">十二面体</Menu.Item>;
	}

	icosahedron() {
		return <Menu.Item key="icosahedron">二十面体</Menu.Item>;
	}

	octahedron() {
		return <Menu.Item key="octahedron">八面体</Menu.Item>;
	}

	tetrahedron() {
		return <Menu.Item key="tetrahedron">四面体</Menu.Item>;
	}

	torus() {
		return <Menu.Item key="torus">圆环体</Menu.Item>;
	}

	tube() {
		return <Menu.Item key="tube">管</Menu.Item>;
	}

	torusKnot() {
		return <Menu.Item key="torusKnot">环面扭结体</Menu.Item>;
	}

	lathe() {
		return <Menu.Item key="lathe">酒杯</Menu.Item>;
	}

	sprite() {
		return <Menu.Item key="sprite">精灵</Menu.Item>;
	}

	pointLight() {
		return <Menu.Item key="pointLight">点光源</Menu.Item>;
	}

	spotLight() {
		return <Menu.Item key="spotLight">聚光灯</Menu.Item>;
	}

	directionalLight() {
		return <Menu.Item key="directionalLight">平行光</Menu.Item>;
	}

	hemisphereLight() {
		return <Menu.Item key="hemisphereLight">半球光</Menu.Item>;
	}

	ambientLight() {
		return <Menu.Item key="ambientLight">环境光</Menu.Item>;
	}

	perspectiveCamera() {
		return <Menu.Item key="perspectiveCamera">透视相机</Menu.Item>;
	}

	orthographicCamera() {
		return <Menu.Item key="orthographicCamera">正交相机</Menu.Item>;
	}
}

type RunItemName =
	| 'group'
	| 'plane'
	| 'box'
	| 'circle'
	| 'cylinder'
	| 'ring'
	| 'sphere'
	| 'dodecahedron'
	| 'icosahedron'
	| 'octahedron'
	| 'tetrahedron'
	| 'torus'
	| 'tube'
	| 'torusKnot'
	| 'lathe'
	| 'sprite'
	| 'pointLight'
	| 'spotLight'
	| 'directionalLight'
	| 'hemisphereLight'
	| 'ambientLight'
	| 'perspectiveCamera'
	| 'orthographicCamera';
