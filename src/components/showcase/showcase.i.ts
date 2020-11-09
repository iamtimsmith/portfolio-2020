import {FluidObject} from 'gatsby-image';

export interface IProps {
	image: FluidObject;
	title: {
		text: string;
		type: string;
	};
	content: string;
	link: {
		to: string;
		text: string;
		title?: boolean;
	};
	align: string;
	date?: Date;
	tags: string;
	button?: boolean;
}

export interface IShowcase {
	align: string;
	opacity?: number;
	show?: Boolean;
}
