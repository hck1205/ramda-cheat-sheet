import { listData, objectData, objectListData } from '../data';

export type TAB_KEY = 'OBJECT_LIST' | 'OBJECT' | 'LIST';

export const TAB_KEYS: { [TAB_KEY: string]: TAB_KEY } = {
	OBJECT_LIST: 'OBJECT_LIST',
	OBJECT: 'OBJECT',
	LIST: 'LIST',
};

export const DATA_MAP = {
	[TAB_KEYS.OBJECT_LIST]: objectListData,
	[TAB_KEYS.OBJECT]: objectData,
	[TAB_KEYS.LIST]: listData,
};
