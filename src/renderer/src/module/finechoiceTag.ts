/* 精选-歌单广场标签数据模型 */
export interface TagItem {
	id: number;
	name: string;
	type: number;
	category: number;
	hot: boolean;
}

export interface TagData {
	tags: TagItem[];
	code: number;
}