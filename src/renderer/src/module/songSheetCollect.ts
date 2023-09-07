export interface SongSheetCollectSubscriber {
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
	subscribeTime: number;
	backgroundImgIdStr: string;
	avatarImgIdStr: string;
	vipRights?: any;
	avatarImgId_str: string;
	avatarDetail?: any;
}

export interface SongSheetCollectData {
	total: number;
	code: number;
	more: boolean;
	subscribers: SongSheetCollectSubscriber[];
}