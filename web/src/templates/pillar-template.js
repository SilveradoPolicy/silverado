import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts/page-layout';

import PillarHero from '../components/pillarHero';
import PillarDescription from '../components/pillarDescription';
import CopyWithCTA from '../components/copyWithCTA';
import PillarCardList from '../components/pillarCardList';

export const query = graphql`
    query PillarPageTemplateQuery($id: String!) {
        pillar: sanityPillar(id: { eq: $id }) {
            id
            heroImage {
                asset {
                    fluid(maxWidth: 2000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            longDescriptionTitle
            pillarIcon {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            pillarName
            _rawLongDescription(resolveReferences: { maxDepth: 10 })
            shortDescription
        }
    }
`;

export default function PillarPage({ data }) {
    const {
        pillar: {
            heroImage,
            longDescriptionTitle,
            pillarName,
            pillarIcon,
            shortDescription,
            _rawLongDescription,
        },
    } = data;

    const heroData = { pillarName, pillarIcon, shortDescription };
    const description = { longDescriptionTitle, _rawLongDescription };
    const content = {
        copy: {
            text:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae tellus sagittis tincidunt in in sem.',
            cta: {
                link: '/',
                text: 'Learn More',
            },
        },
    };
    const posts = [
        {
            // image: silverado,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            time: '12:30pm',
            place: 'Walt Disney World',
            eventdate: 'May 23, 2021',
            id: '01',
        },
        {
            id: '02',
            // image: silverado,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
        {
            id: '03',
            // image: silverado,
            title: 'This is an event',
            subtitle: 'Cras iaculis',
            description:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros.',
        },
    ];
    return (
        <Layout hasBackgroundColor>
            <PillarHero data={heroData} heroImage={heroImage} />
            <PillarDescription data={description} />
            <PillarCardList list={posts} />
            <CopyWithCTA
                content={content.copy}
                hasBottomGradient
                hasTopTransition
            />
        </Layout>
    );
}

// export const query = graphql`
//     query PillarPageQuery {
//         jared: file(relativePath: { regex: "/Jared/" }) {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         ecosec: file(relativePath: { regex: "/EcoSec/" }) {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         silverado: file(relativePath: { regex: "/Silverado1/" }) {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `;

PillarPage.propTypes = {
    data: PropTypes.shape({
        pillar: PropTypes.object.isRequired,
        // jared: PropTypes.object.isRequired,
        // ecosec: PropTypes.object.isRequired,
        // silverado: PropTypes.object.isRequired,
    }).isRequired,
};
