import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import BlogHero from '../components/blogHero';
import BlogContent from '../components/blogContent';
import PillarCardList from '../components/pillarCardList';

export const query = graphql`
    query newsBlogTemplateQuery($categoryId: String!, $id: String!) {
        post: sanityPost(id: { eq: $id }) {
            categories {
                color
                id
                name
            }
            heroImage {
                asset {
                    fluid(maxWidth: 2000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            id
            title
            _rawBody(resolveReferences: { maxDepth: 10 })
        }
        posts: allSanityPost(
            filter: { categories: { elemMatch: { id: { eq: $categoryId } } } }
        ) {
            edges {
                node {
                    categories {
                        id
                        color
                    }
                    description
                    heroImage {
                        asset {
                            fluid(maxWidth: 500) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                    slug {
                        current
                    }
                    title
                }
            }
        }
    }
`;

export default function BlogTemplate({ data }) {
    const {
        post: { categories, heroImage, title, _rawBody },
        posts: { edges },
    } = data;

    const { color } = categories[0];
    const postData = { categories, title, _rawBody };

    return (
        <Layout hasBackgroundColor>
            <BlogHero color={color} image={heroImage} />
            <BlogContent data={postData} />
            <PillarCardList list={edges} />
        </Layout>
    );
}
BlogTemplate.propTypes = {
    data: PropTypes.shape({
        post: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
    }).isRequired,
};
