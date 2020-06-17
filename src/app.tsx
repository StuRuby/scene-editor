import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { Menubar } from './components/menubar';

const { Header, Sider, Content } = Layout;

function App() {
	return (
		<Layout style={{ height: '100%' }}>
			<Header>
				<Menubar />
			</Header>
			<Layout>
				<Sider>Sider</Sider>
				<Content>Content</Content>
			</Layout>
		</Layout>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
