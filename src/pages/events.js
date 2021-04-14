import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import EventsListIndex from '../components/eventsListIndex';
import CopyWithCTA from '../components/copyWithCTA';
import EventHero from '../components/eventHero';

export default function EventsIndex({ data }) {
    const { eventImage } = data;
    const content = {
        hero: {
            body: `Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit.`,
            heading: 'Events',
        },
        ctasection: {
            text:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
        },
        events: [
            {
                month: 'february',
                events: [
                    {
                        date: '24',
                        eventName: 'Event Name',
                        eventHeading: 'Event Heading',
                        body:
                            'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
                        link: 'event-template',
                    },
                    {
                        date: '31',
                        eventName: 'Event Name',
                        eventHeading: 'Event Heading',
                        body:
                            'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
                        link: 'event-template',
                    },
                ],
            },
            {
                month: 'march',
                events: [
                    {
                        date: '24',
                        eventName: 'Event Name',
                        eventHeading: 'Event Heading',
                        body:
                            'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
                        link: 'event-template',
                    },
                    {
                        date: '31',
                        eventName: 'Event Name',
                        eventHeading: 'Event Heading',
                        body:
                            'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
                        link: 'event-template',
                    },
                ],
            },
        ],
    };

    return (
        <Layout>
            <EventHero image={eventImage} />
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <EventsListIndex events={content.events} />{' '}
            <CopyWithCTA
                content={content.ctasection}
                hasBottomGradient
                hasTopTransition
            />
        </Layout>
    );
}

export const query = graphql`
    query EventsIndexQuery {
        eventImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

EventsIndex.propTypes = {
    data: PropTypes.shape({
        eventImage: PropTypes.object.isRequired,
    }).isRequired,
};
