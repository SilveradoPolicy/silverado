// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import IndexHero from '../components/indexHero';
import IndexSubHero from '../components/indexSubHero';

const content = {
    heroLink: {
        link: '/',
        text: 'learn more',
    },
    subHero: {
        heading: `The world is at an inflection point and America needs a long-term vision and plan to ensure enduring prosperity and global competitiveness`,
        body: `The race is on to see who will be first develop and maintain new new and emerging technologies, who will gain the strategic advantage in new types of warfare in both cyber and outer space, who will be able to best protect its national national interests while retaining strong relationships with allies, who will set the blueprint for international standards and norms, who will be able to unlock further economic growth and prosperity through international trade and investment, and who will be positioned to lead a broad to lead a broad coalition within international institutions.`,
    },
}

export default function IndexPage({ data }) {
    const { heroImage } = data;

    return (
        <Layout>
            <IndexHero heroImage={heroImage} cta={content.heroLink} />
            <IndexSubHero heading={content.subHero.heading} body={content.subHero.body} /> 
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        heroImage: file(relativePath: {regex: "/heroImage/"}) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired
}