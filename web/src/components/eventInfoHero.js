import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

import EventInfoCard from './eventInfoCard';

const HeroWrapper = styled.div`
    ${tw`relative`}
`;

const StyledImage = styled.img`
    ${tw`w-full`}
`;

export default function EventInfoHero({ data }) {
    const { heroImage } = data;

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
                className="block lg:hidden"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(1400)
                    .height(Math.floor((5 / 4) * 1400))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
            />
            <EventInfoCard data={data} />
        </HeroWrapper>
    );
}

EventInfoHero.propTypes = {
    data: PropTypes.object.isRequired,
};
