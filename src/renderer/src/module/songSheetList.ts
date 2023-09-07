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

export interface Artist {
	id: number;
	name: string;
}

export interface AlbumMeta {
	id: number;
	name: string;
}

export interface OriginSongSimpleData {
	songId: number;
	name: string;
	artists: Artist[];
	albumMeta: AlbumMeta;
}

export interface SSListSong {
  name?: string;
  id?: number;
  pst?: number;
  t?: number;
  ar?: Ar[];
  alia: any[];
  pop?: number;
  st?: number;
  rt?: string;
  fee?: number;
  v?: number;
  crbt?: any;
  cf?: string;
  al: Al;
  dt?: number;
  h?: H;
  m?: M;
  l?: L;
  sq?: Sq;
  hr?: any;
  a?: any;
  cd?: string;
  no?: number;
  rtUrl?: any;
  ftype?: number;
  rtUrls?: any[];
  djId?: number;
  copyright?: number;
  s_id?: number;
  mark?: number;
  originCoverType?: number;
  originSongSimpleData?: OriginSongSimpleData;
  tagPicList?: any;
  resourceState?: boolean;
  version?: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  awardTags?: any;
  single?: number;
  noCopyrightRcmd?: any;
  rtype?: number;
  rurl?: any;
  mst?: number;
  cp?: number;
  mv?: number;
  publishTime?: number;
}

export interface FreeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
	listenType?: any;
}

export interface ChargeInfoList {
	rate: number;
	chargeUrl?: any;
	chargeMessage?: any;
	chargeType: number;
}

export interface  SSListPrivilege {
	id: number;
	fee: number;
	payed: number;
	st: number;
	pl: number;
	dl: number;
	sp: number;
	cp: number;
	subp: number;
	cs: boolean;
	maxbr: number;
	fl: number;
	toast: boolean;
	flag: number;
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
	chargeInfoList: ChargeInfoList[];
}

export interface  SSListData{
	songs: SSListSong[];
	privileges:  SSListPrivilege[];
	code: number;
}