import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';

export const ProjectsPageFragment = graphql`
	fragment ProjectsPageFragment on MarkdownRemarkConnection {
		nodes {
			fileAbsolutePath
			timeToRead
			frontmatter {
				title
				url
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
			}
			html
		}
	}
`;

export interface IProjectsPageProps {
	data: {
		projects: {
			nodes: [{
				fileAbsolutePath: string;
				timeToRead: number;
				frontmatter: {
					title: string;
					url: string;
					tags: string;
					featured_image: {
						childImageSharp: {
							fluid: FluidObject;
						}
					}
				}
				fields: {
					date: Date;
				}
				html: string;
			}]
		}
	}
}
