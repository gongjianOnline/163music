export interface Subscriber {
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

export interface AvatarDetail {
	userType: number;
	identityLevel: number;
	identityIconUrl: string;
}

export interface Creator {
	defaultAvatar?: boolean;
	province?: number;
	authStatus?: number;
	followed?: boolean;
	avatarUrl?: string;
	accountStatus?: number;
	gender?: number;
	city?: number;
	birthday?: number;
	userId?: number;
	userType?: number;
	nickname?: string;
	signature?: string;
	description?: string;
	detailDescription?: string;
	avatarImgId?: number;
	backgroundImgId?: number;
	backgroundUrl?: string;
	authority?: number;
	mutual?: boolean;
	expertTags?: string[];
	experts?: any;
	djStatus?: number;
	vipType?: number;
	remarkName?: any;
	authenticationTypes?: number;
	avatarDetail?: AvatarDetail;
	avatarImgIdStr?: string;
	backgroundImgIdStr?: string;
	anchor?: boolean;
	avatarImgId_str?: string;
}

export interface Ar {
	id: number;
	name: string;
	tns: any[];
	alias: any[];
}

export interface Al {
	id: number;
	name: string;
	picUrl: string;
	tns: any[];
	pic_str: string;
	pic: number;
}

export interface H {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface M {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface L {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface Sq {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface Track {
	name: string;
	id: number;
	pst: number;
	t: number;
	ar: Ar[];
	alia?: any[];
	pop: number;
	st: number;
	rt?: any;
	fee: number;
	v: number;
	crbt?: any;
	cf: string;
	al: Al;
	dt: number;
	h: H;
	m: M;
	l: L;
	sq: Sq;
	hr?: any;
	a?: any;
	cd: string;
	no: number;
	rtUrl?: any;
	ftype: number;
	rtUrls: any[];
	djId: number;
	copyright: number;
	s_id: number;
	mark: number;
	originCoverType: number;
	originSongSimpleData?: any;
	tagPicList?: any;
	resourceState: boolean;
	version: number;
	songJumpInfo?: any;
	entertainmentTags?: any;
	awardTags?: any;
	single: number;
	noCopyrightRcmd?: any;
	mv: number;
	rtype: number;
	rurl?: any;
	mst: number;
	cp: number;
	publishTime: number;
}

export interface TrackId {
	id: number;
	v: number;
	t: number;
	at: number;
	alg?: any;
	uid: number;
	rcmdReason: string;
	sc?: any;
	f?: any;
	sr?: any;
}

export interface SSInfoPlaylist {
	id?: number;
	name?: string;
	coverImgId?: number;
	coverImgUrl?: string;
	coverImgId_str?: string;
	adType?: number;
	userId?: number;
	createTime?: number;
	status?: number;
	opRecommend?: boolean;
	highQuality?: boolean;
	newImported?: boolean;
	updateTime?: number;
	trackCount?: number;
	specialType?: number;
	privacy?: number;
	trackUpdateTime?: number;
	commentThreadId?: string;
	playCount?: number;
	trackNumberUpdateTime?: number;
	subscribedCount?: number;
	cloudTrackCount?: number;
	ordered?: boolean;
	description?: string;
	tags?: string[];
	updateFrequency?: any;
	backgroundCoverId?: number;
	backgroundCoverUrl?: any;
	titleImage?: number;
	titleImageUrl?: any;
	englishTitle?: any;
	officialPlaylistType?: any;
	copied?: boolean;
	relateResType?: any;
	subscribers?: Subscriber[];
	subscribed?: boolean;
	creator: Creator;
	tracks?: Track[];
	videoIds?: any;
	videos?: any;
	trackIds?: TrackId[];
	bannedTrackIds?: any;
	mvResourceInfos?: any;
	shareCount?: number;
	commentCount?: number;
	remixVideo?: any;
	sharedUsers?: any;
	historySharedUsers?: any;
	gradeStatus?: string;
	score?: any;
	algTags?: any;
}

export interface FreeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
	listenType?: any;
	cannotListenReason?: any;
}

export interface ChargeInfoList {
	rate: number;
	chargeUrl?: any;
	chargeMessage?: any;
	chargeType: number;
}

export interface SSInfoPrivilege {
	id: number;
	fee: number;
	payed: number;
	realPayed: number;
	st: number;
	pl: number;
	dl: number;
	sp: number;
	cp: number;
	subp: number;
	cs: boolean;
	maxbr: number;
	fl: number;
	pc?: any;
	toast: boolean;
	flag: number;
	paidBigBang: boolean;
	preSell: boolean;
	playMaxbr: number;
	downloadMaxbr: number;
	maxBrLevel: string;
	playMaxBrLevel: string;
	downloadMaxBrLevel: string;
	plLevel: string;
	dlLevel: string;
	flLevel: string;
	rscl?: any;
	freeTrialPrivilege: FreeTrialPrivilege;
	rightSource: number;
	chargeInfoList: ChargeInfoList[];
}

export interface SSInfoData {
	code: number;
	relatedVideos?: any;
	playlist: SSInfoPlaylist;
	urls?: any;
	privileges: SSInfoPrivilege[];
	sharedPrivilege?: any;
	resEntrance?: any;
	fromUsers?: any;
	fromUserCount: number;
	songFromUsers?: any;
	trialMode: number;
}