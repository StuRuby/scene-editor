import React from 'react';
import THREE from 'three';

import { Editor } from '@src/components/editor/editor';
import { EditorSignals } from '@src/components/editor/signals';
import { ViewportInfo } from './info';

export function Viewport(props: Props) {
	return (
		<div style={{ background: 'gray', height: '100%' }}>
			This is a Viewport
			<ViewportInfo />
		</div>
	);
}

interface Props {
	editor: Editor;
}
