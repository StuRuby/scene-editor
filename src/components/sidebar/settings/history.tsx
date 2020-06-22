import React from 'react';
import { List, Divider, Row, Col, Checkbox, Space, Card } from 'antd';
import classnames from 'classnames';

import styles from './index.less';

export function History() {
	const data = [
		'Racing car sprays burning fuel into crowd.',
		'Japanese princess to wed commoner.',
		'Australian walks 100km after outback crash.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.',
		'Racing car sprays burning fuel into crowd.',
		'Japanese princess to wed commoner.',
		'Australian walks 100km after outback crash.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.',
		'Racing car sprays burning fuel into crowd.',
		'Japanese princess to wed commoner.',
		'Australian walks 100km after outback crash.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.',
	];

	return (
		<React.Fragment>
			<Space direction="vertical">
				<Row align="middle">
					<Col span={8} offset={1}>
						历史记录
					</Col>
					<Col span={13} offset={2}>
						<Checkbox>本地存储</Checkbox>
					</Col>
				</Row>
				<Card>
					<List
						className={classnames(styles.list)}
						size="small"
						dataSource={data}
						renderItem={item => <List.Item>{item}</List.Item>}
					/>
				</Card>
			</Space>
		</React.Fragment>
	);
}
