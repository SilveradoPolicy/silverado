// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
// import FullWidthImage from '../components/fullWidthImage';
import AdvisoryBoard from '../components/advisoryBoard';
import StrategicCouncil from '../components/strategicCouncil';
import CopyWithCTA from '../components/copyWithCTA';

const content = {
    hero: {
        body: `Facilitating a future defined by enduring American prosperity and global competitivess through investment in the acceleration of bipartisan economic, strategic, and technological policy solutions.`,
        heading: 'Mission Imperative',
    },
    heroTwo: {
        body: `Silverado's name is a nod to the Silverado Trail, a 29-mile route that passes through the heart of California's Napa Valley. When the trail was constructed in 1852, it created a new path toward propserity for California's workers, connecting the cinnabar mines in the north to the docks of San Pablo to the south. Today, the trail winds through the heart Napa Valley's wine country, offering a scenic view of world-class vineyards and the valley's magnificent mountains. Like the its namesake, Silverado is forging a new path toward American propsperity in the 21st century—and serving up plenty of wine along the way.`,
        heading: 'Why "Silverado"?',
    },
    ctasection: {
        text: 'Realizing a comprehensive American strategy in the twenty-first century will require creativity and collaboration. Silverado works with a bipartisan group of policymakers, stakeholders, and experts to challenge build support for actionable policy initiatives and ignite a 21c race to the top.',
        // cta: {
        //     link: '/',
        //     text: 'learn more',
        // },
    },
};

export default function AboutPage({ data }) {
    const { dimitri, maureen, sarah, jessica, robert } = data;
    const advisoryBoard = [dimitri, maureen, sarah, jessica, robert];
    return (
        <Layout>
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <AltHero body={content.heroTwo.body} heading={content.heroTwo.heading} />
            {/* <FullWidthImage image={heroImage}/> */}
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
        robert: file(relativePath: {regex: "/dimitri/"}) {
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