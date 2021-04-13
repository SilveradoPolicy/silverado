import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts/page-layout';

import PillarComponent from '../components/pillarComponent';

export default function PillarPage({ data }) {
    const { jared, ecosec } = data;
    const content = {
        pillar: {
            heading: 'Heading',
            body: 'This is the body',
            image: jared,
        },
    };
    return (
        <Layout>
            <PillarComponent data={content.pillar} icon={ecosec} />
        </Layout>
    );
}

export const query = graphql`
    query PillarPageQuery {
        jared: file(relativePath: { regex: "/Jared/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ecosec: file(relativePath: { regex: "/EcoSec/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
PillarPage.propTypes = {
    data: PropTypes.shape({
        jared: PropTypes.object.isRequired,
        ecosec: PropTypes.object.isRequired,
    }).isRequired,
};
