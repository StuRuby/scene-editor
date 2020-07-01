import React from 'react';

import { Outliner } from './outliner';
import { SidebarProperties } from './properties';

export function SidebarScene() {
	return (
		<React.Fragment>
			<Outliner />
			<SidebarProperties />
		</React.Fragment>
	);
}
