import React from 'react';
import { Card, Tree } from 'antd';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';

const { TreeNode } = Tree;
const CardContainer = styled(Card)`
	height: 300px;
	overflow: scroll;
`;

export function Outliner() {
	return (
		<CardContainer>
			<Tree defaultExpandAll={true} showLine>
				<TreeNode title="parent 1-0" key="0-0-0">
					<TreeNode title="leaf" key="0-0-0-0" />
					<TreeNode title="leaf" key="0-0-0-1" />
					<TreeNode title="leaf" key="0-0-0-2" />
				</TreeNode>
				<TreeNode title="parent 1-1" key="0-0-1"></TreeNode>
				<TreeNode title="parent 1-2" key="0-0-2">
					<TreeNode title="leaf" key="0-0-2-0" />
					<TreeNode title="leaf" key="0-0-2-1" />
				</TreeNode>
			</Tree>
		</CardContainer>
	);
}
