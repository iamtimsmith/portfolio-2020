import React from 'react';
import {Link} from 'gatsby';
import {Navbar, Container, Logo, Nav} from './header.style';

export const Header = () => {
	return (
		<Navbar>
			<Container>
				<Logo to='/' show={true}>Tim Smith</Logo>
				<Nav>
					<Link to='/projects'>Projects</Link>
					<Link to='/blog'>Blog</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
