export interface UserPoint {
	userId: number;
	balance: number;
	updateTime: number;
	version: number;
	status: number;
	blockBalance: number;
}

export interface PrivacyItemUnlimit {
	area: boolean;
	college: boolean;
	gender: boolean;
	age: boolean;
	villageAge: boolean;
}

export interface Expert {}

export interface Profile {
	privacyItemUnlimit: PrivacyItemUnlimit;
	avatarDetail?: any;
	avatarImgIdStr: string;
	backgroundImgIdStr: string;
	vipType: number;
	mutual: boolean;
	remarkName?: any;
	avatarUrl: string;
	backgroundImgId: number;
	avatarImgId: number;
	province: number;
	city: number;
	gender: number;
	backgroundUrl: string;
	followed: boolean;
	djStatus: number;
	accountStatus: number;
	authStatus: number;
	detailDescription: string;
	experts: Expert;
	expertTags?: any;
	userId: number;
	userType: number;
	birthday: number;
	nickname: string;
	defaultAvatar: boolean;
	createTime: number;
	description: string;
	signature: string;
	authority: number;
	followeds: number;
	follows: number;
	blacklist: boolean;
	eventCount: number;
	allSubscribedCount: number;
	playlistBeSubscribedCount: number;
	avatarImgId_str: string;
	followTime?: any;
	followMe: boolean;
	artistIdentity: any[];
	cCount: number;
	inBlacklist: boolean;
	sDJPCount: number;
	playlistCount: number;
	sCount: number;
	newFollows: number;
}

export interface Binding {
	expiresIn: number;
	refreshTime: number;
	bindingTime: number;
	tokenJsonStr?: any;
	userId: number;
	url: string;
	expired: boolean;
	id: number;
	type: number;
}

export interface ProfileVillageInfo {
	title: string;
	imageUrl?: any;
	targetUrl: string;
}

export interface UserInfoData {
	level: number;
	listenSongs: number;
	userPoint: UserPoint;
	mobileSign: boolean;
	pcSign: boolean;
	profile: Profile;
	peopleCanSeeMyPlayRecord: boolean;
	bindings: Binding[];
	adValid: boolean;
	code: number;
	newUser: boolean;
	recallUser: boolean;
	createTime: number;
	createDays: number;
	profileVillageInfo: ProfileVillageInfo;
}