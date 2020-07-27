import React from 'react';

import useObjectList from '../../models/use-object-list';
import { Box } from './box';

export function Object3DList() {
	const { ids } = useObjectList();
	const boxList = ids.map(uuid => {
		return <Box key={uuid} />;
	});

	return <>{boxList}</>;
}
