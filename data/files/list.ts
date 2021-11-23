import { DataType } from './type';

const listData: DataType[] = [
	{
		rawData: `[{"value":"en","label":"English"},{"value":"ko","label":"한국어"}]`,
		input: `R.compose(
        R.defaultTo({}),
        R.find(R.__, rawData),
        R.propEq('value')
      )('en')`,
		output: `{"label": "English", "value": "en"}`,
		explaination: `R.find(R.propEq('value', lang), LANGS) || {} \nRaw Data 중에 'value'라는 prop이 lang과 같은 값을 반환하고, 없다면 {}를 반환한다.`,
	},
];

export default listData;
