import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardWrapper = styled.div`
    ${tw`flex justify-center flex-col md:flex-row bg-white mx-4 px-4 md:mx-10 transform -translate-y-28 md:-translate-y-2/4`}
`;

const StyledTitle = styled.h1`
    ${tw`text-ts-h2 md:text-ts-h1 leading-10 md:leading-12 mt-4 md:mt-0 mb-2`}
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
    ${tw`w-full md:w-1/2 p-2 md:p-7`}
`;
const DescriptionWrapper = styled.div`
    ${tw`w-full md:w-1/2 p-2 md:p-7`}
`;

const StyledButton = styled.button`
    ${tw`rounded-2xl bg-brand-1 text-white w-24 h-8 my-4`}
`;

const StyledHeader = styled.h4`
    ${tw`text-brand-1 text-ts-h4 mb-4`}
`;

const AgendaWrapper = styled.div`
    ${tw`grid grid-cols-3 grid-flow-row`}
`;

const Time = styled.p`
    ${tw`text-brand-1 place-content-end items-end`}
`;

const AgendaItem = styled.p`
    ${tw`col-span-2`}
`;

export default function EventInfoCard({ data }) {
    const {
        title,
        subtitle,
        date,
        eventtime,
        place,
        description,
        item,
        time,
    } = data;
    return (
        <CardWrapper>
            <InfoWrapper>
                <StyledTitle className="font-wt-bold">{title} </StyledTitle>
                <SubHeader>{subtitle}</SubHeader>
                <StyledDate>{date}</StyledDate>
                <StyledDate>{eventtime}</StyledDate>
                <StyledDate>{place}</StyledDate>
                <StyledButton type="button">Register</StyledButton>
                <StyledHeader className="font-wt-bold">Agenda</StyledHeader>
                <AgendaWrapper>
                    <Time className="font-wt-bold">{time}</Time>
                    <AgendaItem>{item}</AgendaItem>
                    <Time className="font-wt-bold">{time}</Time>
                    <AgendaItem>{item}</AgendaItem>
                    <Time className="font-wt-bold">{time}</Time>
                    <AgendaItem>{item}</AgendaItem>
                </AgendaWrapper>
            </InfoWrapper>
            <DescriptionWrapper>
                <StyledHeader className="font-wt-bold">
                    About the Event
                </StyledHeader>
                <DescriptionBody>{description}</DescriptionBody>
            </DescriptionWrapper>
        </CardWrapper>
    );
}

EventInfoCard.propTypes = {
    data: PropTypes.object.isRequired,
};
