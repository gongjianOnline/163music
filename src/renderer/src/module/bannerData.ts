/* 轮播banner数据模型 */
export interface Banner {
	imageUrl: string;
	targetId: number;
	adid?: any;
	targetType: number;
	titleColor: string;
	typeTitle: string;
	url?: any;
	exclusive: boolean;
	monitorImpress?: any;
	monitorClick?: any;
	monitorType?: any;
	monitorImpressList?: any;
	monitorClickList?: any;
	monitorBlackList?: any;
	extMonitor?: any;
	extMonitorInfo?: any;
	adSource?: any;
	adLocation?: any;
	adDispatchJson?: any;
	encodeId: string;
	program?: any;
	event?: any;
	video?: any;
	song?: any;
	scm: string;
	bannerBizType: string;
}

export interface bannerData {
	banners: Banner[];
	code: number;
}