import React from 'react';
import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';
import {Layout, Hero, SectionTitle, Summary, Row} from 'components';

const IndexPage = ({data}: IProps) => {

	return (
		<Layout>
			<Hero
				title={`Hi, my name is <strong>Tim Smith</strong> and I'm a <strong>developer</strong>`}
				content={`I build back-ends using PHP and Node js with frameworks such as Laravel and Express js. I use React js, Wordpress, Blade, Pug, and more to build enjoyable user experiences on the front-end.`}
				image={data.heroImage.childImageSharp.fluid}
			/>
			<SectionTitle
				title='Recent Blog Posts'
				link={{href: '/blog', text: 'View All'}}
			/>
			<Row>
				{data.recentPosts.nodes.map((post, key) => (
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
}

export default IndexPage;

export const query = graphql`
	query {
		heroImage: file(name: {eq:"timsmith-teal"}) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
		recentPosts: allMarkdownRemark(
			filter:{fileAbsolutePath:{regex:"/blog/ig"}}
			sort:{fields:fields___date, order:DESC}
			limit:3
		) {
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
	}
`;

export interface IProps {
	data: {
		heroImage: {
			childImageSharp: {
				fluid: FluidObject;
			}
		}
		recentPosts: {
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
	};
}
