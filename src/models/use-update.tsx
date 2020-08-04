import React, { useState } from 'react';
import { createModel } from 'hox';

function useUpdate() {
    const [shouldUpdate, update] = useState(0);
    const forceUpdate = () => update(x => x + 1);
    return {
        shouldUpdate,
        forceUpdate
    }
}

export default createModel(useUpdate);