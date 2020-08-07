import React from 'react';
import * as THREE from 'three';
import { MeshStandardMaterialParameters } from 'three/src/materials/MeshStandardMaterial';


export function MeshStandardMaterial(props: Props) {
    const { material } = props;
    return <meshStandardMaterial attach='material' args={[material]} />
}

interface Props {
    material: MeshStandardMaterialParameters;
}


