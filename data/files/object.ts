import { DataType } from './type';

const objectData: DataType[] = [
	{
		rawData: `const rawData = {
        childObjects: [{
          id: 'some id',
          alias: 'some alias'
        }]
    }`,
		input: `const result =  R.over(
    R.lensProp('childObjects'),
    R.map(
        R.when(
            R.propEq('id', 'some id'),
            R.assoc('alias', 'updated alias')
        )
    ), rawData);`,
		output: `childObjects: 
    [{id: "some id", alias: "updated alias"}]`,
		explaination: `Object 안의 Object List에서 
    데이터 값을 변경할 Target Object를 찾아 
    해당 Object의 Alias 값을 변경후 childObjects를 반환`,
	},
];

export default objectData;
