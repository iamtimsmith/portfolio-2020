import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Layout, FeaturedImage, SectionTitle, Row, Summary} from 'components';
import {BlogPostFragment, IBlogPostProps, RecentPostsFragment, IRecentPostsProps} from 'queries';

const PostTemplate = ({data}: IProps) => {
	const {frontmatter, html, excerpt, fields} = data.post;

	return (
		<Layout>
			<FeaturedImage fluid={frontmatter.featured_image.childImageSharp.fluid} alt={frontmatter.title} />
			<h1>{frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{__html: html}} />
			<SectionTitle title='Recent Blog Posts' />
			{/* <Row>
				{data.recent.nodes.map((post, key) => (
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
			</Row> */}
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
			...BlogPostFragment
		}
	}
`;

export interface IProps {
	data: {
		post: IBlogPostProps;
		recent: IRecentPostsProps;
	}
}
