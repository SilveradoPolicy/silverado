import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import NewsIndexHero from '../components/newsIndexHero';
import BlogPostList from '../components/blogPostList';

export default function NewsIndex({ data }) {
    const { newsImage } = data;

    const content = {
        newsEvent: {
            image: newsImage,
            heading: 'Big Feature News Title Second Line',
            subheading: 'Vitaw egetas',
            body:
                ' Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula',
        },
    };

    const blogposts = [
        {
            image: newsImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            time: '12:30pm',
            place: 'Walt Disney World',
            eventdate: 'May 23, 2021',
        },
        {
            image: newsImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
        {
            image: newsImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
    ];

    return (
        <Layout>
            <NewsIndexHero newsEventInfo={content.newsEvent} />
            <BlogPostList blogposts={blogposts} />
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
