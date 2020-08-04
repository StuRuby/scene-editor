import React from 'react';

export function useForceUpdate() {
    return React.useState()[1].bind(null, {});
}