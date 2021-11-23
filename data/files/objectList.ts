import { DataType } from './type';

const objectListData: DataType[] = [
	{
		rawData: `const rawData = 
		[{"value":"en","label":"English"},{"value":"ko","label":"한국어"}]`,
		input: `const result = R.compose(
        R.defaultTo({}),
        R.find(R.__, rawData),
        R.propEq('value')
      )('en')`,
		output: `{"label": "English", "value": "en"}`,
		explaination: `R.find(R.propEq('value', lang), LANGS) || {} 
		Raw Data 중에 'value'라는 prop이 lang과 같은 값을 반환하고, 없다면 {}를 반환한다.`,
	},

	{
		rawData: `const rawData = [{ name: 'Adriel' },
			{ name: 'Adriel_US' },
			{ name: 'Adriel_KR' },
			{ name: 'Adriel_JP' }]`,
		input: `const result = R.pluck('name', rawData)`,
		output: `["Adriel", "Adriel_US", "Adriel_KR", "Adriel_JP"]`,
		explaination: ``,
	},

	{
		rawData: `const rawData = 
		[{ name: 'Adriel' },
    { name: 'Adriel_US' },
    { name: 'Adriel_KR' },
    { name: 'Adriel_JP' }]`,
		input: `const result = 
		R.filter(
			R.both(
					R.propEq('name', name),
					R.compose(R.not, R.propEq('id', id))
			),rawData)`,
		output: ``,
		explaination: `filter(조건, 배열) ⇒ 조건에 맞는 배열
		filter(propEq('키', 벨류), 오브젝트배열) ⇒ 오브젝트 중 키가 벨류인 것
		both(A, B) ⇒ A&&B`,
	},
];

export default objectListData;
