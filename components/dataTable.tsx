import React, { useEffect, useState } from 'react';

import { Table, Modal, Button } from 'antd';

import { DATA_MAP } from '../constpack';

import styled from '@emotion/styled';

const DataTable = ({
	onClickRow,
	activeTab,
}: {
	onClickRow: Function;
	activeTab: string;
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState('');
	const [dataSource, setDataSource] = useState<
		{ rawData: string; input: string }[]
	>([]);

	useEffect(() => {
		const refinedDataWithKey = DATA_MAP[activeTab].map((v, i) => ({
			...v,
			key: i,
		}));

		setDataSource(refinedDataWithKey);
	}, [activeTab]);

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
		{
			title: 'Explaination',
			dataIndex: 'explaination',
			key: 'explaination',
			render: (text: string) =>
				text ? (
					<Button
						onClick={(e) => {
							e.stopPropagation();
							setModalContent(text);
							setIsModalVisible(true);
						}}
					>
						설명보기
					</Button>
				) : null,
		},
	];

	return (
		<Component>
			<Table
				dataSource={dataSource}
				columns={columns}
				scroll={{ y: 600 }}
				pagination={false}
				sticky={true}
				onRow={(record, rowIndex) => {
					return {
						onClick: (e) => {
							const { rawData, input } = record;
							onClickRow({ rawData, input });
						}, // click row
					};
				}}
			/>
			<Modal
				visible={isModalVisible}
				cancelButtonProps={{ className: 'modal-cancel-btn' }}
				onOk={() => setIsModalVisible(false)}
				onCancel={() => setIsModalVisible(false)}
			>
				<CommonDiv>{modalContent}</CommonDiv>
			</Modal>
		</Component>
	);
};

const CommonDiv = styled.div`
	white-space: pre-line;
	line-height: 28px;
`;

const Component = styled.div``;

export default DataTable;
