import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import EventInfoHero from '../components/eventInfoHero';
import Layout from '../layouts/page-layout';
import SpeakerCardList from '../components/speakerCardList';
import Registration from '../components/registration';
import SponsorList from '../components/sponsorList';

export default function EventPage({ data }) {
    const { eventImage, speaker, icon } = data;

    const content = {
        card: {
            title: 'Big Featured Event Title Second Line',
            subtitle: 'Subtitle',
            date: 'Someday 01, 2021',
            eventtime: '2:30PM',
            place: 'My House',
            description:
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi malesuada lectus quis scelerisque gravida. Vestibulum feugiat consectetur porta. Donec eleifend enim ac enim varius tincidunt. Morbi pharetra urna dignissim, lobortis diam sit amet, faucibus lectus. Vivamus vulputate massa risus, ac tempor nisi sagittis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi malesuada lectus quis scelerisque gravida. Vestibulum feugiat consectetur porta. Donec eleifend enim ac enim varius tincidunt. Morbi pharetra urna dignissim, lobortis diam sit amet, faucibus lectus. Vivamus vulputate massa risus, ac tempor nisi sagittis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi malesuada lectus quis scelerisque gravida. Vestibulum feugiat consectetur porta. Donec eleifend enim ac enim varius tincidunt. Morbi pharetra urna dignissim, lobortis diam sit amet, faucibus lectus. Vivamus vulputate massa risus, ac tempor nisi sagittis eget.',
            time: '3:00',
            item:
                'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
    };

    const speakers = [
        {
            image: speaker,
            name: 'Katie Breuil',
            title: 'Web Developer',
        },
        {
            image: speaker,
            name: 'Katie Breuil',
            title: 'Web Developer',
        },
        {
            image: speaker,
            name: 'Katie Breuil',
            title: 'Web Developer',
        },
        {
            image: speaker,
            name: 'Katie Breuil',
            title: 'Web Developer',
        },
    ];

    const sponsors = [
        {
            image: icon,
        },
        {
            image: icon,
        },
        {
            image: icon,
        },
        {
            image: icon,
        },
        {
            image: icon,
        },
    ];

    return (
        <Layout hasBackgroundColor>
            <EventInfoHero data={content.card} image={eventImage} />
            <SpeakerCardList speakers={speakers} />
            <Registration />
            {sponsors && <SponsorList sponsors={sponsors} />}
        </Layout>
    );
}

export const query = graphql`
    query EventPageQuery {
        eventImage: file(relativePath: { regex: "/eventimage/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        speaker: file(relativePath: { regex: "/speaker/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        icon: file(relativePath: { regex: "/icon/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

EventPage.propTypes = {
    data: PropTypes.shape({
        eventImage: PropTypes.object.isRequired,
        speaker: PropTypes.object.isRequired,
        icon: PropTypes.object.isRequired,
    }).isRequired,
};
