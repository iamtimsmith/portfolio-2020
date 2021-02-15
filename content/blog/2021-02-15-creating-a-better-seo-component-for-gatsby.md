---
title: Creating a better SEO component for Gatsby sites
tags: '#react'
featured_image: ../images/2021/using-the-pug-templating-engine-part-4.jpg
keywords: 'gatsby, react, seo'
description: "Pug allows you to use inheritance to create a layout for the frontend and then insert blocks of data into the layout, causing a better developer experience."
published: true
---

When you create a new project using the default starter for Gatsby, it gives you an SEO component with some basic contents. This is good for simple things such as a favicon, page title, and description. It leaves out other important pieces that can make a site even more optimized for both search engines and social sharing. In this post, I'll show you how to build a better SEO component which can help in marketing your Gatsby site. Let's get started!

## Importing the packages we need
When creating the file for the SEO component, you should think about what you'll need the component to do. In this case, you will need the ability to create a react component, write jsx, insert information into the head of your page, and use graphql to get some data for default values. I will also be using the `prop-types` package to check for types on the incoming props.

```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
```

The packages above will accomplish all of the tasks I listed with flying colors. To handle the graphql query, I opted for the `useStaticQuery` hook rather than the `StaticQuery` component. That's just personal preference though, either will work just fine. Next you will create a basic component with some hard-coded data to make sure the component is working.

## Creating a hard-coded component
In the basic version of the component, you will just be setting up the helmet element with a title and description. Then you can import it into a page and make sure you're seeing the hard-coded data in your page. Below is the code for the hard-coded component.

```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const SEO = () => {
	return (
		<Helmet>
			<title>This is a title</title>
			<meta name='description' content='This is  some content' />
		</Helmet>
	);
}

export default SEO;
```

Once the code in the SEO component is updated, you can import it into a file to make sure the title and description are changing for the page. There aren't any props to pass in yet, so it will just look like this:

```jsx:title=pages/index.js
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
	return (
		<Layout>
			<SEO />
			<h1>This is the index page</h1>
		</Layout>
	);
}

export default IndexPage;
```

## Making the title and description dynamic

Once the SEO component is imported and rendered, you should see that the title and description for the index page says "This is a title" and "This is  some content", respectively. That's pretty good, but it's not very dynamic. To fix that, you will add props for a title and description and use that to fill out the SEO component.

```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default SEO;
```

Now that you have props for title and description, you can pass those in from the index page. Update the code for the index page with the following code:

```jsx:title=pages/index.js
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
	return (
		<Layout>
			<SEO
				title='Home'
				description='This is the homepage for a gatsby website'
			/>
			<h1>This is the index page</h1>
		</Layout>
	);
}

export default IndexPage;
```

## Adding attributes to HTML element

You may want to add some elements to the html element for SEO purposes. This can be done using the `Helmet` component by adding an object with the desired attributes in the `htmlAttributes` prop. It is always a good idea to add a lang attribute to indicate the language in which the site is written. The modified code below shows how you can add attributes to the html element in the DOM.
```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description}) => {
	return (
		<Helmet htmlAttributes={{lang: `en`}}>
			<title>{title}</title>
			<meta name='description' content={description} />
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default SEO;
```

There are a [number of attributes you can add to the html element](https://www.w3schools.com/tags/ref_standardattributes.asp), all of which can be added this way. Once you have all the html attributes added that you want, it's time to customize the title a little bit more.

## Adding your first query to improve the page title

If you look at the title for your index page, it just says "Home". This is adequate, though you may want to put the site title in there so visitors know what site they're on. Here's where you need to start using queries to get data. Below, you can see the first query to get the site title and description from the `gatsby-config.js`	file. This is where I will be pulling data from, though you could query WordPress data, Ghost data, or any other source. Below is the component with the query being performed through a hook. The [documentation](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/) will also show how to use the StaticQuery component to achieve the same result.

```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description}) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);

	return (
		<Helmet htmlAttributes={{lang: `en`}}>
			<title>{`${title} | ${data.site.siteMetadata.title}`}</title>
			<meta name='description' content={description || data.site.siteMetadata.description} />
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default SEO;
```

Using the code above, you have a title that displays in a format like "Page Title | Site Name" and provides a fallback description in the event that none is provided by the page. Now that you have the title and description taken care of, it's time to focus on social media sharing.

## Adding social sharing cards

Have you ever shared a link on social media and felt disappointed when it didn't pop up with a photo, title, and excerpt? I know I have, so I want to make sure that doesn't happen when someone shares a page of mine. To do this, you need to add both twitter tags and OG tags.

<video src='https://media.giphy.com/media/L1Byye4j6sBSkqJTul/giphy.mp4' autoplay loop muted playsinline></video>

### Adding Twitter cards
When setting up up your webpage to be shared on social media sites, there are a few different "categories" of meta tags you need to know about. The first is "twitter". [According to the Twitter docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started), it will look for twitter tags first and fall back to OG tags if none are found so we will set those up first.

```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description}) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);

	return (
		<Helmet htmlAttributes={{lang: `en`}}>
			<title>{`${title} | ${data.site.siteMetadata.title}`}</title>
			<meta name='description' content={description || data.site.siteMetadata.description} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@iam_timsmith' />
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default SEO;
```

The 2 additional lines of code above establish what [type of card you want to display](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) when the page is shared as well as what the twitter site is for the website creator.

### Adding OpenGraph tags
The next meta tags to add are called OpenGraph, or OG, tags which will provide the data for social media sites to generate the cards when your content is shared. To do this, you need to add another prop for an image and, like the title and description, add a query to get a fallback image for use if none is provided. In addition, I will include a base url from the `gatsby-config.js` file and add a prop to pass in a slug for the currently shared page.

```jsx:title=components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description}) => {
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
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	slug: PropTypes.string,
}

export default SEO;
```
