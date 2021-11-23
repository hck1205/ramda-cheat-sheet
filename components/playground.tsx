import React, { FunctionComponent, useEffect, useState } from 'react';
import { message } from 'antd';
import Playground from 'javascript-playgrounds';

type Props = {
	data: {
		rawData: any;
		input: any;
	};
};

function PlayGround({ data }: Props) {
	useEffect(() => {
		const { rawData, input } = data;

		const codes = `${rawData};\n\n${input};\n\nconsole.log(result);`;

		navigator.clipboard.writeText(codes);

		if (rawData !== '' && input !== '') {
			message.info('Codes are copied, paste codes onto code panel');
		}
	}, [data]);

	return (
		<Playground
			modules={[
				{
					name: 'ramda',
					globalName: 'R',
					url:
						'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js',
				},
			]}
			style={{ width: '100%', height: 500 }}
			code={''}
			playground={{ enabled: true, renderReactElements: true }}
		/>
	);
}

export default PlayGround;
