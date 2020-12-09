export interface IPersonalData {
	icon: string;
	content: string;
	link?: string;
}

export interface ISectionData {
	title: string;
	info: { icon: string; text: string }[];
}
