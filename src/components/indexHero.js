import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import CtaLink from './ctaLink';

const StyledBgImage = styled(BackgroundImage)`
    ${tw`h-screen lg:h-3/4-screen flex flex-col justify-center text-white`}
`;

const HeroInnerContainer = styled.div`
    ${tw`container px-5 lg:px-0 text-brand-1`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 font-wt-bold mb-6 mt-24`}
`;

const Body = styled.p`
    ${tw`text-lg max-w-prose`}
`;

export default function IndexHero({ cta, heroImage, mobileHero }) {
    const sources = [
        mobileHero.childImageSharp.fluid,
        {
            ...heroImage.childImageSharp.fluid,
            media: `(min-width: 768px)`,
        },
    ];
    return (
        <StyledBgImage fluid={sources} Tag="section">
            <HeroInnerContainer>
                <Heading>Accelerating a 21c race to the top</Heading>
                <Body>
                    A future defined by enduring American prosperity and global
                    competitiveness through venture in the acceleration of
                    bipartisan economic, strategic, and technological policy
                    solutions.
                </Body>
                <CtaLink cta={cta} />
            </HeroInnerContainer>
        </StyledBgImage>
    );
}

IndexHero.defaultProps = {
    cta: {
        link: '',
        text: '',
    },
};

IndexHero.propTypes = {
    heroImage: PropTypes.object.isRequired,
    mobileHero: PropTypes.object.isRequired,
    cta: PropTypes.shape({
        link: PropTypes.string,
    }),
};
