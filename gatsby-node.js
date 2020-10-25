const path = require(`path`);
const {createFilePath} = require('gatsby-source-filesystem');

const getSlug = filepath => {
	return filepath.split(`-`).splice(3).join(`-`).replace(/\.mdx?/ig, ``);
}

const getDate = filepath => {
	let filename = filepath.split(`-`).splice(0, 3).join(`-`);
	return new Date(filename);
}


exports.createPages = ({graphql, actions}) => {
	const {createPage} = actions;

	return graphql(`
		query {
			allMarkdownRemark(
				filter:{fileAbsolutePath:{regex:"/blog/ig"}}
			) {
				nodes {
					fileAbsolutePath
				}
			}
		}
	`).then(res => {
		if (res.errors) throw res.errors;
		res.data.allMarkdownRemark.nodes.forEach(node => {
			createPage({
				path: `/blog/${getSlug(node.fileAbsolutePath)}`,
				component: path.resolve(`src/templates/post.tsx`),
			});
		});
	});
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const path = getNode(node.parent).relativePath;

		createNodeField({
			node,
			name: `slug`,
			value: `/blog/${getSlug(path)}`
		});
		createNodeField({
			node,
			name: `date`,
			value: getDate(path)
		});
	}
}
