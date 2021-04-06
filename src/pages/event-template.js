import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import EventHero from '../components/event/eventHero';
import EventSubHero from '../components/event/eventSubHero';
import EventSpeakers from '../components/event/eventSpeakers';
import CopyWithCTA from '../components/copyWithCTA';

const content = {
    hero: {
        body: `Event Date | Event Time | Location`,
        heading: 'Event Title',
    },
    subHero: {
        body:
            'Ut eu felis ac turpis viverra sollicitudin eget sed velit. Nunc eu nibh massa. Etiam lobortis mi eget nisi pellentesque venenatis. Sed luctus ullamcorper libero. Donec luctus pulvinar ultrices. Morbi luctus ut lacus id volutpat. Duis id velit tempor, varius metus sit amet, viverra massa.',
        list: {
            heading: 'agenda',
            items: [
                '0:00 - Sed luctus ullamcorper libero',
                '0:00 - Sed luctus ullamcorper libero',
                '0:00 - Sed luctus ullamcorper libero',
                '0:00 - Sed luctus ullamcorper libero',
                '0:00 - Sed luctus ullamcorper libero',
            ],
        },
    },
    ctasection: {
        heading: 'Interested in attending?',
        text:
            'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
        cta: {
            link: '#',
            text: 'register',
        },
    },
};

export default function EventTemplate({ data }) {
    const { dimitri } = data;

    const speakers = [
        {
            image: dimitri,
            fullName: 'First Last',
        },
        {
            image: dimitri,
            fullName: 'First Last',
        },
        {
            image: dimitri,
            fullName: 'First Last',
        },
        {
            image: dimitri,
            fullName: 'First Last',
        },
    ];

    // const sponsors = [data.dimitri, data.dimitri, data.dimitri, dimitri];
    return (
        <Layout>
            <EventHero
                body={content.hero.body}
                heading={content.hero.heading}
            />
            <EventSubHero data={content.subHero} />
            <EventSpeakers speakers={speakers} sponsor={dimitri} />
            <CopyWithCTA
                content={content.ctasection}
                hasBottomGradient
                hasHeading
            />
        </Layout>
    );
}

export const query = graphql`
    query EventQuery {
        dimitri: file(relativePath: { regex: "/dmitriSquare/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
    }
`;

EventTemplate.propTypes = {
    data: PropTypes.object.isRequired,
};
