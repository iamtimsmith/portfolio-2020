import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {Link} from 'components';
import {Section, Copy, Content, Figure} from './hero.style';
import {IHero} from './hero.i';


export const Hero = ({title, content, image}: IHero) => {
	return (
		<Section data-testid='hero'>
			<Content>
				<Copy>
					<h1 dangerouslySetInnerHTML={{__html: title}} />
					<p>{content}</p>
					<Link to='#contact'>Get In Touch →</Link>
				</Copy>
				<Figure>
					<Img fluid={image} alt={title} />
				</Figure>
			</Content>
		</Section>
	);
}

Hero.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	image: PropTypes.object,
}
