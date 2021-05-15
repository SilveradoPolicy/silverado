import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import NewsIndexHero from '../components/newsIndexHero';
import BlogPostList from '../components/blogPostList';

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

    query NewsIndexQuery {
        newsImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allSanityPost(sort: { order: DESC, fields: publishDate }) {
            edges {
                node {
                    author
                    categories {
                        color
                        id
                        name
                    }
                    description
                    heroImage {
                        ...SanityImage
                    }
                    id
                    publishDate
                    title
                    slug {
                        current
                    }
                }
            }
        }
        allSanityCategory {
            edges {
                node {
                    color
                    id
                    name
                }
            }
        }
    }
`;
export default function NewsIndex({ data }) {
    const {
        newsImage,
        allSanityCategory: { edges: filters },
        allSanityPost: { edges: postsArray },
    } = data;

    const content = {
        newsEvent: {
            image: newsImage,
            heading: 'Big Feature News Title Second Line',
            subheading: 'Vitaw egetas',
            body:
                ' Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula',
        },
    };

    return (
        <Layout>
            <NewsIndexHero newsEventInfo={content.newsEvent} />
            <BlogPostList blogposts={postsArray} filters={filters} />
        </Layout>
    );
}

NewsIndex.propTypes = {
    data: PropTypes.shape({
        allSanityCategory: PropTypes.object.isRequired,
        allSanityPost: PropTypes.array.isRequired,
        newsImage: PropTypes.object.isRequired,
    }).isRequired,
};
