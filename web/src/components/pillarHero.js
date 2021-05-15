import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

import PillarComponent from './pillarComponent';

const HeroWrapper = styled.section`
    ${tw`relative`}
`;

export default function PillarHero({ data, heroImage }) {
    return (
        <HeroWrapper>
            <img
                className="w-screen"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(1400)
                    .height(Math.floor((9 / 16) * 1400))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
            />
            <PillarComponent data={data} />
        </HeroWrapper>
    );
}

PillarHero.propTypes = {
    data: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
};
