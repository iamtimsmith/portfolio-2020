import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {ISeoProps} from './seo.i';

export const SEO = ({title, description, image, slug}: ISeoProps) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					siteUrl
				}
			}
			file(name: {eq: "timsmith-social"}) {
				publicURL
			}
		}
	`);

	return (
		<Helmet htmlAttributes={{lang: `en`}}>
			<title>{`${title} | ${data.site.siteMetadata.title}`}</title>
			<meta name='description' content={description || data.site.siteMetadata.description} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@iam_timsmith' />
			<meta name='og:title' content={title} />
			<meta name='og:description' content={description || data.site.siteMetadata.description} />
			<meta name='og:image' content={image || data.file.publicURL} />
			<meta name='og:type' content='website' />
			<meta name='og:url' content={`${data.site.siteMetadata.siteUrl}/${slug}`} />
			<meta name='og:site_name' content={data.site.siteMetadata.title} />
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	image: PropTypes.string,
	slug: PropTypes.string,
}
