import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import BlogHero from '../components/blogHero';

import BlogContent from '../components/blogContent';
import PillarCardList from '../components/pillarCardList';

export default function BlogTemplate({ data }) {
    const { silverado } = data;
    const posts = [
        {
            image: silverado,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            time: '12:30pm',
            place: 'Walt Disney World',
            eventdate: 'May 23, 2021',
            id: '01',
        },
        {
            id: '02',
            image: silverado,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
        {
            id: '03',
            image: silverado,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
    ];
    return (
        <Layout>
            <BlogHero image={silverado} />
            <BlogContent />
            <PillarCardList list={posts} />
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
