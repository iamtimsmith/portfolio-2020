import {useStaticQuery, graphql} from 'gatsby';

export const useBlogQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			blog: allMarkdownRemark(filter:{fileAbsolutePath: {regex:"/blog/i"}} sort:{fields:fields___date, order: DESC}) {
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
		}
	`);

	return data;
}
