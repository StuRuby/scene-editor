import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import classnames from 'classnames';
import 'antd/dist/antd.css';

import { Menubar } from './components/menubar';
import { Sidebar } from './components/sidebar';
import styles from './app.less';

const { Header, Sider, Content } = Layout;

function App() {
	return (
		<Layout style={{ height: '100%' }}>
			<Header>
				<Menubar />
			</Header>
			<Layout>
				<Content>Content</Content>
				<Sider theme="light" width="300" className={classnames(styles.side_bar)}>
					<Sidebar />
				</Sider>
			</Layout>
		</Layout>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
