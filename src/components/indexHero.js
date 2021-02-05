import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

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
    ${tw`text-ts-h1 font-wt-bold mb-6 mt-24`}
`;

const Body = styled.p`
    ${tw`text-lg max-w-prose`}
`;

export default function IndexHero({ body, cta, heading }) {
    const heroContent = body || cta || heading;
    return (
        <StyledSection>
            <AnimationWrapper>
                <HeroAnimation />
            </AnimationWrapper>
            {heroContent && (
                <HeroInnerContainer>
                    <Heading>{heading}</Heading>
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
    heading: PropTypes.string,
};
