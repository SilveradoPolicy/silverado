import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts/page-layout';

import PillarHero from '../components/pillarHero';
import PillarDescription from '../components/pillarDescription';
import CopyWithCTA from '../components/copyWithCTA';

export default function PillarPage({ data }) {
    const { jared, ecosec } = data;
    const content = {
        pillarhero: {
            heading: 'Pillar',
            body:
                'Cras iaculis, lectus a condimentum lacinia, risus ex varius est, vel fermentum magna enim sed eros. Vestibulum at augue eget turpis pharetra mollis vel sagittis elit.',
            image: ecosec,
        },
        pillardescription: {
            title: 'Pillar title',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis orci vitae ligula tristique porttitor. Nullam velit nisl, tempus eget consequat ut, luctus a nunc. Mauris justo enim, semper ut tortor vitae, vestibulum tempus enim. Integer eleifend sapien nec dolor pharetra, nec rhoncus diam varius. Phasellus vestibulum vestibulum massa non convallis. Mauris at lectus sit amet diam vulputate dignissim nec ac tortor. Nulla vehicula tristique imperdiet. Quisque efficitur pulvinar egestas. Etiam aliquet hendrerit odio ut blandit. Cras a ipsum sodales enim malesuada scelerisque eget vel justo. Donec urna odio, ornare sit amet turpis nec, tempus placerat arcu. Sed vel pharetra diam. Integer interdum felis at sollicitudin sagittis. Ut quis scelerisque mi, et faucibus mi. Sed egestas suscipit dignissim. Etiam condimentum porttitor porttitor. Suspendisse convallis sem leo, ut mollis nulla egestas ac. Suspendisse mi diam, efficitur quis velit quis, faucibus mattis dolor. Aenean luctus, sapien vitae laoreet tempor, augue nisi euismod nunc, vitae dignissim ex nunc sed elit. Nullam ac tellus tincidunt, dapibus nisl nec, tristique ante. Maecenas ut erat nisl. Pellentesque interdum dolor ut libero rutrum gravida. Phasellus non lectus id urna congue euismod in quis enim. Nulla leo mauris, mattis a porta ac, rutrum eget erat.',
        },
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
        <Layout>
            <PillarHero data={content.pillarhero} hero={jared} />
            <PillarDescription data={content.pillardescription} />
            {/* to do: add pillarCardList component here when merged */}
            <CopyWithCTA
                content={content.copy}
                hasBottomGradient
                hasTopTransition
            />
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
