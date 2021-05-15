import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts/page-layout';

import PillarHero from '../components/pillarHero';
import PillarDescription from '../components/pillarDescription';
import CopyWithCTA from '../components/copyWithCTA';
import PillarCardList from '../components/pillarCardList';

export const query = graphql`
    fragment SanityImage on SanityMainImage {
        crop {
            _key
            _type
            top
            bottom
            left
            right
        }
        hotspot {
            _key
            _type
            x
            y
            height
            width
        }
        asset {
            _id
        }
    }

    query PillarPageTemplateQuery($id: String!, $categoryId: String!) {
        pillar: sanityPillar(id: { eq: $id }) {
            categories {
                id
                name
            }
            id
            heroImage {
                ...SanityImage
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

        posts: allSanityPost(
            filter: { categories: { elemMatch: { id: { eq: $categoryId } } } }
        ) {
            edges {
                node {
                    categories {
                        id
                        color
                    }
                    description
                    slug {
                        current
                    }
                    title
                    heroImage {
                        ...SanityImage
                    }
                }
            }
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
        posts: { edges },
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

    return (
        <Layout hasBackgroundColor>
            <PillarHero data={heroData} heroImage={heroImage} />
            <PillarDescription data={description} />
            <PillarCardList list={edges} />
            <CopyWithCTA
                content={content.copy}
                hasBottomGradient
                hasTopTransition
            />
        </Layout>
    );
}

PillarPage.propTypes = {
    data: PropTypes.shape({
        pillar: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
    }).isRequired,
};
