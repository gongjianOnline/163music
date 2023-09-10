export interface Creator {
	avatarImgId: number;
	backgroundImgId: number;
	detailDescription: string;
	backgroundUrl: string;
	defaultAvatar: boolean;
	expertTags?: any;
	djStatus: number;
	followed: boolean;
	backgroundImgIdStr: string;
	avatarImgIdStr: string;
	remarkName?: any;
	mutual: boolean;
	accountStatus: number;
	vipType: number;
	province: number;
	avatarUrl: string;
	authStatus: number;
	userType: number;
	nickname: string;
	gender: number;
	birthday: number;
	city: number;
	description: string;
	userId: number;
	signature: string;
	authority: number;
}

export interface HomeEverRecommendItem {
	id: number;
	type: number;
	name: string;
	copywriter: string;
	picUrl: string;
	playcount: number;
	createTime: number;
	creator: Creator;
	trackCount: number;
	userId: number;
	alg: string;
}

export interface HomeEverRecommend {
	code: number;
	featureFirst: boolean;
	haveRcmdSongs: boolean;
	recommend: HomeEverRecommendItem[];
}