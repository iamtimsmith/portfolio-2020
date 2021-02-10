import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';

export const BlogPageFragment = graphql`
	fragment BlogPageFragment on MarkdownRemarkConnection {
		nodes {
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
      excerpt
    }
	}
`;

export interface IBlogPageProps {
	data: {
		blog: {
			nodes: [{
				frontmatter: {
					title: string;
					descriptions: string;
					tags: string;
					featured_image: {
						childImageSharp: {
							fluid: FluidObject;
						}
					}
				}
				fields: {
					date: Date;
					slug: string;
				}
				excerpt: string;
			}]
		}
	}
}
