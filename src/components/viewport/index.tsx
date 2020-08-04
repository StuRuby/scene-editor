import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import useOrbitMode from '@src/models/use-orbit-mode';
import useSelected from '@src/models/use-selected';
import { MeshList } from '@src/components/three/mesh-list';
import { ViewportInfo } from './info';
import { ViewportEditor } from './viewport';
import { ViewportToolbar } from './toolbar';

export function Viewport(props: Props) {
	const orbitMode = useOrbitMode();
	const { setSelected } = useSelected();
	return (
		<div style={{ background: 'gray', height: '100%' }}>
			<Canvas onPointerMissed={() => setSelected(null)} >
				<pointLight position={[10, 10, 10]} />
				<MeshList />
				<OrbitControls enabled={orbitMode.enabled} />
			</Canvas>
			<ViewportInfo />
			<ViewportToolbar />
		</div>
	);
}

