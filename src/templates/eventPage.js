import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import EventHero from '../components/eventHero';

export default function EventPage({ data }) {
    const { eventImage } = data;

    return (
        <Layout>
            <EventHero image={eventImage} />
        </Layout>
    );
}

export const query = graphql`
    query EventPageQuery {
        eventImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

EventPage.propTypes = {
    data: PropTypes.shape({
        eventImage: PropTypes.object.isRequired,
    }).isRequired,
};
