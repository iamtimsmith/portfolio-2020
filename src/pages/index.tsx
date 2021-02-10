import React from 'react';
import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';
import {Layout, Hero, SectionTitle, Summary, Row, Showcase} from 'components';
import {
	RecentPostsFragment,
	IRecentPostsProps,
	RecentProjectsFragment,
	IRecentProjectsProps,
	HeroImageFragment,
	IHeroImageProps
} from 'queries';

const IndexPage = ({data}: IProps) => {
	console.log(data);
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
			<React.Fragment>
				<SectionTitle
					title='Recent Projects'
					link={{href: '/projects', text: 'View All'}}
				/>
				{data.projects.nodes.map((project, key) => (
					<Showcase
						key={key}
						title={{text: project.frontmatter.title, type: `h3`}}
						content={project.html}
						link={{to: project.frontmatter.url, text: `Visit Site`}}
						image={project.frontmatter.featured_image.childImageSharp.fluid}
						align={key % 2 === 0 ? `right` : `left`}
						date={{date: project.fields.date, year: true}}
						tags={project.frontmatter.tags}
					/>
				))}
			</React.Fragment>
		</Layout>
	);
}

export default IndexPage;

export const query = graphql`
	query {
		heroImage: file(name: {eq:"timsmith-teal"}) {
			...HeroImageFragment
		}
		recentPosts: allMarkdownRemark(
			filter:{fileAbsolutePath:{regex:"/blog/ig"}}
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
`;

export interface IProps {
	data: {
		heroImage: IHeroImageProps;
		recentPosts:IRecentPostsProps;
		projects: IRecentProjectsProps;
	};
}
