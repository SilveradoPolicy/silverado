import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import tw from 'twin.macro';

const StyledFeaturedEvent = styled.div`
    ${tw`md:w-full`}
`;
const StyledImg = styled(Img)`
    ${tw`w-full my-4`}
`;

const Heading = styled.h4`
    ${tw`text-ts-h4 text-black leading-8 max-w-sm`}
`;

const EventInfo = styled.h5`
    ${tw`text-sm text-brand-3 pt-1`}
`;
const Body = styled.p`
    ${tw`text-ts-body my-4`}
`;

export default function NewsFeature({ data }) {
    const content = data[0];

    return (
        <StyledFeaturedEvent>
            <StyledImg fluid={content.heroImage.asset.fluid} />
            <Heading className="font-wt-bold">{content.title}</Heading>
            <EventInfo>
                {content.author} | {content.publishDate}
            </EventInfo>
            <Body>{content.description}</Body>
        </StyledFeaturedEvent>
    );
}

NewsFeature.propTypes = {
    data: PropTypes.object.isRequired,
};
