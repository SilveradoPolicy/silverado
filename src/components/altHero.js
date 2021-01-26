import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`h-screen md:h-3/4-screen flex flex-col justify-center text-white mb-20`}
`;

const Heading = styled.h1`
    ${tw`font-wt-bold mb-8 mt-44 text-brand-1 text-center text-ts-h1`}
`;

const Body = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h5`}
`;

export default function AltHero({ body, heading }) {
    return (
        <StyledSection>
            <Heading>{heading}</Heading>
            <Body>{body}</Body>
        </StyledSection>
    );
}

AltHero.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};
