import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';

export const BlogPostFragment = graphql`
	fragment BlogPostFragment on MarkdownRemark {
		html
		excerpt
		frontmatter {
			title
			description
			tags
			featured_image {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
		fields {
			date
			slug
		}
	}
`;

export interface IBlogPostProps {
	html: string;
	excerpt: string;
	frontmatter: {
		title: string;
		description: string;
		tags: string;
		featured_image: {
			childImageSharp: {
				fluid: FluidObject;
			}
		}
	};
	fields: {
		date: Date;
		slug: string;
	};
}
