import React from 'react';
import PropTypes from 'prop-types';
import {A, GatsbyLink} from './link.style';
import {IProps} from './link.i';

export const Link = ({to, children}: IProps) => {
	if (to.indexOf(`://`) >= 0) return (
		<A href={to} target='_blank' rel='noopener nofollow'>{children}</A>
	);
	return <GatsbyLink to={to}>{children}</GatsbyLink>
}

Link.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node,
}
