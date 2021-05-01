import React from 'react';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EventInfoCard from './eventInfoCard';

const HeroWrapper = styled.div`
    ${tw`relative`}
`;

const StyledImage = styled(Img)`
    ${tw`min-h-1/2-screen`}
`;

export default function EventInfoHero({ image, data }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <HeroWrapper>
            <StyledImage fluid={fluid} />
            <EventInfoCard data={data} />
        </HeroWrapper>
    );
}

EventInfoHero.propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};
