import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import BlogHero from '../components/blogHero';
import BlogContent from '../components/blogContent';
import PillarCardList from '../components/pillarCardList';
import SEO from '../components/SEO';

export const query = graphql`
    fragment SanityImage on SanityMainImage {
        crop {
            _key
            _type
            top
            bottom
            left
            right
        }
        hotspot {
            _key
            _type
            x
            y
            height
            width
        }
        asset {
            _id
        }
    }

    query newsBlogTemplateQuery($categoryId: String!, $id: String!) {
        post: sanityPost(id: { eq: $id }) {
            author
            categories {
                color
                id
                name
            }
            heroImage {
                ...SanityImage
            }
            id
            publishDate
            seo {
                ogImage {
                    asset {
                        url
                    }
                }
                pageDescription
                pageTitle
            }
            subtitle
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
                        ...SanityImage
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
        post: {
            author,
            categories,
            description,
            heroImage,
            publishDate,
            seo,
            subtitle,
            title,
            _rawBody,
        },
        posts: { edges },
    } = data;

    const { color } = categories[0];
    const postData = {
        author,
        categories,
        publishDate,
        subtitle,
        title,
        _rawBody,
    };

    return (
        <Layout hasBackgroundColor>
            <SEO
                description={seo.pageDescription || description}
                image={seo.ogImage.asset.url}
                title={seo.pageTitle || title}
            />
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
