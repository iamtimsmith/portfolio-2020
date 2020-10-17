import React from 'react';
import {graphql} from 'gatsby';
import {FixedObject} from 'gatsby-image';
import {Layout, Hero} from 'components';

interface IProps {
	data: {
		file: {
			childImageSharp: {
				fixed: FixedObject;
			}
		}
	}
}

const IndexPage = ({data}: IProps) => {
	return (
		<Layout>
			<Hero
				title={`Hi, my name is <strong>Tim Smith</strong> and I'm a <strong>developer</strong>`}
				content={`I build back-ends using PHP and Node js with frameworks such as Laravel and Express js. I use React js, Wordpress, Blade, Pug, and more to build enjoyable user experiences on the front-end.`}
				image={data.file.childImageSharp.fixed}
			/>
		</Layout>
	);
}

export const query = graphql`
	query {
		file(name: {eq:"timsmith-teal"}) {
			childImageSharp {
				fixed(width: 600) {
					...GatsbyImageSharpFixed_withWebp_noBase64
				}
			}
		}
	}
`;

export default IndexPage;
