/* 精选-网易官方MV */
export interface Artist {
	id: number;
	name: string;
}

export interface FMVItem {
	id: number;
	cover: string;
	name: string;
	playCount: number;
	briefDesc?: any;
	desc?: any;
	artistName: string;
	artistId: number;
	duration: number;
	mark: number;
	subed: boolean;
	artists: Artist[];
}

export interface FMVData {
	data: FMVItem[];
	more: boolean;
	code: number;
}