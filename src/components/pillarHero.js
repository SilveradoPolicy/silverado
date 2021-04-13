import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledHeroImage = styled(Img)`
    ${tw`w-screen`}
`;

export default function PillarHero({ data }) {
    const {
        image: {
            childImageSharp: { fluid },
        },
    } = data;

    return (
        <>
            <StyledHeroImage fluid={fluid} />
        </>
    );
}

PillarHero.propTypes = {
    data: PropTypes.object.isRequired,
};
