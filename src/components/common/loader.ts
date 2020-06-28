import THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader';
import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader';
import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader';
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader';

import { Editor } from '../editor/editor'


export class Loader {
    editor: Editor;
    texturePath: string;
    constructor(editor: Editor) {
        this.editor = editor;
        this.texturePath = '';
    }

    loadFiles(files: File[], fm?: FileMap) {
        if(files.length > 0) {
            const fileMap = fm || createFilesMap(files);
            const manager = new THREE.LoadingManager();
            manager.setURLModifier((url: string) => {
                const file = fileMap[url];
                if(file) {
                    console.log(`Loading ${url}`);
                    return URL.createObjectURL(file);
                }
                return url;
            });

            for(let i = 0; i < files.length; i++) {
                this.loadFile(files[i], manager);
            }
        }
    }

    loadFile(file: File, manager: THREE.LoadingManager) {
        const fileName = file.name;
        const extension = fileName.split('.').pop()?.toLowerCase();

        const reader = new FileReader();
        reader.addEventListener('progress', (evt: ProgressEvent<FileReader>) => {
            const size = `${Math.floor(evt.total / 1000)} KB`;
            const progress = Math.floor((evt.loaded / evt.total) * 100) + '%';
            console.log('Loading', fileName, size, progress);
        });

        switch(extension) {
            case '3ds':
                reader.addEventListener('load', evt => {
                    const loader = new TDSLoader();
                    const result = evt.target?.result as ArrayBuffer;
                    // TODO:
                    const obj = loader.parse(result, '');
                });
                break;
            case '3mf':
                break;
            case 'amf':
                break;
            case 'dae':
                break;
            case 'drc':
                break;
            case 'fbx':
                break;
            case 'glb':
                break;
            case 'gltf':
                break;
            case 'js':
            case 'json':
            case '3geo':
            case '3mat':
            case '3obj':
            case '3scn':
                break;
            case 'kmz':
                break;
            case 'md2':
                break;
            case 'obj':
                break;
            case 'ply':
                break;
            case 'stl':
                break;
            case 'svg':
                break;
            case 'vtk':
                break;
            case 'wrl':
                break;
            case 'zip':
                break;
            default:
                break;
        }
    }
}


function createFilesMap(files: File[]) {
    var map: FileMap = {};
    for(var i = 0; i < files.length; i++) {
        var file = files[i];
        map[file.name] = file;
    }
    return map;
}


interface FileMap {
    [name: string]: File;
}