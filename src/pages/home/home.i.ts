import {FluidObject} from 'gatsby-image';

export interface IProps {
	data: {
		heroImage: IHeroImageProps;
		recentPosts:IRecentPostsProps;
		projects: IRecentProjectsProps;
	};
}

export interface IHeroImageProps {
	childImageSharp: {
		fluid: FluidObject;
	}
};

export interface IRecentPostsProps {
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

export interface IRecentProjectsProps {
	nodes: [{
		frontmatter: {
			title: string;
			featured_image: {
				childImageSharp: {
					fluid: FluidObject;
				}
			};
			tags: string;
			url: string;
		}
		fields: {
			date: Date;
		}
		html: string;
	}]
}
