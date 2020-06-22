import React from 'react';
import { Upload, Button, Menu } from 'antd';

export class MenubarFile {
	runList: RunItemName[];
	constructor() {
		this.runList = [
			'newFile',
			'importFile',
			'exportGeometry',
			'exportObject',
			'exportScene',
			'exportDae',
			'exportDrc',
			'exportGlb',
			'exportGltf',
			'exportObj',
			'exportPly',
			'exportPlyBinary',
			'exportStl',
			'exportStlBinary',
		];
	}

	newFile() {
		return <Menu.Item key="newFile">新建</Menu.Item>;
	}

	importFile() {
		return (
			<Menu.Item key="importFile">
				导入
				<Upload></Upload>
			</Menu.Item>
		);
	}

	exportGeometry() {
		return <Menu.Item key="exportGeometry">导出几何体</Menu.Item>;
	}

	exportObject() {
		return <Menu.Item key="exportObject">导出物体</Menu.Item>;
	}

	exportScene() {
		return <Menu.Item key="exportScene">导出场景</Menu.Item>;
	}

	exportDae() {
		return <Menu.Item key="exportDae">导出DAE</Menu.Item>;
	}

	exportDrc() {
		return <Menu.Item key="exportDrc">导出DRC</Menu.Item>;
	}

	exportGlb() {
		return <Menu.Item key="exportGlb">导出GLB</Menu.Item>;
	}

	exportGltf() {
		return <Menu.Item key="exportGltf">导出GLTF</Menu.Item>;
	}

	exportObj() {
		return <Menu.Item key="exportObj">导出OBJ</Menu.Item>;
	}

	exportPly() {
		return <Menu.Item key="exportPly">导出PLY</Menu.Item>;
	}

	exportPlyBinary() {
		return <Menu.Item key="exportPlyBinary">导出PLY(二进制)</Menu.Item>;
	}

	exportStl() {
		return <Menu.Item key="exportStl">导出STL</Menu.Item>;
	}

	exportStlBinary() {
		return <Menu.Item key="exportStlBinary">导出STL(二进制)</Menu.Item>;
	}
}

type RunItemName =
	| 'newFile'
	| 'importFile'
	| 'exportGeometry'
	| 'exportObject'
	| 'exportScene'
	| 'exportDae'
	| 'exportDrc'
	| 'exportGlb'
	| 'exportGltf'
	| 'exportObj'
	| 'exportPly'
	| 'exportPlyBinary'
	| 'exportStl'
	| 'exportStlBinary';
