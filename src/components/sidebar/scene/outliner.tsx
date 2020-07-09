import React from 'react';
import { Card, Tree } from 'antd';
import styled from 'styled-components';

import useBox from '../../../models/use-box';
import useSelected from '../../../models/use-selected';

const { TreeNode } = Tree;
const CardContainer = styled(Card)`
	height: 300px;
	overflow: scroll;
`;

export function Outliner() {
	const { boxes } = useBox();
	const { selectedUuid, setSelected } = useSelected();
	const onSelect = (keys: React.Key[], info: any) => {
		const selected = keys[0] as string;
		setSelected(selected);
	};
	const boxTreeNodes = boxes.map(box => <TreeNode title={box.name} key={box.uuid} />);
	return (
		<CardContainer>
			<Tree
				defaultExpandAll={true}
				selectedKeys={selectedUuid ? [selectedUuid] : []}
				showLine
				onSelect={onSelect}>
				{boxTreeNodes}
			</Tree>
		</CardContainer>
	);
}
