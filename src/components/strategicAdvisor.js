import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledName = styled.h5`
    ${tw`capitalize text-brand-1 text-ts-h5`}
`;

const StyledTitle = styled.p`
    ${tw`capitalize text-brand-1 text-ts-h5`}
`;

export default function StrategicAdvisor({ data }) {
    const { advisorFullName, title } = data;
    return (
        <div>
            <StyledName className="font-wt-bold">{advisorFullName}</StyledName>
            <StyledTitle className="font-wt-thin">{title}</StyledTitle>
        </div>
    );
}

StrategicAdvisor.propTypes = {
    data: PropTypes.object.isRequired,
};
