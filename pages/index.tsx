import { useState } from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import { Tabs, Layout } from 'antd';
import styled from '@emotion/styled';

import { PlayGround, DataTable } from '../components';

import { TAB_KEYS, TAB_KEY } from '../constpack';

import 'antd/dist/antd.css';

const { Content } = Layout;
const { TabPane } = Tabs;

const Home: NextPage = () => {
	const [activeTab, setActiveTab] = useState(TAB_KEYS.OBJECT_LIST);
	const [playgroundData, setPlaygroundData] = useState<{
		rawData: any;
		input: any;
	}>({ rawData: '', input: '' });

	const updatePlayground = ({ rawData, input }: any) => {
		setPlaygroundData({ rawData, input });
	};

	return (
		<>
			<ComponentWrapper>
				<Head>
					<title>Ramda cheat sheet</title>
					<meta name="description" content="Ramda cheat sheet" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Tabs
					defaultActiveKey={activeTab}
					onChange={(key) => setActiveTab(key as TAB_KEY)}
				>
					{Object.keys(TAB_KEYS).map((v) => (
						<TabPane tab={v} key={TAB_KEYS[v]} />
					))}
				</Tabs>

				<Layout style={{ backgroundColor: '#fff' }}>
					<Content>
						<DataTable onClickRow={updatePlayground} activeTab={activeTab} />
					</Content>

					<Content>
						<PlayGround data={playgroundData} />
					</Content>
				</Layout>
			</ComponentWrapper>
		</>
	);
};

const ComponentWrapper = styled.div`
	padding: 20px;
`;

export default Home;
