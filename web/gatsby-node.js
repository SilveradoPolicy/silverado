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

        createPage({
            path,
            component: require.resolve('./src/templates/pillar-template.js'),
            context: { id },
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    await createPillarPages(graphql, actions);
};
