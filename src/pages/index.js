// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import IndexHero from '../components/indexHero';

const content = {
    heroLink: {
        link: '/',
        text: 'learn more',
    },
}

export default function IndexPage({ data }) {
    const { heroImage } = data;

    return (
        <Layout>
            <IndexHero heroImage={heroImage} cta={content.heroLink} />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        heroImage: file(relativePath: {regex: "/heroImage/"}) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired
}