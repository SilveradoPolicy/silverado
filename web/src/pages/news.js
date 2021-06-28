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
        sanityNewsIndexPage {
            featuredNewsItem {
                id
                description
                author
                heroImage {
                    asset {
                        fluid(maxWidth: 1500) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                title
                publishDate
                slug {
                    current
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

        allSanityEvent(sort: { order: ASC, fields: dateAndTime }) {
            edges {
                node {
                    description
                    id
                    slug {
                        current
                    }
                    subtitle
                    title
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
        allSanityCategory: { edges: filters },
        allSanityEvent: { edges: events },
        allSanityPost: { edges: postsArray },
        sanityNewsIndexPage: { featuredNewsItem },
    } = data;

    const { id } = featuredNewsItem[0];

    const filteredPosts = postsArray.filter((item) => item.node.id !== id);

    return (
        <Layout>
            <NewsIndexHero
                featuredNewsItem={featuredNewsItem}
                events={events}
            />
            <BlogPostList blogposts={filteredPosts} filters={filters} />
        </Layout>
    );
}

NewsIndex.propTypes = {
    data: PropTypes.shape({
        allSanityCategory: PropTypes.object.isRequired,
        allSanityEvent: PropTypes.object.isRequired,
        sanityNewsIndexPage: PropTypes.object.isRequired,
        allSanityPost: PropTypes.array.isRequired,
    }).isRequired,
};
