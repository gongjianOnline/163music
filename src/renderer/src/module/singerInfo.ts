export interface Identify {
	imageUrl?: any;
	imageDesc: string;
	actionUrl: string;
}

export interface Rank {
	rank: number;
	type: number;
}

export interface Artist {
	id: number;
	cover: string;
	avatar: string;
	name: string;
	transNames: any[];
	alias: string[];
	identities: string[];
	identifyTag?: any;
	briefDesc: string;
	rank: Rank;
	albumSize: number;
	musicSize: number;
	mvSize: number;
}

export interface SecondaryExpertIdentiy {
	expertIdentiyId: number;
	expertIdentiyName: string;
	expertIdentiyCount: number;
}

export interface SingerInfoData {
	videoCount: number;
	identify: Identify;
	artist: Artist;
	blacklist: boolean;
	preferShow: number;
	showPriMsg: boolean;
	secondaryExpertIdentiy: SecondaryExpertIdentiy[];
}

export interface SingerInfo {
	code: number;
	message: string;
	data: SingerInfoData;
}