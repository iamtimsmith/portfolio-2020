import React from 'react';
import {graphql} from 'gatsby';
import {FluidObject} from 'gatsby-image';
import {Layout, Hero, SectionTitle} from 'components';

const IndexPage = ({data}: IProps) => {
	return (
		<Layout>
			<Hero
				title={`Hi, my name is <strong>Tim Smith</strong> and I'm a <strong>developer</strong>`}
				content={`I build back-ends using PHP and Node js with frameworks such as Laravel and Express js. I use React js, Wordpress, Blade, Pug, and more to build enjoyable user experiences on the front-end.`}
				image={data.file.childImageSharp.fluid}
			/>
			<SectionTitle
				title='Recent Blog Posts'
				link={{href: '/blog', text: 'View All'}}
			/>
		</Layout>
	);
}

export default IndexPage;

export const query = graphql`
	query {
		file(name: {eq:"timsmith-teal"}) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;

export interface IProps {
	data: {
		file: {
			childImageSharp: {
				fluid: FluidObject;
			}
		}
	}
}
