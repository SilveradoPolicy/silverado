import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import ListComponent from '../components/listComponent';

const content = {
    hero: {
        body: `No one has a monopoly on solutions to the complex global challenges. At Silverado, we aim to be both a cultivator of bold news policy solutions and a conduit that connects existing policy ideas with the resources and expertise they need to become concrete solutions. In the coming months, we will convene a series of public roundtable discussions where policy experts, stakeholders, and government officials will analyze pressing geopolitical challenges and work to reach consensus on actionable solutions. In [month], we will launch our inaugural ideas competition to solicit policy proposals for our first round of targeted acceleration.`,
        heading: 'From Ideas to Implementation',
    },
    listContent: {
        heading: 'What are the characteristics of a Silverado Idea?',
        body:
            'TBD',
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
                body={content.listContent.body}
                heading={content.listContent.heading}
                listItems={content.listContent.listItems}
            />
            <Pillars />
        </Layout>
    );
}
