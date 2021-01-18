import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import ListComponent from '../components/listComponent';

const content = {
    hero: {
        body: `Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.`,
        heading: 'Ideas Headline',
    },
    listContent: {
        heading: 'how accelerators work',
        body:
            'Silverado Policy Accelerator launched for this very purpose - to apply a venture model to policy implementation, setting in motion a paradigm shift in how policy is created and implemented.',
        listItems: [
            {
                text: '1 A short item',
            },
            {
                text: '2 A longer list item',
            },
            {
                text:
                    '3 Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
            },
            {
                text: '4 A longer list item',
            },
            {
                text: '5 A short item',
            },
            {
                text:
                    '6 Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
            },
            {
                text: '7 A longer list item ',
            },
            {
                text: '8 A longer list item ',
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
