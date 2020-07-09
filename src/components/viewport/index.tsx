import React from 'react';
import { Canvas } from 'react-three-fiber';

import { Editor } from '../editor/editor';
import { ViewportInfo } from './info';
import { ViewportEditor } from './viewport';
import { ViewportToolbar } from './toolbar';

export function Viewport(props: Props) {
	return (
		<div style={{ background: 'gray', height: '100%' }}>
			<Canvas>
				<ViewportEditor />
			</Canvas>
			<ViewportInfo />
			<ViewportToolbar />
		</div>
	);
}

interface Props {
	editor: Editor;
}
