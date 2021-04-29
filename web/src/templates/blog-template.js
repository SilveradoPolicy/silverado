import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import BlogHero from '../components/blogHero';
import BlogContent from '../components/blogContent';
import PillarCardList from '../components/pillarCardList';

export const query = graphql`
    query newsBlogTemplateQuery($id: String!) {
        post: sanityPost(id: { eq: $id }) {
            categories {
                color
                id
                name
            }
            heroImage {
                asset {
                    fluid(maxWidth: 2000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            id
            postTitle
            _rawBody(resolveReferences: { maxDepth: 10 })
        }
    }
`;

export default function BlogTemplate({ data }) {
    const {
        post: { categories, heroImage, postTitle, _rawBody },
    } = data;

    const { color } = categories[0];

    const postData = { categories, postTitle, _rawBody };

    const posts = [
        {
            image: heroImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            time: '12:30pm',
            place: 'Walt Disney World',
            eventdate: 'May 23, 2021',
            id: '01',
        },
        {
            id: '02',
            image: heroImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
        {
            id: '03',
            image: heroImage,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
    ];
    return (
        <Layout hasBackgroundColor>
            <BlogHero color={color} image={heroImage} />
            <BlogContent data={postData} />
            <PillarCardList list={posts} />
        </Layout>
    );
}
BlogTemplate.propTypes = {
    data: PropTypes.shape({
        post: PropTypes.object.isRequired,
    }).isRequired,
};
