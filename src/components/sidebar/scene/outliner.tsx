import React from 'react';
import { Card, Tree } from 'antd';
import styled from 'styled-components';

import useSelected from '@src/models/use-selected';
import useMeshList from '@src/models/use-mesh-list';

const { TreeNode } = Tree;
const CardContainer = styled(Card)`
	height: 300px;
	overflow: scroll;
`;

export function Outliner() {
	const { meshList } = useMeshList();
	const { selectedUuid, setSelected } = useSelected();
	const onSelect = (keys: React.Key[], info: any) => {
		const selected = keys[0] as string;
		setSelected(selected);
	};
	const boxTreeNodes = _.map(
		_.values(meshList),
		obj => <TreeNode title={obj.name} key={obj.uuid} />
	);

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
