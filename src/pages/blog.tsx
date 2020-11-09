import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';
import {Layout, PageTitle, Showcase, Row, Summary} from 'components';

const BlogPage = ({data}: IProps) => {
	return (
		<Layout>
			<PageTitle title='Blog' />
			<Showcase
				title={{text: data.blog.nodes[0].frontmatter.title, type: `h2`}}
				content={data.blog.nodes[0].excerpt}
				image={data.blog.nodes[0].frontmatter.featured_image.childImageSharp.fluid}
				date={{date: data.blog.nodes[0].fields.date, year: false}}
				tags={data.blog.nodes[0].frontmatter.tags}
				link={{to: data.blog.nodes[0].fields.slug, text: `Read More`, title: true}}
				align='left'
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
}`;

export interface IProps {
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

export default BlogPage;
