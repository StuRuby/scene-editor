import { hot } from 'react-hot-loader/root'
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { Layout } from 'antd';
import classnames from 'classnames';
import 'antd/dist/antd.css';

import { Menubar } from './components/menubar';
import { Sidebar } from './components/sidebar';
import { Viewport } from './components/viewport';
import styles from './app.less';

const { Header, Sider, Content } = Layout;

function App() {
	return (
		<RecoilRoot>
			<React.Suspense fallback={<div>Loading</div>}>
				<Layout style={{ height: '100%' }}>
					<Header>
						<Menubar />
					</Header>
					<Layout>
						<Content>
							<Viewport />
						</Content>
						<Sider theme="light" width="300" className={classnames(styles.side_bar)}>
							<Sidebar />
						</Sider>
					</Layout>
				</Layout>
			</React.Suspense>
		</RecoilRoot>
	);
}

const Root = process.env.NODE_ENV === 'development' ? hot(App) : App

ReactDOM.render(<Root />, document.getElementById('root'));
