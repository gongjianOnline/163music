/* 首页推荐歌单 */
export interface PersonalizedItem {
	id: number;
	type: number;
	name: string;
	copywriter: string;
	picUrl: string;
	canDislike: boolean;
	trackNumberUpdateTime: number;
	playCount: number;
	trackCount: number;
	highQuality: boolean;
	alg: string;
}

export interface PersonalizedData {
	hasTaste: boolean;
	code: number;
	category: number;
	result: PersonalizedItem[];
}