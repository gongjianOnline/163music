/* 最新专辑 */
export interface Artist {
	name: string;
	id: number;
	picId: number;
	img1v1Id: number;
	briefDesc: string;
	picUrl: string;
	img1v1Url: string;
	albumSize: number;
	alias: any[];
	trans: string;
	musicSize: number;
	topicPerson: number;
	picId_str: string;
	img1v1Id_str: string;
}

export interface Artist {
	name: string;
	id: number;
	picId: number;
	img1v1Id: number;
	briefDesc: string;
	picUrl: string;
	img1v1Url: string;
	albumSize: number;
	alias: any[];
	trans: string;
	musicSize: number;
	topicPerson: number;
	img1v1Id_str: string;
}

export interface AlbumItem {
	name: string;
	id: number;
	type: string;
	size: number;
	picId: number;
	blurPicUrl: string;
	companyId: number;
	pic: number;
	picUrl: string;
	publishTime: number;
	description: string;
	tags: string;
	company: string;
	briefDesc: string;
	artist: Artist;
	songs?: any;
	alias: any[];
	status: number;
	copyrightId: number;
	commentThreadId: string;
	artists: Artist[];
	paid: boolean;
	onSale: boolean;
	picId_str: string;
}

export interface AlbumData {
	code: number;
	albums: AlbumItem[];
}