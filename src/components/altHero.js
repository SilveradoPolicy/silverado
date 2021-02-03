import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`min-h-3/4-screen flex flex-col justify-center pb-8 text-white`}
`;

const Heading = styled.h1`
    ${tw`font-wt-bold mb-8 mt-36 lg:mt-24 text-brand-1 text-center text-ts-h2 md:text-ts-h1`}
`;

const Body = styled.p`
    ${tw`font-wt-thin max-w-prose mx-auto text-black text-center text-ts-h4`}
`;
const BodyTwo = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4`}
`;

export default function AltHero({ body, bodyTwoBold, bodyTwo, heading }) {
    return (
        <StyledSection>
            <Heading>{heading}</Heading>
            <Body>{body}</Body>
            <br></br>
            <BodyTwo>
                {bodyTwo} <strong>{bodyTwoBold}</strong>
            </BodyTwo>
        </StyledSection>
    );
}

AltHero.propTypes = {
    body: PropTypes.string.isRequired,
    bodyTwo: PropTypes.string.isRequired,
    bodyTwoBold: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};
