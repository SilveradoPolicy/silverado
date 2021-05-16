import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import ListComponent from '../components/listComponent';
import SEO from '../components/SEO';

const content = {
    hero: {
        body: `No one has a monopoly on solutions to complex global challenges. At Silverado, we believe that fundamental disagreement over questions of American policy is not only an inevitable byproduct of our democratic process; it is an absolutely indispensable part of that process.`,
        bodyTwo: `Through a series of roundtable discussions leading up to our inaugural Ideas Competition, we're bringing together policy experts and stakeholders from different disciplines, industries, and political vantage-points to challenge entrenched ideas about American leadership and build consensus around new paths toward American prosperity and global competitiveness in the 21c.`,
        heading: 'From Ideas to Implementation',
    },
    listContent: {
        heading: 'What Are the Characteristics of a Silverado Idea?',
        body: `Have a creative policy idea that you're dying to share? Don't wait until the Ideas Competition! Send us a link to your paper, article, report, or study at <a href="mailto:info@silverado.org">info@silverado.org</a>, or Tweet us <a href="https://twitter.com/silveradopolicy" target="_blank" rel="noreferrer">@SilveradoPolicy</a>, and we'll share ideas here.`,
        listItems: [
            {
                heading: 'Diagnostic',
                text:
                    'Does it identify a discrete policy challenge or failure?',
            },
            {
                heading: 'Solution-oriented',
                text: 'Does it offer a focused solution to that problem?',
            },
            {
                heading: 'Inventive',
                text:
                    'Does it present a creative or unconventional approach to a policy challenge?',
            },
            {
                heading: 'Actionable',
                text: 'Does it include a clear path towards implementation?',
            },
            {
                heading: 'Bipartisan',
                text: 'Can it draw support from across the political spectrum?',
            },
            {
                heading: 'Empirical',
                text: 'Can its influence be observed and measured?',
            },
            {
                heading: 'Integrative',
                text:
                    'Does it intersect with more than one of Silverado’s three focus areas?',
            },
            {
                heading: 'Scalable',
                text:
                    'Can its scope be broadened to address related policy challenges?',
            },
        ],
    },
};

export const query = graphql`
    query IdeasPageQuery {
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

export default function IdeasPage({ data }) {
    const { pillars } = data;

    return (
        <Layout>
            <SEO
                title="Silverado Ideas Competition"
                description="Silverado is bringing together diverse stakeholders to generate policy solutions for our most pressing issues. Submit your thoughts to our Ideas Competition!"
            />
            <AltHero
                body={content.hero.body}
                bodyTwo={content.hero.bodyTwo}
                heading={content.hero.heading}
            />
            <ListComponent
                hasTopGradient
                heading={content.listContent.heading}
                body={content.listContent.body}
                listItems={content.listContent.listItems}
            />
            <Pillars pillars={pillars} />
        </Layout>
    );
}

IdeasPage.propTypes = {
    data: PropTypes.object.isRequired,
};
