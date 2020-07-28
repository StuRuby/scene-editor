import React from 'react';
import { Card, Tree } from 'antd';
import styled from 'styled-components';

import useBox from '../../../models/use-object-list';
import useSelected from '../../../models/use-selected';
import objectList from '@src/models/object-list';

const { TreeNode } = Tree;
const CardContainer = styled(Card)`
	height: 300px;
	overflow: scroll;
`;

export function Outliner() {
	const objects = objectList.objects;
	const { selectedUuid, setSelected } = useSelected();
	const onSelect = (keys: React.Key[], info: any) => {
		const selected = keys[0] as string;
		setSelected(selected);
	};
	const boxTreeNodes = objects.map(obj => <TreeNode title={obj.name} key={obj.uuid} />);
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
