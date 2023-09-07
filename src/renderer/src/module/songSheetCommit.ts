export interface AvatarDetail {
	userType: number;
	identityLevel: number;
	identityIconUrl: string;
}

export interface Associator {
	vipCode: number;
	rights: boolean;
	iconUrl: string;
}

export interface MusicPackage {
	vipCode: number;
	rights: boolean;
	iconUrl: string;
}

export interface VipRight {
	associator: Associator;
	musicPackage: MusicPackage;
	redplus?: any;
	redVipAnnualCount: number;
	redVipLevel: number;
}

export interface User {
	locationInfo?: any;
	liveInfo?: any;
	anonym: number;
	commonIdentity?: any;
	avatarDetail?: any;
	userType: number;
	avatarUrl: string;
	followed: boolean;
	mutual: boolean;
	remarkName?: any;
	socialUserId?: any;
	vipRights: VipRight;
	nickname: string;
	authStatus: number;
	expertTags?: any;
	experts?: any;
	vipType: number;
	userId: number;
	target?: any;
}

export interface PendantData {
	id: number;
	imageUrl: string;
}

export interface IpLocation {
	ip?: any;
	location: string;
	userId: number;
}

export interface HotComment {
	user: User;
	beReplied: any[];
	pendantData: PendantData;
	showFloorComment?: any;
	status: number;
	commentId: number;
	content: string;
	richContent?: any;
	contentResource?: any;
	time: number;
	timeStr: string;
	needDisplayTime: boolean;
	likedCount: number;
	expressionUrl?: any;
	commentLocationType: number;
	parentCommentId: number;
	decoration?: any;
	repliedMark?: any;
	grade?: any;
	userBizLevels?: any;
	ipLocation: IpLocation;
	owner: boolean;
	liked: boolean;
}

export interface Associator {
	vipCode: number;
	rights: boolean;
	iconUrl: string;
}

export interface MusicPackage {
	vipCode: number;
	rights: boolean;
	iconUrl: string;
}

export interface VipRight {
	associator: Associator;
	musicPackage: MusicPackage;
	redplus?: any;
	redVipAnnualCount: number;
	redVipLevel: number;
}

export interface User {
	locationInfo?: any;
	liveInfo?: any;
	anonym: number;
	commonIdentity?: any;
	avatarDetail?: any;
	userType: number;
	avatarUrl: string;
	followed: boolean;
	mutual: boolean;
	remarkName?: any;
	socialUserId?: any;
	vipRights: VipRight;
	nickname: string;
	authStatus: number;
	expertTags?: any;
	experts?: any;
	vipType: number;
	userId: number;
	target?: any;
}

export interface PendantData {
	id: number;
	imageUrl: string;
}

export interface Decoration {}

export interface Grade {
	resourceType?: any;
	resourceId?: any;
	userId: number;
	standard: number;
	grade: number;
	desc: string;
	iconUrl?: any;
	voteCount?: any;
	canceledVoteCount?: any;
	relatedResType?: any;
	relatedResId?: any;
	updateTime: number;
}

export interface IpLocation {
	ip?: any;
	location: string;
	userId: number;
}

export interface SongSheetCommitComment {
	user: User;
	beReplied: any[];
	pendantData: PendantData;
	showFloorComment?: any;
	status: number;
	commentId: number;
	content: string;
	richContent?: any;
	contentResource?: any;
	time: number;
	timeStr: string;
	needDisplayTime: boolean;
	likedCount: number;
	expressionUrl?: any;
	commentLocationType: number;
	parentCommentId: number;
	decoration: Decoration;
	repliedMark?: any;
	grade: Grade;
	userBizLevels?: any;
	ipLocation: IpLocation;
	owner: boolean;
	liked: boolean;
}

export interface SongSheetCommitData {
	isMusician: boolean;
	cnum: number;
	userId: number;
	topComments: any[];
	moreHot: boolean;
	hotComments: HotComment[];
	commentBanner?: any;
	code: number;
	comments: SongSheetCommitComment[];
	total: number;
	more: boolean;
}