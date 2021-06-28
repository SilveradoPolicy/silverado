import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';
import EventHero from '../components/eventHero';
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

    query EventPreviewTemplateQuery {
        sanityEventIndexPage {
            featuredEvent {
                dateAndTime
                description
                place
                registrationUrl
                subtitle
                title
            }
            heroImage {
                ...SanityImage
            }
        }

        eventImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        events: allSanityEvent {
            edges {
                node {
                    categories {
                        id
                        color
                    }
                    ctaBody
                    dateAndTime
                    description
                    heroImage {
                        ...SanityImage
                    }
                    place
                    slug {
                        current
                    }
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

const EventHeading = styled.h3`
    ${tw`container text-brand-1 text-ts-h3`}
`;

export default function EventPreviewTemplate({ data }) {
    const {
        allSanityCategory: { edges: filtersArray },
        eventImage,
        events: { edges },
        sanityEventIndexPage,
    } = data;

    return (
        <Layout hasBackgroundColor>
            <EventHero data={sanityEventIndexPage} image={eventImage} />
            <EventHeading>Events</EventHeading>
            <BlogPostList blogposts={edges} filters={filtersArray} />
        </Layout>
    );
}

EventPreviewTemplate.propTypes = {
    data: PropTypes.shape({
        allSanityCategory: PropTypes.object.isRequired,
        eventImage: PropTypes.object.isRequired,
        events: PropTypes.object.isRequired,
        sanityEventIndexPage: PropTypes.object.isRequired,
    }).isRequired,
};
