import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledName = styled.h5`
    ${tw`capitalize font-wt-bold text-brand-1 text-ts-h5`}
`;

const StyledTitle = styled.p`
    ${tw`capitalize font-wt-thin text-brand-1 text-ts-h5`}
`;

export default function StrategicAdvisor() {
    return (
        <div>
            <StyledName>first last name</StyledName>
            <StyledTitle>title</StyledTitle>
            <StyledTitle>pillar</StyledTitle>
        </div>
    );
}
