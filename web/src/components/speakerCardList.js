import React from 'react';
import PropTypes from 'prop-types';

import tw from 'twin.macro';
import styled from 'styled-components';

import SpeakerCard from './speakerCard';

const SpeakersWrapper = styled.div`
    ${tw`container`}
`;

const SpeakerCardWrapper = styled.div`
    ${tw`flex gap-4 mb-4 flex-wrap justify-center`}
`;

const Header = styled.h4`
    ${tw`text-brand-1 text-ts-h4 mb-4 font-bold`}
`;

export default function SpeakerCardList({ speakers }) {
    return (
        <SpeakersWrapper>
            <Header>Speakers</Header>
            <SpeakerCardWrapper>
                {speakers.map((speaker) => {
                    return <SpeakerCard data={speaker} />;
                })}
            </SpeakerCardWrapper>
        </SpeakersWrapper>
    );
}

SpeakerCardList.propTypes = {
    speakers: PropTypes.array.isRequired,
};
