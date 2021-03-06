import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`container w-11/12 bg-white transform -translate-y-20 md:-translate-y-1/2 flex flex-col justify-center`}
`;
const Heading = styled.h1`
    ${tw`mb-8 mt-4 lg:mt-4 text-brand-1 text-center text-ts-h2 md:text-ts-h1 font-bold`}
`;
const Body = styled.p`
    ${tw`max-w-prose mx-auto text-black text-center text-ts-h4 mb-2 font-light`}
`;
const IconWrapper = styled.div`
    ${tw`place-self-center w-24 mt-10`}
`;

export default function PillarComponent({ data }) {
    const {
        pillarName,
        pillarIcon: {
            asset: { fluid: iconImageData },
        },
        shortDescription,
    } = data;

    return (
        <StyledSection>
            <IconWrapper>
                <Img fluid={iconImageData} />
            </IconWrapper>
            <Heading>{pillarName}</Heading>
            <Body>{shortDescription}</Body>
        </StyledSection>
    );
}

PillarComponent.propTypes = {
    data: PropTypes.object.isRequired,
};
