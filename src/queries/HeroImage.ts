import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';

export const HeroImageFragment = graphql`
	fragment HeroImageFragment on File {
		childImageSharp {
			fluid(maxWidth: 600) {
				...GatsbyImageSharpFluid_withWebp_noBase64
			}
		}
	}
`;

export interface IHeroImageProps {
	childImageSharp: {
		fluid: FluidObject;
	}
};
