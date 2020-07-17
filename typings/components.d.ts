/// <reference types="react" />
import { ReactThreeFiber } from 'react-three-fiber';
import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            transformControls: ReactThreeFiber.Object3DNode<TransformControls, typeof TransformControls>;
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
        }
    }
}