import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

import SingleEvent from './singleEvent';

const StyledEventsList = styled.div`
    ${tw`md:w-1/2 md:pl-4`}
`;

const Heading = styled.h3`
    ${tw`text-brand-1 text-ts-h2 font-extralight`}
`;

const StyledLink = styled(Link)`
    ${tw`underline text-brand-1 text-ts-body`}
`;

export default function NewsEventList({ events }) {
    return (
        <StyledEventsList>
            <Heading>Events</Heading>
            {events.map((event) => {
                return <SingleEvent data={event} key={event.id} />;
            })}
            <StyledLink to="#">View All Events</StyledLink>
        </StyledEventsList>
    );
}

NewsEventList.propTypes = {
    events: PropTypes.array.isRequired,
};
