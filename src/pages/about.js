// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import FullWidthImage from '../components/fullWidthImage';
import AdvisoryBoard from '../components/advisoryBoard';
import StrategicCouncil from '../components/strategicCouncil';
import CopyWithCTA from '../components/copyWithCTA';

const content = {
    hero: {
        body: `Facilitating a future defined by enduring American prosperity and global competitivess through investment in the acceleration of bipartisan economic, strategic, and technological policy solutions.`,
        heading: 'Mission',
    },
    ctasection: {
        text: 'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
        cta: {
            link: '/',
            text: 'learn more',
        },
    },
};

export default function AboutPage({ data }) {
    const { heroImage, dimitri, maureen, sarah, jessica } = data;
    const advisoryBoard = [dimitri, maureen, sarah, jessica];
    return (
        <Layout>
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <FullWidthImage image={heroImage}/>
            <AdvisoryBoard team={advisoryBoard}/>
            <StrategicCouncil honoraryMembers={advisoryBoard} />
            <CopyWithCTA content={content.ctasection} hasBgGradient hasTopTransition/>
        </Layout>
    );
}

export const query = graphql`
    query AboutQuery {
        heroImage: file(relativePath: {regex: "/heroImage/"}) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dimitri: file(relativePath: {regex: "/dimitri/"}) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        maureen: file(relativePath: {regex: "/maureen/"}) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        sarah: file(relativePath: {regex: "/sarah/"}) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        jessica: file(relativePath: {regex: "/jessica/"}) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
    }
`;

AboutPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        dimitri: PropTypes.object.isRequired,
        maureen: PropTypes.object.isRequired,
        sarah: PropTypes.object.isRequired,
        jessica: PropTypes.object.isRequired,
    }).isRequired
}