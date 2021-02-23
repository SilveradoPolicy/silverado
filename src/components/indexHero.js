import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';

import CtaLink from './ctaLink';
import HeroAnimation from './heroAnimation';

const StyledSection = styled.section`
    ${tw`flex flex-col justify-center relative`}
`;

const AnimationWrapper = styled.div`
    ${tw`w-full`}
`;
const HeroInnerContainer = styled.div`
    ${tw`container text-brand-1 absolute left-1/2 transform -translate-x-1/2`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 mb-6 mt-24`}
`;

const Body = styled.p`
    ${tw`text-lg max-w-prose`}
`;

export default function IndexHero({
    body,
    cta,
    fullHeroImg,
    heading,
    mobileHeroImg,
    oneHeroImg,
}) {
    const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
    const heroContent = body || cta || heading;
    const sources = [
        mobileHeroImg.childImageSharp.fluid,
        {
            ...oneHeroImg.childImageSharp.fluid,
            media: `(min-width: 678px) and (max-width: 1024px)`,
        },
        {
            ...fullHeroImg.childImageSharp.fluid,
            media: `(min-width: 1025px)`,
        },
    ];

    return (
        <StyledSection>
            {!isAnimationLoaded && <Img fluid={sources} />}
            <AnimationWrapper>
                <HeroAnimation setIsAnimationLoaded={setIsAnimationLoaded} />
            </AnimationWrapper>
            {heroContent && (
                <HeroInnerContainer>
                    <Heading className="font-wt-bold">{heading}</Heading>
                    {body && <Body>{body}</Body>}
                    {cta && <CtaLink cta={cta} />}
                </HeroInnerContainer>
            )}
        </StyledSection>
    );
}

IndexHero.defaultProps = {
    body: false,
    cta: false,
    heading: false,
};

IndexHero.propTypes = {
    body: PropTypes.string,
    cta: PropTypes.shape({
        link: PropTypes.string,
    }),
    fullHeroImg: PropTypes.shape({
        childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
    heading: PropTypes.string,
    mobileHeroImg: PropTypes.object.isRequired,
    oneHeroImg: PropTypes.shape({
        childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
};
