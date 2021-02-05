import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EventsListMonth from './eventsListMonth';

const Section = styled.section`
    ${tw`pb-8 pt-16`}

    background: linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%)
`;

const Container = styled.div`
    ${tw`container`}
`;

export default function EventsIndexList({ events }) {
    return (
        <Section>
            <Container>
                {events.map((item) => {
                    return <EventsListMonth data={item} />;
                })}
            </Container>
        </Section>
    );
}

EventsIndexList.propTypes = {
    events: PropTypes.array.isRequired,
};
