import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import ImageNoName from './imageNoName';

const SponsorContainer = styled.div`
    ${tw`container`}
`;

const StyledHeading = styled.h4`
    ${tw`mb-16 text-brand-1 text-ts-h4`}
`;

const SponsorWrapper = styled.div`
    ${tw`flex justify-center gap-16 md:gap-28 mb-24 flex-wrap`}
`;

export default function SponsorList({ sponsors }) {
    return (
        <SponsorContainer>
            <StyledHeading className="font-wt-bold">Sponsors</StyledHeading>
            <SponsorWrapper>
                {sponsors.map((sponsor) => {
                    return <ImageNoName data={sponsor} key={sponsor.id} />;
                })}
            </SponsorWrapper>
        </SponsorContainer>
    );
}

SponsorList.propTypes = {
    sponsors: PropTypes.array.isRequired,
};
