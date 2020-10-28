import styled from 'styled-components';
import {IShowcase} from './showcase.i';
import {media, button} from 'styles';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 50px 0;
	margin: 0 auto;

	${media.widescreen} {
		flex-direction: row;
		padding: 100px 0;
	}
`;

export const Image = styled.figure<IShowcase>`
	position: relative;
	flex: 3;
	order: 1;
	margin: 0;

	${media.desktop} {
		min-height:100%;
		order: ${props => props.align === 'left' ? 2 : 1};
	}
`;

export const Content = styled.article<IShowcase>`
	position: relative;
	text-align: left;
	flex: 2;
	order: 2;
	padding: 15px;
	position: relative;
	${props => props.align}: -30px;
	opacity: 0;
	transition: all 0.75s;

	${props => props.show ? `
		${props.align}: 0;
		opacity: 1;
	` : ``}

	${media.desktop} {
		order: ${props => props.align === 'left' ? 1 : 2};
		text-align: ${props => props.align};
	}

	small {
		margin: 0;
		font-weight: bold;
		color: var(--mid);
	}
	h2, h3 {
		margin: 0;
	}
`;

export const Button = styled.a``;

export const Markdown = styled.div`
	color: var(--grey-900);
	margin: 30px 0;
`;

export const Tags = styled.p`
	color: var(--grey-300);
	margin: 0;
`;
