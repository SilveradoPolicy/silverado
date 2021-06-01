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
                className="w-screen md:hidden"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(600)
                    .height(600)
                    .fit('crop')
                    .auto('format')
                    .url()}
                alt=""
            />
            <img
                className="hidden md:w-screen md:block xl:hidden"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(1200)
                    .height((9 / 16) * 1200)
                    .fit('crop')
                    .auto('format')
                    .url()}
                alt=""
            />
            <img
                className="hidden xl:block xl:w-screen "
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(1400)
                    .height(Math.floor(0.4 * 1400))
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
