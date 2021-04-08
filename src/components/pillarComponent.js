import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`min-h-3/4-screen flex flex-col justify-center pb-8 text-white`}
`;
const Heading = styled.h1`
    ${tw`mb-8 mt-4 lg:mt-4 text-brand-1 text-center text-ts-h2 md:text-ts-h1`}
`;
const Body = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4`}
`;
const IconWrapper = styled.div`
    ${tw`place-self-center w-24`}
`;

export default function PillarComponent({ data }) {
    const {
        body,
        heading,
        image: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <StyledSection>
            <IconWrapper>
                <Img fluid={fluid} />
            </IconWrapper>
            <Heading className="font-wt-bold">{heading}</Heading>
            <Body className="font-wt-thin">{body}</Body>
        </StyledSection>
    );
}

PillarComponent.propTypes = {
    data: PropTypes.object.isRequired,
};
