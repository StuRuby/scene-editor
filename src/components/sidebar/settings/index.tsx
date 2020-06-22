import React from 'react';

import { Settings } from './settings';
import { History } from './history';

export function SidebarSettings() {
	return (
		<React.Fragment>
			<Settings />
			<History />
		</React.Fragment>
	);
}
