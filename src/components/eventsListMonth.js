import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const Heading = styled.h2`
    ${tw`capitalize font-wt-thin text-ts-h3 text-brand-1`}
`;

const ListItem = styled.li`
    ${tw`flex mb-16 text-brand-1`}
`;

const Date = styled.p`
    ${tw`flex-initial font-wt-thin pr-4 md:px-8 pb-8 text-6xl md:text-8xl`}
`;

const ContentContainer = styled.div`
    ${tw`flex-auto lg:ml-16`}
`;

const EventHeading = styled.h3`
    ${tw`text-ts-h4 font-wt-bold mb-2`}
`;

const EventSubHeading = styled.p`
    ${tw`text-ts-h4 font-wt-bold`}
`;

const EventBody = styled.p`
    ${tw`my-8 text-black text-lg`}
`;

const StyledLink = styled(Link)`
    ${tw`capitalize font-wt-thin text-lg`}
`;

export default function EventsListMonth({ data }) {
    const { events } = data;
    return (
        <>
            <Heading>{data.month}</Heading>
            <ul>
                {events.map((item) => {
                    return (
                        <ListItem key={`${item.date}`}>
                            <Date>{item.date}</Date>
                            <ContentContainer>
                                <EventHeading>{item.eventName}</EventHeading>
                                <EventSubHeading>
                                    {item.eventHeading}
                                </EventSubHeading>
                                <EventBody>{item.body}</EventBody>
                                <StyledLink to={`/${item.link}`}>
                                    learn more
                                </StyledLink>
                            </ContentContainer>
                        </ListItem>
                    );
                })}
            </ul>
        </>
    );
}

EventsListMonth.propTypes = {
    data: PropTypes.object.isRequired,
};
