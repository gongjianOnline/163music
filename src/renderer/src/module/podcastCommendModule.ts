/* 播客个性推荐 */
export interface Dj {
	defaultAvatar: boolean;
	province: number;
	authStatus: number;
	followed: boolean;
	avatarUrl: string;
	accountStatus: number;
	gender: number;
	city: number;
	birthday: number;
	userId: number;
	userType: number;
	nickname: string;
	signature: string;
	description: string;
	detailDescription: string;
	avatarImgId: number;
	backgroundImgId: number;
	backgroundUrl: string;
	authority: number;
	mutual: boolean;
	expertTags?: any;
	experts?: any;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	authenticationTypes: number;
	avatarDetail?: any;
	avatarImgIdStr: string;
	backgroundImgIdStr: string;
	anchor: boolean;
	avatarImgId_str: string;
}

export interface PCMItem {
	id: number;
	dj: Dj;
	name: string;
	picUrl: string;
	desc: string;
	subCount: number;
	programCount: number;
	createTime: number;
	categoryId: number;
	category: string;
	secondCategoryId: number;
	secondCategory: string;
	radioFeeType: number;
	feeScope: number;
	buyed: boolean;
	videos?: any;
	finished: boolean;
	underShelf: boolean;
	purchaseCount: number;
	price: number;
	originalPrice: number;
	discountPrice?: any;
	lastProgramCreateTime: number;
	lastProgramName: string;
	lastProgramId: number;
	picId: number;
	rcmdText: string;
	hightQuality: boolean;
	whiteList: boolean;
	liveInfo?: any;
	playCount: number;
	icon?: any;
	privacy: boolean;
	intervenePicUrl: string;
	intervenePicId: number;
	dynamic: boolean;
	shortName?: any;
	taskId: number;
	manualTagsDTO?: any;
	scoreInfoDTO?: any;
	descPicList?: any;
	subed: boolean;
	original: string;
	replaceResource?: any;
	composeVideo: boolean;
	rcmdtext: string;
	lastUpdateProgramName: string;
	alg: string;
}

export interface PCMData {
	data: PCMItem[];
	code: number;
}