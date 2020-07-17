import * as THREE from 'three';
import * as _ from 'lodash';

class ObjectList {
	objects: THREE.Object3D[];
	constructor() {
		this.objects = [];
	}
	addObject(object: THREE.Object3D, parent?: THREE.Object3D, index?: number) {
		this.objects.push(object);

	};
	removeObject(object: THREE.Object3D) {
		const uuid = object.uuid;
		const list = this.objects?.filter(item => item.uuid !== uuid);
		this.objects = list;
	};
}

export default new ObjectList();