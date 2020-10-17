import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {Section, Copy, Content, Figure} from './hero.style';
import {IHero} from './hero.i';


export const Hero = ({title, content, image}: IHero) => {
	return (
		<Section aria-label='hero section'>
			<Content>
				<Copy>
					<h1 dangerouslySetInnerHTML={{__html: title}} />
					<p>{content}</p>
				</Copy>
				<Figure>
					<Img fixed={image} alt={title} />
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
