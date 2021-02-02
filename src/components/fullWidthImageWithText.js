import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import CurvedTransition from './icons/curvedTransition';
import ParallelTransition from './icons/parallelTransition';

const StyledSection = styled.section`
    ${tw`container my-24 pt-8 relative`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-wt-bold mb-6 pt-10 text-center text-brand-1 text-center text-ts-h2`}
`;

const StyledBody = styled.p`
    ${tw`max-w-prose mb-6 mx-auto`}
`;

export default function FullWidthImageWithText({
    body,
    heading,
    hasCurvedTransition,
    hasTopTransition,
}) {
    return (
        <StyledSection>
            {hasTopTransition && <ParallelTransition />}
            {hasCurvedTransition && <CurvedTransition />}
            <StyledHeading>{heading}</StyledHeading>
            <StyledBody>{body}</StyledBody>
        </StyledSection>
    );
}

FullWidthImageWithText.defaultProps = {
    hasCurvedTransition: false,
    hasTopTransition: false,
};

FullWidthImageWithText.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    hasCurvedTransition: PropTypes.bool,
    hasTopTransition: PropTypes.bool,
};
