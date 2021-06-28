import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

import EventCard from './eventCard';

const HeroWrapper = styled.div`
    ${tw`relative`}
`;

const StyledImage = styled.img`
    ${tw`w-full`}
`;

const HeroContainer = styled.div`
    ${tw`container text-white absolute mt-40 left-1/2 -translate-x-1/2 transform top-0`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 mb-6 font-bold`}
`;

export default function EventHero({ data }) {
    const { featuredEvent, heroImage } = data;

    return (
        <HeroWrapper>
            <StyledImage
                className="hidden lg:block"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(1400)
                    .height(Math.floor((1 / 2.5) * 1400))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
            />
            <StyledImage
                className="lg:hidden"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(1400)
                    .height(Math.floor((5 / 4) * 1400))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
            />
            <HeroContainer>
                <Heading>Events</Heading>
            </HeroContainer>
            <EventCard data={featuredEvent} />
        </HeroWrapper>
    );
}

EventHero.propTypes = {
    data: PropTypes.object.isRequired,
};
