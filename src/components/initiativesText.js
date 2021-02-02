import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`place-self-center w-96`}
`;

const StyledHeading = styled.h2`
    ${tw`font-wt-bold text-ts-h4 text-brand-1`}
`;

const StyledBody = styled.p`
    ${tw`text-lg`}
`;

export default function InitiativesText({ id, heading, body }) {
    return (
        <StyledSection id={id}>
            <StyledHeading>{heading}</StyledHeading>
            <StyledBody>{body}</StyledBody>
        </StyledSection>
    );
}

InitiativesText.propTypes = {
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
