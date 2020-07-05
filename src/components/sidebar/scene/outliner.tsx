import React from 'react';
import { Card, Tree } from 'antd';
import styled from 'styled-components';

import useBox from '../../../models/use-box';

const { TreeNode } = Tree;
const CardContainer = styled(Card)`
	height: 300px;
	overflow: scroll;
`;

export function Outliner() {
	const { boxes } = useBox();
	const boxTreeNodes = boxes.map(box => <TreeNode title={box.name} key={box.uuid} />);
	return (
		<CardContainer>
			<Tree defaultExpandAll={true} showLine>
				{boxTreeNodes}
				<TreeNode title="parent 1-1" key="0-0-1"></TreeNode>
				<TreeNode title="parent 1-2" key="0-0-2">
					<TreeNode title="leaf" key="0-0-2-0" />
					<TreeNode title="leaf" key="0-0-2-1" />
				</TreeNode>
			</Tree>
		</CardContainer>
	);
}
