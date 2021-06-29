import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts/page-layout';

import PillarHero from '../components/pillarHero';
import PillarDescription from '../components/pillarDescription';
import CopyWithCTA from '../components/copyWithCTA';
import PillarCardList from '../components/pillarCardList';
import SEO from '../components/SEO';

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
            cta {
                buttonText
                internalLink
                text
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
            seo {
                pageDescription
                pageTitle
                ogImage {
                    asset {
                        url
                    }
                }
            }
            shortDescription
            _rawLongDescription(resolveReferences: { maxDepth: 10 })
        }

        posts: allSanityPost(
            sort: { order: DESC, fields: publishDate }
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
            cta,
            heroImage,
            longDescriptionTitle,
            pillarName,
            pillarIcon,
            seo,
            shortDescription,
            _rawLongDescription,
        },
        posts: { edges },
    } = data;

    const heroData = { pillarName, pillarIcon, shortDescription };
    const description = { longDescriptionTitle, _rawLongDescription };

    return (
        <Layout hasBackgroundColor>
            <SEO
                description={seo.pageDescription || shortDescription}
                image={seo.ogImage.asset.url}
                title={seo.pageTitle || pillarName}
            />
            <PillarHero data={heroData} heroImage={heroImage} />
            <PillarDescription data={description} />
            <PillarCardList list={edges} />
            <CopyWithCTA content={cta} hasBottomGradient hasTopTransition />
        </Layout>
    );
}

PillarPage.propTypes = {
    data: PropTypes.shape({
        pillar: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
    }).isRequired,
};
