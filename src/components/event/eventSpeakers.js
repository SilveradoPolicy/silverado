import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import ImageWithName from '../imageWithName';

const Section = styled.section`
    ${tw`container py-8`}
`;

const StyledHeading = styled.h3`
    ${tw`capitalize font-wt-thin mb-20 text-brand-1 text-ts-h3`}
`;

const GridWrapper = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-24`}
`;

export default function HonoraryMembersSection({ speakers, sponsors }) {
    return (
        <Section>
            <StyledHeading>speakers</StyledHeading>
            <GridWrapper>
                {speakers.map((item) => {
                    return <ImageWithName data={item} key={item.id} />;
                })}
            </GridWrapper>
            <StyledHeading>sponsors</StyledHeading>
            <GridWrapper>
                {sponsors.map((item) => {
                    return <ImageWithName data={item} key={item.id} />;
                })}
            </GridWrapper>
        </Section>
    );
}

HonoraryMembersSection.propTypes = {
    speakers: PropTypes.array.isRequired,
    sponsors: PropTypes.array.isRequired,
};
