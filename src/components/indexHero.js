import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

// import BackgroundImage from 'gatsby-background-image';
import CtaLink from './ctaLink';
import HeroAnimation from '../components/heroAnimation';

const StyledSection = styled.section`
    ${tw`h-screen lg:h-3/4-screen flex flex-col justify-center relative`}
`;

const AnimationWrapper = styled.div`
    ${tw`absolute max-w-full h-screen`}
`;
const HeroInnerContainer = styled.div`
    ${tw`container z-0 px-5 md:px-0 text-brand-1`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 font-wt-bold mb-6 mt-24`}
`;

const Body = styled.p`
    ${tw`text-lg max-w-prose`}
`;

export default function IndexHero({ cta }) {
    // const sources = [
    //     mobileHero.childImageSharp.fluid,
    //     {
    //         ...heroImage.childImageSharp.fluid,
    //         media: `(min-width: 768px)`,
    //     },
    // ];
    return (
        <>
            <StyledSection>
                <AnimationWrapper>
                    <HeroAnimation />
                </AnimationWrapper>
                <HeroInnerContainer>
                    <Heading>Accelerating a 21c race to the top</Heading>
                    <Body>
                        A future defined by enduring American prosperity and
                        global competitiveness through venture in the
                        acceleration of bipartisan economic, strategic, and
                        technological policy solutions.
                    </Body>
                    <CtaLink cta={cta} />
                </HeroInnerContainer>
            </StyledSection>
        </>
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
    sources: PropTypes.array.isRequired,
    heroAnimation: PropTypes.object.isRequired,
    cta: PropTypes.shape({
        link: PropTypes.string,
    }),
};
