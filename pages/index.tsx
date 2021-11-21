import { useState } from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Tabs, Layout } from 'antd';

import { PlayGround, DataTable } from '../components';

import 'antd/dist/antd.css';

const { Sider, Content } = Layout;
const { TabPane } = Tabs;

const TAB_KEYS = Object.freeze({
  OBJECT: 'TAB_OBJECT',
  LIST: 'TAB_LIST',
});

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState(TAB_KEYS.OBJECT);

  return (
    <ComponentWrapper>
      <Head>
        <title>Ramda cheat sheet</title>
        <meta name="description" content="Ramda cheat sheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs defaultActiveKey={activeTab} onChange={(key) => setActiveTab(key)}>
        <TabPane tab="Object" key={TAB_KEYS.OBJECT} />

        <TabPane tab="List" key={TAB_KEYS.LIST} />
      </Tabs>

      <Layout style={{ backgroundColor: '#fff' }}>
        <Content>
          <DataTable />
        </Content>

        <Content>
          <PlayGround />
        </Content>
      </Layout>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  padding: 20px;
`;

export default Home;
