import React, { useState } from 'react';
import { createModel } from 'hox';
import * as THREE from 'three';
import { omit } from 'lodash';


function useMeshList() {
    const [meshList, setMeshList] = useState<MeshList>({});

    const addMesh = (uuid: string, mesh: Mesh) => {
        const updateMesh = { [uuid]: mesh };
        const nextMeshList = { ...meshList, ...updateMesh };
        setMeshList(nextMeshList);
    };


    const removeMesh = (uuid: string) => {
        const nextMeshList = omit(meshList, [uuid]);
        setMeshList(nextMeshList);
    };

    const getMesh = (uuid: string) => {
        return meshList[uuid];
    };

    const updateMesh = (uuid: string, mesh: Mesh) => {
        const currentMesh = getMesh(uuid);
        if (!currentMesh) return;
        const nextMesh = { [uuid]: { ...currentMesh, ...mesh } };
        const nextMeshList = { ...meshList, ...nextMesh };
        setMeshList(nextMeshList);
    };

    return {
        meshList,
        addMesh,
        removeMesh,
        getMesh,
        updateMesh,
    };
}

export default createModel(useMeshList);


interface MeshList {
    [uuid: string]: Mesh;
}

export interface Mesh {
    type?: string;
    uuid?: string;
    name?: string;
    position?: THREE.Vector3;
    rotation?: THREE.Euler;
    scale?: THREE.Vector3;
    visible?: boolean;
    frustumCulled?: boolean;
    castShadow?: boolean;
    userData?: any;
    geometry?: BufferGeometry;
    material?: Material;
}

interface BufferGeometry {
    type?: string;
    uuid?: string;
    name?: string;
    width?: number;
    height?: number;
    depth?: number;
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
    attributes?: THREE.BufferAttribute;
}

interface Material {
    [key: string]: any;
}
