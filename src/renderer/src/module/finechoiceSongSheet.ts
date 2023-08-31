/* 精选音乐-排行榜数据模型 */
export interface FSSItem {
	subscribers: any[];
	subscribed?: any;
	creator?: any;
	artists?: any;
	tracks?: any;
	updateFrequency: string;
	backgroundCoverId: number;
	backgroundCoverUrl?: any;
	titleImage: number;
	coverText?: any;
	titleImageUrl?: any;
	coverImageUrl?: any;
	iconImageUrl?: any;
	englishTitle?: any;
	opRecommend: boolean;
	recommendInfo?: any;
	socialPlaylistCover?: any;
	cloudTrackCount: number;
	highQuality: boolean;
	subscribedCount: number;
	trackNumberUpdateTime: number;
	adType: number;
	playCount: number;
	privacy: number;
	specialType: number;
	coverImgId: number;
	newImported: boolean;
	anonimous: boolean;
	updateTime: number;
	trackUpdateTime: number;
	trackCount: number;
	coverImgUrl: string;
	commentThreadId: string;
	totalDuration: number;
	createTime: number;
	ordered: boolean;
	description: string;
	status: number;
	tags: any[];
	userId: number;
	name: string;
	id: number;
	coverImgId_str: string;
	toplistType: string;
}

export interface ArtistToplist {
	coverUrl: string;
	name: string;
	upateFrequency: string;
	position: number;
	updateFrequency: string;
}

export interface FSSData {
	code: number;
	list: FSSItem[];
	artistToplist: ArtistToplist;
}