import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import FullWidthImageWithText from '../components/fullWidthImageWithText';
import CopyWithCTA from '../components/copyWithCTA';
import SEO from '../components/SEO';

import InitiativesSection from '../components/initiativesSection';

const content = {
    hero: {
        body: `We have reached an inflection point. Thirty years after the end of the Cold War, the United States and its allies have entered into a new era of geopolitical competition with ascendant powers. This new era of competition has challenged foundational ideas and institutions of the post-World War II global order: multilateralism, market liberalism, and even democracy itself.`,
        bodyTwo: `At the dawn of this new era, the United States has the economic, technological, and strategic power to compete and lead on the global stage. Now, we need a long-term strategic vision to address the three pivotal challenges of the twenty-first century.`,
        heading: 'A New Era of Great Power Competition',
    },
    fullWidthImage: {
        heading: 'Sowing a new strategic vision',
        body:
            "Like the soil, sunshine, and rain that create world-class wines along Napa Valley's Silverado Trail, the three stages of our accelerator model allow good ideas to grow into action-oriented policy initiatives.",
    },
    copy: {
        text:
            'Realizing a comprehensive strategy in the twenty-first century will require creativity and collaboration. Silverado works with a bipartisan group of policymakers, stakeholders, and experts to build support for actionable policy initiatives and ignite a 21st-century race to the top.',
    },
};

export default function InitiativesPage({ data }) {
    const { fullWidthImage, pillars } = data;

    return (
        <Layout>
            <SEO
                title="Silverado Initiatives"
                description="Silverado invests in innovative policy solutions within the realms of cybersecurity, trade & industrial security, and economic & ecological security."
            />
            <AltHero
                body={content.hero.body}
                bodyTwo={content.hero.bodyTwo}
                heading={content.hero.heading}
            />
            <Pillars hasTopGradient pillars={pillars} />
            <FullWidthImageWithText
                heading={content.fullWidthImage.heading}
                body={content.fullWidthImage.body}
                image={fullWidthImage}
                hasCurvedTransition
            />
            <InitiativesSection />
            <CopyWithCTA content={content.copy} hasBgGradient />
        </Layout>
    );
}

export const query = graphql`
    query InitiativePageQuery {
        fullWidthImage: file(relativePath: { regex: "/homepageAcc/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        pillars: allSanityPillar {
            edges {
                node {
                    id
                    pillarIcon {
                        asset {
                            fluid(maxWidth: 500) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                    pillarName
                    shortDescription
                    slug {
                        current
                    }
                }
            }
        }
    }
`;

InitiativesPage.propTypes = {
    data: PropTypes.shape({
        fullWidthImage: PropTypes.object.isRequired,
        pillars: PropTypes.object.isRequired,
    }).isRequired,
};
