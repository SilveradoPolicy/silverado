import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';

import PillarComponent from './pillarComponent';

const HeroWrapper = styled.section`
    ${tw`relative`}
`;

const StyledHeroImage = styled(Img)`
    ${tw`w-screen min-h-3/4-screen`}
`;

export default function PillarHero({ data, heroImage }) {
    const {
        asset: { fluid: imageData },
    } = heroImage;
    return (
        <HeroWrapper>
            <StyledHeroImage fluid={imageData} />
            <PillarComponent data={data} />
        </HeroWrapper>
    );
}

PillarHero.propTypes = {
    data: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
};
