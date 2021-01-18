// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import FullWidthImageWithText from '../components/fullWidthImageWithText';
import CopyWithCTA from '../components/copyWithCTA';

const content = {
    hero: {
        body: `Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.`,
        heading: 'Great Power Competition Headline',
    },
    fullWidthImage: {
        heading: 'how accelerators work',
        body: 'Silverado Policy Accelerator launched for this very purpose - to apply a venture model to policy implementation, setting in motion a paradigm shift in how policy is created and implemented.',
    },
    copy: {
        text: 'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
        cta: {
            link: '/',
            text: 'learn more',
        },
    },
};

export default function InitiativesPage({ data }) {
    const { fullWidthImage } = data;

    return (
        <Layout>
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <Pillars hasTopGradient />
            <FullWidthImageWithText heading={content.fullWidthImage.heading} body={content.fullWidthImage.body} image={fullWidthImage} hasCurvedTransition />
            <CopyWithCTA content={content.copy} hasBgGradient />
        </Layout>
    );
}

export const query = graphql`
    query InitiativePageQuery {
        fullWidthImage: file(relativePath: {regex: "/heroImage/"}) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

InitiativesPage.propTypes = {
    data: PropTypes.shape({
        fullWidthImage: PropTypes.object.isRequired,
    }).isRequired
}