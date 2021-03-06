import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const StyledListItem = styled.li`
    ${tw`flex flex-row pt-4 relative`}

    :not(:last-child) {
        padding-bottom: 14px;
    }

    :not(:last-child):after {
        background: var(--brand-6);
        bottom: 0;
        content: '';
        height: 1px;
        position: absolute;
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    ${tw`flex flex-row`}
`;

const DateWrapper = styled.div`
    ${tw`flex flex-col mr-4`}
`;

const BodyWrapper = styled.div`
    ${tw`flex flex-col justify-center`}
`;

const Month = styled.p`
    ${tw`uppercase text-center font-bold`}
`;

const Date = styled.p`
    ${tw`text-6xl font-light`}
`;

const Body = styled.p`
    ${tw`capitalize font-bold`}
`;

export default function CalendarEvent({ data }) {
    const { link, date, month, line1, line2 } = data;
    return (
        <StyledListItem>
            <StyledLink to={link}>
                <DateWrapper>
                    <Month>{month}</Month>
                    <Date>{date}</Date>
                </DateWrapper>
                <BodyWrapper>
                    <Body>{line1}</Body>
                    <Body>{line2}</Body>
                </BodyWrapper>
            </StyledLink>
        </StyledListItem>
    );
}

// is PropTypes.shape better here? revisit after sanity integration
CalendarEvent.propTypes = {
    data: PropTypes.object.isRequired,
};
