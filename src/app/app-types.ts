export interface Post {
	username: string;
	quantifiedAlignment: QuantifiedAlignment;
	location: string;
	date: string;
	text: string;
}

export interface QuantifiedAlignment {
	alignment: string;
	magnitude: number;
}

export interface AlignmentPointsData {
	state: number;
	liberation: number;
	passive: number;
}
