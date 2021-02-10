import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Layout, PageTitle, Showcase, Row, Summary} from 'components';
import {BlogPageFragment, IBlogPageProps} from 'queries';

const BlogPage = ({data}: IBlogPageProps) => {
	return (
		<Layout>
			<PageTitle title='Blog' />
			<Showcase
				title={{text: data.blog.nodes[0].frontmatter.title, type: `h2`}}
				content={data.blog.nodes[0].excerpt}
				image={data.blog.nodes[0].frontmatter.featured_image.childImageSharp.fluid}
				date={{date: data.blog.nodes[0].fields.date, year: false}}
				tags={data.blog.nodes[0].frontmatter.tags}
				link={{to: data.blog.nodes[0].fields.slug, text: `Read More`, title: true, image: true}}
				align='right'
			/>
			<Row>
				{data.blog.nodes.map((post, id) => {
					if (id > 0) return (
						<Summary
							title={post.frontmatter.title}
							content={post.excerpt}
							image={post.frontmatter.featured_image.childImageSharp.fluid}
							tags={post.frontmatter.tags.split(`, `)}
							link={{
								href: post.fields.slug,
								text: post.frontmatter.title
							}}
						/>
					);
				})}
			</Row>
		</Layout>
	);
};

BlogPage.propTypes = {
	data: PropTypes.object,
};

export const query = graphql`
query Blog {
	blog: allMarkdownRemark(
    filter:{fileAbsolutePath: {regex:"/blog/i"}}
    sort:{fields:fields___date, order: DESC}
  ) {
    ...BlogPageFragment
  }
}`;

export default BlogPage;
