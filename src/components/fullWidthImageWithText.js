import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';
import CurvedTransition from './icons/curvedTransition';
import ParallelTransition from './icons/parallelTransition';

const StyledSection = styled.section`
    ${tw`container px-5 md:px-0 my-24 pt-36 relative`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-bold mb-6 text-center text-brand-1 text-center text-ts-h2`}
`;

const StyledBody = styled.p`
    ${tw`max-w-prose mb-6 mx-auto`}
`;

export default function FullWidthImageWithText({
    body,
    heading,
    image,
    hasCurvedTransition,
    hasParallelTransition,
}) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <StyledSection>
            {hasParallelTransition && <ParallelTransition />}
            {hasCurvedTransition && <CurvedTransition />}
            <StyledHeading>{heading}</StyledHeading>
            <StyledBody>{body}</StyledBody>
            <Img fluid={fluid} />
        </StyledSection>
    );
}

FullWidthImageWithText.defaultProps = {
    hasCurvedTransition: false,
    hasParallelTransition: false,
};

FullWidthImageWithText.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    hasCurvedTransition: PropTypes.bool,
    hasParallelTransition: PropTypes.bool,
};
