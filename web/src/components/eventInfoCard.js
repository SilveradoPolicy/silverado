import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardWrapper = styled.div`
    ${tw`flex justify-center container flex-col md:flex-row bg-white px-4 transform -translate-y-28 md:-translate-y-1/4 lg:-translate-y-2/4`}
`;

const StyledTitle = styled.h1`
    ${tw`text-ts-h2 md:text-ts-h1 leading-10 md:leading-12 mt-4 md:mt-0 mb-2 font-bold`}
`;

const StyledSubTitle = styled.h2`
    ${tw`text-ts-h2 md:text-ts-h1 leading-10 md:leading-12 mt-4 md:mt-0 mb-2 font-bold`}
`;

// const SubHeader = styled.h4`
//     ${tw`text-brand-3 text-base mb-4`}
// `;

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

const StyledLink = styled.a`
    ${tw`inline-flex justify-center items-center rounded-2xl bg-brand-1 text-white h-8 my-8 px-4`}
`;

const StyledHeader = styled.h4`
    ${tw`text-brand-1 text-ts-h4 mb-2 font-bold`}
`;

// const AgendaWrapper = styled.div`
//     ${tw`flex flex-col`}
// `;

// const Time = styled.p`
//     ${tw`text-brand-1 font-bold`}
// `;

// const AgendaItem = styled.p`
//     ${tw``}
// `;

// const ItemWrapper = styled.div`
//     ${tw`flex gap-2`}
// `;

export default function EventInfoCard({ data }) {
    const {
        description,
        dateAndTime,
        place,
        registrationUrl,
        subtitle,
        title,
    } = data;

    return (
        <CardWrapper>
            <InfoWrapper>
                <StyledTitle>{title} </StyledTitle>
                {subtitle && <StyledSubTitle>{subtitle}</StyledSubTitle>}
                <StyledDate>
                    {format(Date.parse(dateAndTime), 'MM/dd/yyyy')}
                </StyledDate>
                <StyledDate>{format(Date.parse(dateAndTime), 'p')}</StyledDate>
                <StyledDate>{place}</StyledDate>
                <StyledLink
                    href={registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Register
                </StyledLink>
                {/* <StyledHeader>Agenda</StyledHeader>
                <AgendaWrapper>
                    <ItemWrapper>
                        <Time>{eventTime}</Time>
                        <AgendaItem>{item}</AgendaItem>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Time>{time}</Time>
                        <AgendaItem>{item}</AgendaItem>
                    </ItemWrapper>
                </AgendaWrapper> */}
            </InfoWrapper>
            <DescriptionWrapper>
                <StyledHeader>About the Event</StyledHeader>
                <DescriptionBody>{description}</DescriptionBody>
            </DescriptionWrapper>
        </CardWrapper>
    );
}

EventInfoCard.propTypes = {
    data: PropTypes.object.isRequired,
};
