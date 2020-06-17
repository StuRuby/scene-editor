export class MenubarFile {
	list!: ListItem[];
	constructor() {
		this.newFile();
		this.addDivider();
		this.importFile();
		this.addDivider();
		this.exportGeometry();
		this.exportObject();
		this.exportScene();
		this.addDivider();
		this.exportDae();
		this.exportDrc();
		this.exportGlb();
		this.exportGltf();
		this.exportObj();
		this.exportPly();
		this.exportPlyBinary();
		this.exportStl();
		this.exportStlBinary();
	}

	newFile() {
		this.list.push({
			name: '新建',
			type: 'button',
			onClick: () => { }
		});
	}

	importFile() {
		this.list.push({
			name: '导入',
			type: 'upload',
			onClick: () => { }
		});
	}

	exportGeometry() {
		this.list.push({
			name: '导出几何体',
			type: 'button',
			onClick: () => { }
		});
	}

	exportObject() {
		this.list.push({
			name: '导出物体',
			type: 'button',
			onClick: () => { }
		});
	}

	exportScene() {
		this.list.push({
			name: '导出场景',
			type: 'button',
			onClick: () => { }
		});
	}

	exportDae() {
		this.list.push({
			name: '导出DAE',
			type: 'button',
			onClick: () => { }
		});
	}

	exportDrc() {
		this.list.push({
			name: '导出DRC',
			type: 'button',
			onClick: () => { }
		});
	}

	exportGlb() {
		this.list.push({
			name: '导出GLB',
			type: 'button',
			onClick: () => { }
		});
	}

	exportGltf() {
		this.list.push({
			name: '导出GLTF',
			type: 'button',
			onClick: () => { }
		});
	}

	exportObj() {
		this.list.push({
			name: '导出OBJ',
			type: 'button',
			onClick: () => { }
		});
	}

	exportPly() {
		this.list.push({
			name: '导出PLY',
			type: 'button',
			onClick: () => { }
		});
	}

	exportPlyBinary() {
		this.list.push({
			name: '导出PLY(二进制)',
			type: 'button',
			onClick: () => { }
		});
	}

	exportStl() {
		this.list.push({
			name: '导出STL',
			type: 'button',
			onClick: () => { }
		});
	}

	exportStlBinary() {
		this.list.push({
			name: '导出STL(二进制)',
			type: 'button',
			onClick: () => { }
		});
	}

	addDivider() {
		this.list.push({
			name: '',
			type: 'divider',
			onClick: () => { }
		});
	}
}

interface ListItem {
	name: string;
	type: string;
	onClick: () => void;
}