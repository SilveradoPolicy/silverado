import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';
import NewsFeatureComponent from '../components/newsFeatureComponent';

const StyledHeader = styled.h2`
    ${tw`text-brand-1 text-ts-h2`}
`;

export default function NewsIndex({ data }) {
    const { newsImage } = data;

    const content = {
        newsDetail: {
            header: 'hello',
            body: 'hello',
            subheader: 'hello',
        },
    };
    return (
        <Layout>
            <StyledHeader className="font-wt-bold">News</StyledHeader>
            <NewsFeatureComponent
                image={newsImage}
                body={content.newsDetail.body}
                header={content.newsDetail.header}
                subheader={content.newsDetail.subheader}
            />
        </Layout>
    );
}

export const query = graphql`
    query NewsIndexQuery {
        newsImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

NewsIndex.propTypes = {
    data: PropTypes.shape({
        newsImage: PropTypes.object.isRequired,
    }).isRequired,
};
