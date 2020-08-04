import React from 'react';
import * as _ from 'lodash';

import useMeshList from '@src/models/use-mesh-list';
import { Mesh } from './mesh';


export function MeshList() {
    const { meshList } = useMeshList();

    return _.map(
        _.values(meshList),
        mesh => <Mesh key={mesh.uuid} instance={mesh} />
    );
}