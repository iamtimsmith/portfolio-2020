import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';
import {Layout, Showcase, PageTitle} from 'components';

const ProjectsPage = ({data}: IProps) => {
	return (
		<Layout>
			<PageTitle title='Projects' />
			{data.projects.nodes.map((project, id: number) => (
				<Showcase
					id={id}
					key={id}
					title={{text: project.frontmatter.title, type: `h2`}}
					image={project.frontmatter.featured_image.childImageSharp.fluid}
					date={project.fields.date}
					content={project.html}
					tags={project.frontmatter.tags}
					link={{to: project.frontmatter.url, text: `Visit Site`}}
					align={id % 2 === 0 ? `right` : `left`}
				/>
			))}
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
			nodes {
				fileAbsolutePath
				timeToRead
				frontmatter {
					title
					url
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
				}
				html
			}
		}
	}
`;

export interface IProps {
	data: {
		projects: {
			nodes: [{
				fileAbsolutePath: string;
				timeToRead: number;
				frontmatter: {
					title: string;
					url: string;
					tags: string;
					featured_image: {
						childImageSharp: {
							fluid: FluidObject;
						}
					}
				}
				fields: {
					date: Date;
				}
				html: string;
			}]
		}
	}
}

export default ProjectsPage;
