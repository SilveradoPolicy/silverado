import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import ListComponent from '../components/listComponent';

const content = {
    hero: {
        body: `No one has a monopoly on solutions to complex global challenges. At Silverado, we believe that fundamental disagreement over questions of American policy is not only an inevitable byproduct of our democratic process; it is in fact an absolutely indispensable part of that process. Through a series of roundtable discussions leading up to our inaugural Ideas Competition, we're bringing together policy experts and stakeholders from different disciplines, industries, and political vantage-points to challenge entrenched ideas about American leadership and build consensus around new paths toward American prosperity and global competitiveness in the 21c.`,
        heading: 'From Ideas to Implementation',
    },
    listContent: {
        heading: 'What are the characteristics of a Silverado Idea?',
        listItems: [
            {
                text: 'Diagnostic: Does it identify a discrete policy challenge or failure?',
            },
            {
                text: 'Solution-oriented: Does it offer a focused solution to that problem?',
            },
            {
                text:
                    'Inventive: Does it present a creative or unconventional approach to a policy challenge?',
            },
            {
                text: 'Actionable: Does it include a clear path towards implementation?',
            },
            {
                text: 'Bipartisan: Can it draw support from across the political spectrum?',
            },
            {
                text:
                    'Empirical: Can its influence be observed and measured?',
            },
            {
                text: 'Integrative: Does it intersect with more than one of Silverado’s three focus areas?',
            },
            {
                text: 'Scalable: Can its scope be broadened to address related policy challenges?',
            },
        ],
    },
};

export default function IdeasPage() {
    return (
        <Layout>
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <ListComponent
                hasTopGradient
                heading={content.listContent.heading}
                listItems={content.listContent.listItems}
            />
            <Pillars />
        </Layout>
    );
}
