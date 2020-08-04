import * as THREE from 'three';
import * as _ from 'lodash';

class ObjectList {
	objects: THREE.Object3D[];
	constructor() {
		this.objects = [];
		window.objects = this.objects;
	}
	addObject(object: THREE.Object3D, parent?: THREE.Object3D, index?: number) {
		this.objects.push(object);

	};
	removeObject(object: THREE.Object3D) {
		const uuid = object.uuid;
		const list = this.objects?.filter(item => item.uuid !== uuid);
		this.objects = list;
	};

	getObject(uuid: string) {
		const object = _.find(this.objects, obj => obj.uuid === uuid);
		return object;
	}

	updateObject(uuid: string, property: Partial<THREE.Object3D>) {
		const object = this.getObject(uuid);
		for (let key in property) {
			const value = (property as any)[key];
			(object as any)[key] = value;
		}
		object?.updateMatrixWorld(true);
	}
}

export default new ObjectList();

