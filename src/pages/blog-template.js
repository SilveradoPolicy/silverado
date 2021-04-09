import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import BlogHero from '../components/blogHero';

import BlogContent from '../components/blogContent';

export default function BlogTemplate({ data }) {
    const { silverado } = data;
    return (
        <Layout>
            <BlogHero image={silverado} />
            <BlogContent />
        </Layout>
    );
}

export const query = graphql`
    query BlogTemplateQuery {
        silverado: file(relativePath: { regex: "/Silverado1/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
    }
`;

BlogTemplate.propTypes = {
    data: PropTypes.shape({
        silverado: PropTypes.object.isRequired,
    }).isRequired,
};
