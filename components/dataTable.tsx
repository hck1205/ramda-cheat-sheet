import React, { FunctionComponent } from 'react';
import R from 'ramda';
import { Table } from 'antd';
import styled from '@emotion/styled';
import stringify from 'json-stringify-pretty-compact';

const dataSource = [
  {
    key: '1',
    input: 'Mike',
    output: 32,
    rawData: '10 Downing Street',
  },
  {
    key: '2',
    input: 'John',
    output: 42,
    rawData: '10 Downing Street',
  },
  {
    key: '3',
    rawData: `[
      { name: 'Adriel' },
      { name: 'Adriel_US' },
      { name: 'Adriel_KR' },
      { name: 'Adriel_JP' },
    ]`,
    input: `R.compose(
        R.defaultTo({}),
        R.find(R.__, rawData),
        R.propEq('value')
      )('en')`,
    output: `{"label": "English", "value": "en"}`,
  },
];

const columns = [
  {
    title: 'Raw data',
    dataIndex: 'rawData',
    key: 'rawData',
    render: (text: string) => <CommonDiv>{text}</CommonDiv>,
  },
  {
    title: 'Input',
    dataIndex: 'input',
    key: 'input',
    render: (text: string) => <CommonDiv>{text}</CommonDiv>,
  },
  {
    title: 'Output',
    dataIndex: 'output',
    key: 'output',
    render: (text: string) => <CommonDiv>{text}</CommonDiv>,
  },
];

const DataTable: FunctionComponent = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ y: 600 }}
      pagination={false}
      sticky={true}
    />
  );
};

const CommonDiv = styled.div`
  white-space: pre-wrap;
`;

export default DataTable;
