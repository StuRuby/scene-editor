import THREE from 'three';
import { Editor } from '@src/components/editor/editor';

export class Command {
    editor: Editor;
    id: number;
    inMemory: boolean;
    updatable: boolean;
    type: string;
    name: string;
    constructor(editor: Editor) {
        this.editor = editor;
        this.id = -1;
        this.inMemory = false;
        this.updatable = false;
        this.type = '';
        this.name = '';
    }

    toJSON(): ObjectJson {
        return {
            type: this.type,
            id: this.id,
            name: this.name
        };
    }

    fromJSON(
        json: ObjectJson) {
        this.inMemory = true;
        this.type = json.type;
        this.id = json.id;
        this.name = json.name;
    }
}

export interface ObjectJson {
    type: string;
    id: number;
    name: string;
    object?: { object: THREE.Object3D };
    [key: string]: any;
}