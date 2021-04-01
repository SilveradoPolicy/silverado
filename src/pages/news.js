import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';
import NewsFeatureComponent from '../components/newsFeatureComponent';
import NewsEventList from '../components/newsEventList';

const Section = styled.section`
    ${tw`container pt-32`}
`;
const StyledHeader = styled.h2`
    ${tw`text-brand-1 text-ts-h2`}
`;

const EventsWrapper = styled.div`
    ${tw`flex`}
`;

export default function NewsIndex({ data }) {
    const { newsImage } = data;

    const content = {
        newsDetail: {
            heading: 'Big Feature News Title Second Line',
            subheading: 'Vitaw egetas',
            body:
                ' Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula',
        },
    };

    const eventsInfo = [
        {
            body:
                'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
            heading: 'Event Quisque id rhoncus ex',
            subheading: 'Vitae egestas',
        },
        {
            body:
                'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
            heading: 'Event Quisque id rhoncus ex',
            subheading: 'Vitae egestas',
        },
        {
            body:
                'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
            heading: 'Event Quisque id rhoncus ex',
            subheading: 'Vitae egestas',
        },
        {
            body:
                'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
            heading: 'Event Quisque id rhoncus ex',
            subheading: 'Vitae egestas',
        },
    ];
    return (
        <Layout>
            <Section>
                <StyledHeader className="font-wt-bold">News</StyledHeader>
                <EventsWrapper>
                    <NewsFeatureComponent
                        image={newsImage}
                        body={content.newsDetail.body}
                        heading={content.newsDetail.heading}
                        subheading={content.newsDetail.subheading}
                    />
                    <NewsEventList events={eventsInfo} />
                </EventsWrapper>
            </Section>
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
