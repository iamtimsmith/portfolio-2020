import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Layout, Showcase, PageTitle} from 'components';
import {ProjectsPageFragment, IProjectsPageProps} from 'queries';

const ProjectsPage = ({data}: IProjectsPageProps) => {
	return (
		<Layout>
			<PageTitle title='Projects' />
			<React.Fragment>
				{data.projects.nodes.map((project, id: number) => (
					<Showcase
						key={id}
						title={{text: project.frontmatter.title, type: `h2`}}
						image={project.frontmatter.featured_image.childImageSharp.fluid}
						date={{date: project.fields.date, year: true}}
						content={project.html}
						tags={project.frontmatter.tags}
						link={{to: project.frontmatter.url, text: `Visit Site`}}
						align={id % 2 === 0 ? `right` : `left`}
					/>
				))}
			</React.Fragment>
		</Layout>
	);
};

ProjectsPage.propTypes = {
	data: PropTypes.object,
};

export const query = graphql`
	query Projects {
		projects: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/projects/ig"}}
			sort:{fields:fields___date, order:DESC}
		) {
			...ProjectsPageFragment
		}
	}
`;

export default ProjectsPage;
