import React from 'react';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EventCard from './eventCard';

const HeroWrapper = styled.div`
    ${tw`relative`}
`;

const StyledImage = styled(Img)`
    ${tw`min-h-1/2-screen`}
`;

const HeroContainer = styled.div`
    ${tw`container min-h-3/4-screen text-white absolute transform top-0`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 md:pl-28 mb-6 mt-40 font-bold`}
`;

export default function EventHero({ image, data }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <HeroWrapper>
            <StyledImage fluid={fluid} />
            <HeroContainer>
                <Heading>Events</Heading>
            </HeroContainer>
            <EventCard data={data} />
        </HeroWrapper>
    );
}

EventHero.propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};
