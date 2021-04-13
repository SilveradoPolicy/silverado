import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardWrapper = styled.div`
    ${tw`flex justify-center bg-white mx-10 transform -translate-y-2/4`}
`;

const StyledTitle = styled.h1`
    ${tw`text-ts-h1 mb-2`}
`;
const SubHeader = styled.h4`
    ${tw`text-brand-3 text-base mb-4`}
`;
const StyledDate = styled.p`
    ${tw`text-ts-body`}
`;

const DescriptionBody = styled.p`
    ${tw`text-ts-body`}
`;

const InfoWrapper = styled.div`
    ${tw`w-1/2 p-7`}
`;
const DescriptionWrapper = styled.div`
    ${tw`w-1/2 p-7`}
`;

const StyledButton = styled.button`
    ${tw`rounded-2xl bg-brand-1 text-white w-24 h-8 my-4`}
`;

export default function EventCard({ data }) {
    const { title, subtitle, date, time, place, description } = data;
    return (
        <CardWrapper>
            <InfoWrapper>
                <StyledTitle className="font-wt-bold">{title} </StyledTitle>
                <SubHeader>{subtitle}</SubHeader>
                <StyledDate>{date}</StyledDate>
                <StyledDate>{time}</StyledDate>
                <StyledDate>{place}</StyledDate>
            </InfoWrapper>
            <DescriptionWrapper>
                <DescriptionBody>{description}</DescriptionBody>
                <StyledButton type="button">Register</StyledButton>
            </DescriptionWrapper>
        </CardWrapper>
    );
}

EventCard.propTypes = {
    data: PropTypes.object.isRequired,
};
