import THREE from 'three';

export interface Geometries {
    [id: string]: THREE.Geometry | THREE.BufferGeometry;
}

export interface Materials {
    [id: string]: THREE.Material | THREE.Material[];
}

export interface Textures {
    [id: string]: THREE.Texture;
}

export interface Helpers {
    [id: string]: Helper;
}

export interface Cameras {
    [id: string]: THREE.PerspectiveCamera | THREE.OrthographicCamera;
}

export type Helper = THREE.CameraHelper | THREE.PointLightHelper | THREE.DirectionalLightHelper | THREE.SpotLightHelper | THREE.HemisphereLightHelper | THREE.SkeletonHelper;

export enum STATE {
    NONE = -1,
    ROTATE = 0,
    ZOOM = 1,
    PAN = 2
}