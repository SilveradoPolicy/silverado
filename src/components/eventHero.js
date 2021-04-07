import React from 'react';
import Img from 'gatsby-image';
// import { Link } from 'gatsby';

// import { graphql } from 'gatsby';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EventCard from './eventCard';

const HeroWrapper = styled.section`
    ${tw`relative`}
`;

const ImageWrapper = styled.div`
    ${tw`w-full`}
`;

const HeroContainer = styled.div`
    ${tw`container text-white absolute left-1/2 transform -translate-x-1/2 top-0`}
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
                <Img fluid={fluid} />
            </ImageWrapper>
            <HeroContainer>
                <Heading className="font-wt-bold">Events</Heading>
            </HeroContainer>
            <EventCard />
        </HeroWrapper>
    );
}

EventHero.propTypes = {
    image: PropTypes.object.isRequired,
};
