import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

import { Editor } from '../editor/editor';
import { EditorSignals } from '../editor/signals';
import { ViewportInfo } from './info';
import { ViewportEditor } from './viewport';
import { ViewportToolbar } from './toolbar';

export function Viewport(props: Props) {
	return (
		<div style={{ background: 'gray', height: '100%' }}>
			<ViewportEditor />
			<ViewportInfo />
			<ViewportToolbar />
		</div>
	);
}

interface Props {
	editor: Editor;
}
