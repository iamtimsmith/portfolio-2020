import styled from 'styled-components';
import {Link} from 'gatsby';
import {media} from 'styles';
import {ILogo} from './header.i';

export const Navbar = styled.header`
	position: relative;
	z-index: 9999;
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
`;

export const Logo = styled(Link)<ILogo>`
	background: none !important;
	visibility: ${props => props.show ? `visible` : `hidden`};
	font-size: 3.6rem;
	font-weight: 800;
	text-transform: uppercase;
	cursor: pointer;

	&:after {
		display: none;
	}
`;

export const Nav = styled.nav`
	display: none;
	${media.desktop} {
		display: block;
	}

	a {
		margin: 0 10px;
		display: inline-block;
		line-height: 1.2;
	}
`;
