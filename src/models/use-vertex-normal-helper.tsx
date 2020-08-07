import React, { useState } from 'react';
import { createModel } from 'hox';

function useVertexNormalHelper() {
    const [vertexNormalHelperVisible, setVertexNormalHelperVisible] = useState<boolean>(false);

    return {
        vertexNormalHelperVisible,
        setVertexNormalHelperVisible,
    };
}

export default createModel(useVertexNormalHelper);