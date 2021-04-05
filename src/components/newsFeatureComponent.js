import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import tw from 'twin.macro';

const StyledFeaturedEvent = styled.div`
    ${tw`md:w-2/4`}
`;
const StyledImg = styled(Img)`
    ${tw`w-full my-4`}
`;

const Heading = styled.h4`
    ${tw`text-ts-h4 text-black leading-8 max-w-sm`}
`;

const SubHeading = styled.h5`
    ${tw`text-sm text-brand-3 pt-1`}
`;
const Body = styled.p`
    ${tw`text-ts-body my-4`}
`;

export default function NewsFeature({ image, heading, body, subheading }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <StyledFeaturedEvent>
            <StyledImg fluid={fluid} />
            <Heading className="font-wt-bold">{heading}</Heading>
            <SubHeading>{subheading}</SubHeading>
            <Body>{body}</Body>
        </StyledFeaturedEvent>
    );
}

NewsFeature.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    subheading: PropTypes.string.isRequired,
};
