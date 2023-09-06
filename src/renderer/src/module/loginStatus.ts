export interface LoginStatusAccount {
	id: number;
	userName: string;
	type: number;
	status: number;
	whitelistAuthority: number;
	createTime: number;
	tokenVersion: number;
	ban: number;
	baoyueVersion: number;
	donateVersion: number;
	vipType: number;
	anonimousUser: boolean;
	paidFee: boolean;
}

export interface LoginStatusData {
	code: number;
	account?: LoginStatusAccount;
	profile?: any;
}

export interface LoginStatus {
	data: LoginStatusData;
}