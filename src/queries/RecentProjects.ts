import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';

export const RecentProjectsFragment = graphql`
	fragment RecentProjectsFragment on MarkdownRemarkConnection {
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
				url
			}
			fields {
				date(formatString: "YYYY")
			}
			html
		}
	}
`;

export interface IRecentProjectsProps {
	nodes: [{
		frontmatter: {
			title: string;
			featured_image: {
				childImageSharp: {
					fluid: FluidObject;
				}
			};
			tags: string;
			url: string;
		}
		fields: {
			date: Date;
		}
		html: string;
	}]
}
