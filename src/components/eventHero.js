import React from 'react';
import Img from 'gatsby-image';
// import { Link } from 'gatsby';

// import { graphql } from 'gatsby';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const HeroWrapper = styled.section`
    ${tw`relative`}
`;

const ImageWrapper = styled.div`
    ${tw``}
`;
const StyledImage = styled(Img)`
    ${tw`w-screen`}
`;

const HeroContainer = styled.div`
    ${tw`absolute`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 mb-6 mt-24`}
`;

export default function EventHero({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <HeroWrapper>
            <ImageWrapper>
                <StyledImage fluid={fluid} />
            </ImageWrapper>
            <HeroContainer>
                <Heading>Events</Heading>
            </HeroContainer>
        </HeroWrapper>
    );
}

EventHero.propTypes = {
    image: PropTypes.object.isRequired,
};
