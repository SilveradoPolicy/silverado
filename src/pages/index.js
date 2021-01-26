// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import IndexHero from '../components/indexHero';
import IndexSubHero from '../components/indexSubHero';
import FullWidthImageWithText from '../components/fullWidthImageWithText';
import CopyWithCTA from '../components/copyWithCTA';
import Pillars from '../components/pillars';
import EventList from '../components/eventList';

const content = {
    heroLink: {
        link: '/',
        text: 'learn more',
    },
    subHero: {
        heading: `The world is at an inflection point and America needs a long-term vision and plan to ensure enduring prosperity and global competitiveness`,
        body: `The race is on to see who will be first develop and maintain new new and emerging technologies, who will gain the strategic advantage in new types of warfare in both cyber and outer space, who will be able to best protect its national national interests while retaining strong relationships with allies, who will set the blueprint for international standards and norms, who will be able to unlock further economic growth and prosperity through international trade and investment, and who will be positioned to lead a broad to lead a broad coalition within international institutions.`,
    },
    fullWidthImage: {
        heading: 'how accelerators work',
        body: 'Silverado Policy Accelerator launched for this very purpose - to apply a venture model to policy implementation, setting in motion a paradigm shift in how policy is created and implemented.',
    },
    copy1: {
        text: 'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
    },
    copy2: {
        text: 'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
        cta: {
            link: '/',
            text: 'learn more',
        },
    },
}

export default function IndexPage({ data }) {
    const { heroImage, accImage } = data;

    return (
        <Layout isIndexPage>
            <EventList />
            <IndexHero heroImage={heroImage} cta={content.heroLink} />
            <IndexSubHero heading={content.subHero.heading} body={content.subHero.body}  hasTopTransition /> 
            <FullWidthImageWithText heading={content.fullWidthImage.heading} body={content.fullWidthImage.body} image={accImage} hasParalledTransition />
            <CopyWithCTA content={content.copy1}  hasTopTransition={false} />
            <Pillars hasTopTransition />
            <CopyWithCTA content={content.copy2} hasBgGradient hasTopTransition />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        heroImage: file(relativePath: {regex: "/Mountain/"}) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        accImage: file(relativePath: {regex: "/homepageAcc/"}) {
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
        accImage: PropTypes.object.isRequired,
    }).isRequired
}