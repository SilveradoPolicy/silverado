import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import SingleEvent from './singleEvent';

const StyledEventsList = styled.div`
    ${tw`w-1/2 pl-4`}
`;

const Heading = styled.h3`
    ${tw`text-brand-1 text-ts-h2 font-extralight`}
`;

export default function NewsEventList({ events }) {
    console.log(events);

    return (
        <StyledEventsList>
            <Heading>Events</Heading>
            {events.map((event) => {
                return <SingleEvent data={event} key={event.id} />;
            })}
        </StyledEventsList>
    );
}

NewsEventList.propTypes = {
    events: PropTypes.array.isRequired,
};
