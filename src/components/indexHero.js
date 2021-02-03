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

export default function IndexHero({ cta }) {
    return (
        <StyledSection>
            <AnimationWrapper>
                <HeroAnimation />
            </AnimationWrapper>
            <HeroInnerContainer>
                <Heading>Accelerating a 21st-century race to the top</Heading>
                <Body>
                    A future defined by enduring American prosperity and global
                    competitiveness through venture in the acceleration of
                    bipartisan economic, strategic, and technological policy
                    solutions.
                </Body>
                <CtaLink cta={cta} />
            </HeroInnerContainer>
        </StyledSection>
    );
}

IndexHero.defaultProps = {
    cta: {
        link: '',
        text: '',
    },
};

IndexHero.propTypes = {
    cta: PropTypes.shape({
        link: PropTypes.string,
    }),
};
