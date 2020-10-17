import React from 'react';
import PropTypes from 'prop-types';
import {Header, Footer, Social} from 'components';
import {GlobalStyles} from 'styles';
import {Container} from './layout.style';
import {ILayout} from './layout.i';

export const Layout = ({children}: ILayout) => {
	return (
		<Container>
			<GlobalStyles />
			<Header />
			{children}
			<Social />
			<Footer />
		</Container>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}
