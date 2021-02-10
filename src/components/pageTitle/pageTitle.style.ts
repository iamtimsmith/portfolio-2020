import styled from "styled-components";
import {media} from 'styles';

export const Title = styled.header`
	position: relative;
	margin-bottom: -5px;

	h1 {
		font-size: 5rem;
		margin: 0;
		color: var(--grey-100);
		top: 0;
		${media.tablet} {
			font-size: 8rem;
		}
		${media.desktop} {
			position: absolute;
			font-size: 10rem;
		}
	}
`;
