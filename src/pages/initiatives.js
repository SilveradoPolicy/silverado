import React from 'react';
import Layout from '../layouts/page-layout';

import AltHero from '../components/altHero';

const content = {
    hero: {
        body: `Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.`,
        heading: 'Great Power Competition Headline',
    },
};

export default function InitiativesPage() {
    return (
        <Layout>
            <AltHero body={content.hero.body} heading={content.hero.heading} />
        </Layout>
    );
}
