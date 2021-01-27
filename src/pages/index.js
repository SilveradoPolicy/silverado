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
        heading: `Forging a path toward American prosperity and global competitivess through investment in bipartisan economic, strategic, and technological policy solutions.`,
        body: `The race is on. As the world competes for the newest technologies, the smartest economies, and the broadest sphere of influence, the nations that assert bold long-term strategies will shape the global order for decades to come. At this pivotal moment of geopolitical competition, America can't afford to sit on the sidelines. It's time to chart a course toward economic prosperity at home and competitivess on the world stage.`,
    },
    fullWidthImage: {
        heading: 'What is the Silverado Policy Accelerator?',
        body:
            "Silverado is a new addition to Washington's policy development ecosystem. Unlike a conventional policy institute, we use a novel accelerator model that combines the expertise of a traditional think tank with the dynamism of a venture approach. The three stages of our accelerator model are designed to transform fresh policy ideas into actionable policy initiatives, nurturing a new strategic and economic vision from the ground up.",
    },
    copy1: {

        text: 'The contest for twenty-first century global leadership is creating new challenges in cyberspace, at the negotiating table, and across complex global supply chains. Silverado works at the intersection of the three policy areas that will critically shape America\'s place in the world.',
    },
    copy2: {
        text: 'Silverado\'s three focal points converage on a single challenge: how will the United States maintain global leadership and competitiveness in a new era of economic, technology, strategic competition? ',
        cta: {
            link: '/',
            text: 'learn more',
        },
    },
};

export default function IndexPage({ data }) {
    const { heroImage, mobileHero, accImage } = data;
    return (
        <Layout isIndexPage>
            <EventList />
            <IndexHero
                heroImage={heroImage}
                mobileHero={mobileHero}
                cta={content.heroLink}
            />
            <IndexSubHero
                heading={content.subHero.heading}
                body={content.subHero.body}
            />
            <FullWidthImageWithText
                heading={content.fullWidthImage.heading}
                body={content.fullWidthImage.body}
                image={accImage}
                hasTopTransition
            />
            <CopyWithCTA content={content.copy1} hasTopTransition={false} />
            <Pillars hasTopTransition />
            <CopyWithCTA
                content={content.copy2}
                hasBgGradient
                hasTopTransition
            />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        heroImage: file(relativePath: { regex: "/Mountain/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        accImage: file(relativePath: { regex: "/homepageAcc/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mobileHero: file(relativePath: { regex: "/mobileHero/" }) {
            childImageSharp {
                fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        mobileHero: PropTypes.object.isRequired,
        accImage: PropTypes.object.isRequired,
        sources: PropTypes.array.isRequired,
    }).isRequired,
};
