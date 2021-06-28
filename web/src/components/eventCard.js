import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { format } from 'date-fns';

const CardWrapper = styled.div`
    ${tw`container flex justify-center flex-col md:flex-row bg-white mx-4 px-4 mx-auto transform -translate-y-28 md:-translate-y-2/4`}
`;

const StyledTitle = styled.h2`
    ${tw`text-ts-h2 md:text-ts-h1 leading-10 md:leading-12 mt-4 md:mt-0 mb-2 font-bold`}
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

const StyledButton = styled.a`
    ${tw`inline-flex justify-center items-center rounded-2xl bg-brand-1 text-white h-8 my-4 px-8`}
`;

export default function EventCard({ data }) {
    const {
        dateAndTime,
        description,
        place,
        registrationUrl,
        subtitle,
        title,
    } = data[0];
    return (
        <CardWrapper>
            <InfoWrapper>
                <StyledTitle>{title}</StyledTitle>
                <StyledTitle>{subtitle}</StyledTitle>
                <StyledDate>
                    {format(Date.parse(dateAndTime), 'MM/dd/yyyy')}
                </StyledDate>
                <StyledDate>{format(Date.parse(dateAndTime), 'p')}</StyledDate>
                <StyledDate>{place}</StyledDate>
            </InfoWrapper>
            <DescriptionWrapper>
                <DescriptionBody>{description}</DescriptionBody>
                <StyledButton
                    href={registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Register
                </StyledButton>
            </DescriptionWrapper>
        </CardWrapper>
    );
}

EventCard.propTypes = {
    data: PropTypes.array.isRequired,
};
