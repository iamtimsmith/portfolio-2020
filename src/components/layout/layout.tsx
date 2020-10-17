import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'components';
import {GlobalStyles} from 'styles';
import {Container} from './layout.style';
import {ILayout} from './layout.i';

export const Layout = ({children}: ILayout) => {
	return (
		<Container>
			<GlobalStyles />
			<Header />
			{children}
		</Container>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}
