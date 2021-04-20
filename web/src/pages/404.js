import React from 'react';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';

const content = {
    hero: {
        heading: 'Have you lost your way?',
        body: "That page doesn't exist.",
    },
};

export default function NotFoundPage() {
    return (
        <Layout>
            <AltHero heading={content.hero.heading} body={content.hero.body} />
        </Layout>
    );
}
