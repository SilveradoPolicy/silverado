import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardWrapper = styled.div`
    ${tw`flex justify-center container flex-col md:flex-row bg-white px-4 transform -translate-y-28 md:-translate-y-1/4 lg:-translate-y-2/4`}
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
    ${tw`rounded-2xl bg-brand-1 text-white w-24 h-8 my-8`}
`;

const StyledHeader = styled.h4`
    ${tw`text-brand-1 text-ts-h4 mb-2`}
`;

const AgendaWrapper = styled.div`
    ${tw`flex flex-col`}
`;

const Time = styled.p`
    ${tw`text-brand-1 `}
`;

const AgendaItem = styled.p`
    ${tw``}
`;

const ItemWrapper = styled.div`
    ${tw`flex gap-2`}
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
                    <ItemWrapper>
                        <Time className="font-wt-bold">{time}</Time>
                        <AgendaItem>{item}</AgendaItem>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Time className="font-wt-bold">{time}</Time>
                        <AgendaItem>{item}</AgendaItem>
                    </ItemWrapper>
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
