import {graphql} from 'gatsby';

export default graphql`
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
			excerpt
		}
	}

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
`
