import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';
import EventHero from '../components/eventHero';
import BlogPostList from '../components/blogPostList';

const EventHeading = styled.h3`
    ${tw`container text-brand-1 text-ts-h3`}
`;

export default function EventPreviewTemplate({ data }) {
    const { eventImage } = data;

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
    };

    const blogposts = [
        {
            image: eventImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            time: '12:30pm',
            place: 'Walt Disney World',
            eventdate: 'May 23, 2021',
        },
        {
            image: eventImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
        {
            image: eventImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
    ];
    return (
        <Layout>
            <EventHero data={content.card} image={eventImage} />
            <EventHeading>Events</EventHeading>
            <BlogPostList blogposts={blogposts} />
        </Layout>
    );
}

export const query = graphql`
    query EventPreviewTemplateQuery {
        eventImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

EventPreviewTemplate.propTypes = {
    data: PropTypes.shape({
        eventImage: PropTypes.object.isRequired,
    }).isRequired,
};
