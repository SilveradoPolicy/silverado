import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`pb-8 text-white relative`}
`;

const HeroContentWrapper = styled.div`
    ${tw`flex flex-col justify-center w-full mx-10 bg-white absolute top-3/4`}
`;
const Heading = styled.h1`
    ${tw`mb-8 mt-4 lg:mt-4 text-brand-1 text-center text-ts-h2 md:text-ts-h1`}
`;
const Body = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4`}
`;

const StyledHeroImage = styled(Img)`
    ${tw`w-screen`}
`;

const StyledPillarIcon = styled(Img)`
    ${tw`place-self-center w-24`}
`;

export default function PillarComponent({ data, icon }) {
    const {
        body,
        heading,
        image: {
            childImageSharp: { fluid },
        },
    } = data;

    return (
        <StyledSection>
            <StyledHeroImage fluid={fluid} />
            <HeroContentWrapper>
                <StyledPillarIcon fluid={icon.childImageSharp.fluid} />
                <Heading className="font-wt-bold">{heading}</Heading>
                <Body className="font-wt-thin">{body}</Body>
            </HeroContentWrapper>
        </StyledSection>
    );
}

PillarComponent.propTypes = {
    data: PropTypes.object.isRequired,
    icon: PropTypes.shape({
        childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
};
