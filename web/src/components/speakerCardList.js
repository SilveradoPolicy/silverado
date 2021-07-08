import React from 'react';
import PropTypes from 'prop-types';

import tw from 'twin.macro';
import styled from 'styled-components';

import SpeakerCard from './speakerCard';

const SpeakersWrapper = styled.div`
    ${tw`container lg:-mt-32`}
`;

const SpeakerCardWrapper = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-24`}
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
                    return <SpeakerCard data={speaker} key={speaker.id} />;
                })}
            </SpeakerCardWrapper>
        </SpeakersWrapper>
    );
}

SpeakerCardList.propTypes = {
    speakers: PropTypes.array.isRequired,
};
