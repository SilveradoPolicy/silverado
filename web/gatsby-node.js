/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Create pillar pages
async function createPillarPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityPillar(filter: { slug: { current: { ne: "null" } } }) {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                        categories {
                            categoryId: id
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const pillarEdges = (result.data.allSanityPillar || {}).edges || [];

    pillarEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `${slug.current}`;
        const { categoryId } = edge.node.categories[0];

        createPage({
            path,
            component: require.resolve('./src/templates/pillar-template.js'),
            context: { id, categoryId },
        });
    });
}

// create news/blog pages
async function createNewsBlogPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const postEdges = (result.data.allSanityPost || {}).edges || [];

    postEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/news/${slug.current}`;

        createPage({
            path,
            component: require.resolve('./src/templates/blog-template.js'),
            context: { id },
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    await createPillarPages(graphql, actions);
    await createNewsBlogPages(graphql, actions);
};
