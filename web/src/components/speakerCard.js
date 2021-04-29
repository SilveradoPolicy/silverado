import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import tw from 'twin.macro';
import styled from 'styled-components';

export default function SpeakerCard({ data }) {
    const {
        image: {
            childImageSharp: { fluid },
        },
        name,
        title,
    } = data;

    const SpeakerContainer = styled.div`
        ${tw`w-72 h-96 shadow-xl`}
    `;

    const SpeakerWrapper = styled.div`
        ${tw`p-2 text-brand-1 text-ts-body`}
    `;

    const SpeakerName = styled.h1`
        ${tw``}
    `;

    const SpeakerTitle = styled.h1`
        ${tw``}
    `;

    return (
        <SpeakerContainer>
            <Img fluid={fluid} />
            <SpeakerWrapper>
                <SpeakerName className="font-wt-bold">{name}</SpeakerName>
                <SpeakerTitle>{title}</SpeakerTitle>
            </SpeakerWrapper>
        </SpeakerContainer>
    );
}

SpeakerCard.propTypes = {
    data: PropTypes.object.isRequired,
};
