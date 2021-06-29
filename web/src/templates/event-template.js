import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import EventInfoHero from '../components/eventInfoHero';
import Layout from '../layouts/page-layout';
import SpeakerCardList from '../components/speakerCardList';
import SEO from '../components/SEO';
import Registration from '../components/registration';
// import SponsorList from '../components/sponsorList';

export default function EventPage({ data }) {
    const { event } = data;
    const { description, seo, speakers, title } = event;
    const { ctaBody, registrationUrl } = event;

    return (
        <Layout hasBackgroundColor>
            <SEO
                description={seo.pageDescription || description}
                image={seo.ogImage?.asset?.url || null}
                title={seo.pageTitle || title}
            />
            <EventInfoHero data={event} />
            <SpeakerCardList speakers={speakers} />
            <Registration ctaBody={ctaBody} url={registrationUrl} />
            {/* {sponsors && <SponsorList sponsors={sponsors} />} */}
        </Layout>
    );
}

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
    query eventTemplateQuery($id: String!) {
        event: sanityEvent(id: { eq: $id }) {
            ctaBody
            dateAndTime
            description
            heroImage {
                ...SanityImage
            }
            id
            place
            registrationUrl
            seo {
                pageDescription
                ogImage {
                    asset {
                        url
                    }
                }
                pageDescription
                pageTitle
            }
            speakers {
                id
                image {
                    ...SanityImage
                }
                name
                title
            }
            subtitle
            title
        }
    }
`;

EventPage.propTypes = {
    data: PropTypes.shape({
        event: PropTypes.object.isRequired,
    }).isRequired,
};
