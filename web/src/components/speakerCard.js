import React from 'react';
import PropTypes from 'prop-types';

import tw from 'twin.macro';
import styled from 'styled-components';
import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

export default function SpeakerCard({ data }) {
    const { image, name, title } = data;

    const StyledImg = styled.img`
        ${tw`w-full`}
    `;

    const SpeakerContainer = styled.div`
        ${tw`w-full shadow-xl`}
    `;

    const SpeakerWrapper = styled.div`
        ${tw`p-2 text-brand-1`}
    `;

    const SpeakerName = styled.p`
        ${tw`text-ts-body font-bold`}
    `;

    const SpeakerTitle = styled.p`
        ${tw`text-ts-body`}
    `;

    return (
        <SpeakerContainer>
            <StyledImg
                src={imageUrlFor(buildImageObj(image))
                    .width(500)
                    .height(Math.floor((5 / 4) * 500))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
            />
            <SpeakerWrapper>
                <SpeakerName>{name}</SpeakerName>
                <SpeakerTitle>{title}</SpeakerTitle>
            </SpeakerWrapper>
        </SpeakerContainer>
    );
}

SpeakerCard.propTypes = {
    data: PropTypes.object.isRequired,
};
