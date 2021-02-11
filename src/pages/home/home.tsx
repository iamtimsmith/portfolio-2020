import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Layout, Hero, SectionTitle, Summary, Row, Showcase} from 'components';
import './home.data';

export const HomePage = () => {
	const data = useStaticQuery(graphql`
		query {
			heroImage: file(name: {eq:"timsmith-teal"}) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			recentPosts: allMarkdownRemark(
				filter:{fileAbsolutePath:{regex:"/blog/ig"}, frontmatter:{published:{eq:true}}}
				sort:{fields:fields___date, order:DESC}
				limit:3
			) {
				...RecentPostsFragment
			}
			projects: allMarkdownRemark(
				filter:{fileAbsolutePath:{regex:"/projects/ig"}}
				sort:{fields:fields___date, order:DESC}
				limit:3
			) {
				...RecentProjectsFragment
			}
		}
	`)

	return (
		<Layout>
			<Hero
				title={`Hi, my name is <strong>Tim Smith</strong> and I'm a <strong>developer</strong>`}
				content={`I build back-ends using PHP and Node js with frameworks such as Laravel and Express js. I use React js, Wordpress, Blade, Pug, and more to build enjoyable user experiences on the front-end.`}
				image={data.heroImage.childImageSharp.fluid}
			/>
		</Layout>
	);
}
