import React, { useState } from 'react';
import { createModel } from 'hox';

function useOrbitMode() {
	const [enabled, setEnabled] = useState(true);

	const setOrbitEnabled = (enabled: boolean) => setEnabled(enabled);

	return {
		enabled,
		setOrbitEnabled,
	};
}

export default createModel(useOrbitMode);
