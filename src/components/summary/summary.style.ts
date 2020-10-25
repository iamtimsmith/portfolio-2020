import styled from "styled-components";
import {media} from 'styles';
import {Link} from 'components/link/link';
import {ITitle} from './summary.i';

export const Row = styled.div`
	display: grid;
	grid-template-columns: 100%;
	justify-content: space-between;

	${media.desktop} {
		grid-template-columns: 31% 31% 31%;
	}
`;

export const Article = styled.article`
	position: relative;

	> a:hover + h2 a {
		background-position: 0px 100%;
	}
`;

export const Content = styled.p`
	margin: 20px 0 10px;
`;

export const Tags = styled.p`
	font-size: 1.4rem;
	span {
		display: inline-block;
		background: var(--mid-light);
		color: var(--dark);
		padding: 0 5px;
		margin: 0 5px;
		opacity: 0.6;
		&:first-child {
			margin-left: 0;
		}
	}
`;
