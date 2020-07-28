import React from 'react';

import useObjectList from '../../models/use-object-list';
import { Box } from './box';

export function Object3DList() {
	const { ids } = useObjectList();
	return ids.map(id => <Box key={id} uuid={id} />);
}
