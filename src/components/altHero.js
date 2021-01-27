import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`min-h-screen md:min-h-0 md:h-screen lg:h-screen flex flex-col justify-center pb-8 text-white`}
`;

const Heading = styled.h1`
    ${tw`font-wt-bold mb-8 mt-36 lg:mt-24 text-brand-1 text-center text-ts-h1`}
`;

const Body = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4`}
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
