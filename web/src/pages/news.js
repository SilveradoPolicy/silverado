import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import NewsIndexHero from '../components/newsIndexHero';
import BlogPostList from '../components/blogPostList';

export const query = graphql`
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
                        asset {
                            fluid(maxWidth: 500) {
                                ...GatsbySanityImageFluid
                            }
                            id
                        }
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
        allSanityCategory: { edges: filters },
        allSanityPost: { edges: postsArray },
        sanityNewsIndexPage: { featuredNewsItem },
    } = data;

    // const content = {
    //     newsEvent: {
    //         image: newsImage,
    //         title: 'Big Feature News Title Second Line',
    //         author: 'Vitaw egetas',
    //         publishDate: '12/1/12',
    //         description:
    //             ' Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula',
    //     },
    // };

    return (
        <Layout>
            <NewsIndexHero newsEventInfo={featuredNewsItem} />
            <BlogPostList blogposts={postsArray} filters={filters} />
        </Layout>
    );
}

NewsIndex.propTypes = {
    data: PropTypes.shape({
        allSanityCategory: PropTypes.object.isRequired,
        sanityNewsIndexPage: PropTypes.object.isRequired,
        allSanityPost: PropTypes.array.isRequired,
    }).isRequired,
};
