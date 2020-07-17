import React from 'react';

import useBox from '../../models/use-box';
import { Box } from './box';

export function BoxList() {
	const { boxes } = useBox();
	const boxList = boxes.map(box => <Box key={box.uuid} box={box} />);

	return <>{boxList}</>;
}
