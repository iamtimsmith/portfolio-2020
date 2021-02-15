module.exports = {
  siteMetadata: {
    title: `Tim Smith`,
    siteUrl: 'https://www.iamtimsmith.com',
    description: `Tim Smith is a full-stack developer and web designer focused on making the web a more enjoyable place to be`,
    author: `@gatsbyjs`,
  },
  plugins: [
		`gatsby-alias-imports`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				gfm: true,
				plugins: [
					{
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'pre-title',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: true,
							classPrefix: `language-`,
            },
          },
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1400,
							linkImagesToOriginal: false,
							showCaptions: true,
							withWebp: true,
						},
					},
				],
			},
		},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/timsmith-teal.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
