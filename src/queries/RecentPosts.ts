import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';

export const RecentPostsFragment = graphql`
	fragment RecentPostsFragment on MarkdownRemarkConnection {
		nodes {
			frontmatter {
				title
				featured_image {
					childImageSharp {
						fluid(maxWidth: 400) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
				tags
			}
			fields {
				slug
			}
			excerpt(truncate:true)
		}
	}
`;

export interface IRecentPostsProps {
	nodes: [{
		frontmatter: {
			title: string;
			featured_image: {
				childImageSharp: {
					fluid: FluidObject;
				}
			};
			tags: string;
		}
		fields: {
			slug: string;
		}
		excerpt: string;
	}]
}
