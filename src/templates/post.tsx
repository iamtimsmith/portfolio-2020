import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Layout, FeaturedImage, SectionTitle, Row, Summary, Content} from 'components';
import {IPost, IPostTemplate} from 'types';

const PostTemplate = ({data}: IPostTemplate) => {
	const {frontmatter, html} = data.post;

	return (
		<Layout>
			<FeaturedImage fluid={frontmatter.featured_image.childImageSharp.fluid} alt={frontmatter.title} />
			<h1>{frontmatter.title}</h1>
			<Content html={html} />
			<SectionTitle title='Recent Blog Posts' />
			<Row>
				{data.recent.nodes.map((post: IPost, key: number) => (
					<Summary
						key={key}
						title={post.frontmatter.title}
						content={post.excerpt}
						image={post.frontmatter.featured_image.childImageSharp.fluid}
						tags={post.frontmatter.tags.split(`, `)}
						link={{
							href: post.fields.slug,
							text: post.frontmatter.title
						}}
					/>
				))}
			</Row>
		</Layout>
	);
};

PostTemplate.propTypes = {
	data: PropTypes.object,
}

export default PostTemplate;

export const query = graphql`
	query PostQuery($slug: String!) {
		post: markdownRemark(fields:{slug:{eq: $slug}}) {
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
			html
		}
		recent: allMarkdownRemark(
			filter:{fileAbsolutePath: {regex:"/blog/i"} fields: {slug: {ne: $slug}}}
			sort:{fields:fields___date, order: DESC}
			limit: 3
		) {
			nodes {
				excerpt
				frontmatter {
					title
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
					slug
				}
			}
		}
	}
`;
