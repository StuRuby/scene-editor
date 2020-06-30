import * as THREE from "three";

import { Editor } from '../editor/editor';
import { Command, ObjectJson } from './command';


export class AddObjectCommand extends Command {
    object: THREE.Object3D;
    constructor(editor: Editor, object: THREE.Object3D) {
        super(editor);
        this.type = 'AddObjectCommand';
        this.object = object;
        if(object !== undefined) {
            this.name = `Add Object: ${object.name}`;
        }
    }

    execute() {
        this.editor.addObject(this.object);
        this.editor.select(this.object);
    }

    undo() {
        this.editor.removeObject(this.object);
        this.editor.deselect();
    }

    toJSON() {
        const output = super.toJSON();
        output.object = this.object.toJSON();
        return output;
    }

    fromJSON(json: ObjectJson) {
        super.fromJSON(json);
        const uuid = json.object?.object.uuid;
        if(uuid !== undefined) {
            this.object = this.editor.getObjectByUuid(uuid) as THREE.Object3D;
        }
        if(this.object === undefined) {
            const loader = new THREE.ObjectLoader();
            this.object = loader.parse(json.object);
        }
    }
}