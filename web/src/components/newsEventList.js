import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

import EventPreview from './eventPreview';

const StyledEventsList = styled.div`
    ${tw`w-full`}
`;

const Heading = styled.h3`
    ${tw`text-brand-1 text-ts-h2 font-extralight`}
`;

const StyledLink = styled(Link)`
    ${tw`underline text-brand-1 text-ts-body`}
`;

export default function NewsEventList({ events }) {
    const currentDate = new Date();
    const filteredEvents = events.filter(
        (event) => event.node.dateAndTime > currentDate.toISOString(),
    );

    return (
        <StyledEventsList>
            <Heading>Events</Heading>
            {filteredEvents.map((event) => {
                return <EventPreview data={event} key={event.node.id} />;
            })}
            <StyledLink to="/events">View All Events</StyledLink>
        </StyledEventsList>
    );
}

NewsEventList.propTypes = {
    events: PropTypes.array.isRequired,
};
