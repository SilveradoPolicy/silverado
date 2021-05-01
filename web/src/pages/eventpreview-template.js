import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';
import EventHero from '../components/eventHero';
import BlogPostList from '../components/blogPostList';

// Todo: Need to update allPosts query to allEvents once events are in sanity

export const query = graphql`
    query EventPreviewTemplateQuery {
        eventImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        posts: allSanityPost {
            edges {
                node {
                    categories {
                        id
                        color
                    }
                    description
                    slug {
                        current
                    }
                    title
                    heroImage {
                        asset {
                            fluid(maxWidth: 500) {
                                ...GatsbySanityImageFluid
                            }
                        }
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

const EventHeading = styled.h3`
    ${tw`container text-brand-1 text-ts-h3`}
`;

export default function EventPreviewTemplate({ data }) {
    const {
        allSanityCategory: { edges: filtersArray },
        eventImage,
        posts: { edges },
    } = data;

    const content = {
        card: {
            title: 'Big Featured Event Title Second Line',
            subtitle: 'Subtitle',
            date: 'Someday 01, 2021',
            time: '2:30PM',
            place: 'My House',
            description:
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi malesuada lectus quis scelerisque gravida. Vestibulum feugiat consectetur porta. Donec eleifend enim ac enim varius tincidunt. Morbi pharetra urna dignissim, lobortis diam sit amet, faucibus lectus. Vivamus vulputate massa risus, ac tempor nisi sagittis eget.',
        },
        month: 'March',
    };

    return (
        <Layout hasBackgroundColor>
            <EventHero data={content.card} image={eventImage} />
            <EventHeading>Events</EventHeading>
            <BlogPostList
                blogposts={edges}
                filters={filtersArray}
                month={content.month}
            />
        </Layout>
    );
}

EventPreviewTemplate.propTypes = {
    data: PropTypes.shape({
        allSanityCategory: PropTypes.object.isRequired,
        eventImage: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
    }).isRequired,
};
