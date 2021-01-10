import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const StyledSection = styled.section`
    ${tw`container my-12`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-bold mb-6 text-center text-brand-1 text-center text-ts-h2`}
`;

const StyledBody = styled.p`
    ${tw`max-w-prose mb-6 mx-auto`}
`;

export default function FullWidthImage({ body, heading, image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <StyledSection>
            <StyledHeading>{heading}</StyledHeading>
            <StyledBody>{body}</StyledBody>
            <Img fluid={fluid} />
        </StyledSection>
    );
}

FullWidthImage.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
