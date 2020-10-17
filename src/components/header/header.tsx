import React from 'react';
import {Link} from 'gatsby';
import {Navbar, Container, Logo, Nav} from './header.style';

export const Header = () => {
	return (
		<Navbar>
			<Container>
				<Logo show={true}>
					<Link to='/'>Tim Smith</Link>
				</Logo>
				<Nav>
					<Link to='/projects'>Projects</Link>
					<Link to='/blog'>Blog</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
