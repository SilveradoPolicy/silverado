import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`min-h-3/4-screen flex flex-col justify-center pb-8 text-white`}
`;

const Heading = styled.h1`
    ${tw`mb-8 mt-36 lg:mt-24 text-brand-1 text-center text-ts-h2 md:text-ts-h1 font-bold`}
`;

const Body = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4 font-light`}
`;
const BodyTwo = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4 font-light`}
`;

export default function AltHero({ body, bodyTwo, heading }) {
    return (
        <StyledSection>
            <Heading>{heading}</Heading>
            <Body>{body}</Body>
            <br />
            <BodyTwo>{bodyTwo}</BodyTwo>
        </StyledSection>
    );
}

AltHero.propTypes = {
    body: PropTypes.string.isRequired,
    bodyTwo: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};
