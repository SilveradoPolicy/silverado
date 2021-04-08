import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';
import BlogContent from '../components/blogContent';

const StyledImg = styled(Img)`
    ${tw`mx-8`}
`;

export default function BlogTemplate({ data }) {
    const { silverado } = data;
    return (
        <Layout>
            <Link to="/news">Back to News</Link>
            <StyledImg fluid={silverado.childImageSharp.fluid} />
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
