import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import NewsFeatureComponent from './newsFeatureComponent';
// import NewsEventList from './newsEventList';

const Section = styled.section`
    ${tw`container pt-32`}
`;
const StyledHeader = styled.h2`
    ${tw`text-brand-1 text-ts-h2 pt-4 font-bold`}
`;

const EventsWrapper = styled.div`
    ${tw`md:flex gap-4`}
`;
export default function NewsIndexHero({ newsEventInfo }) {
    // const eventsInfo = [
    //     {
    //         body:
    //             'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
    //         heading: 'Event Quisque id rhoncus ex',
    //         subheading: 'Vitae egestas',
    //     },
    //     {
    //         body:
    //             'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
    //         heading: 'Event Quisque id rhoncus ex',
    //         subheading: 'Vitae egestas',
    //     },
    //     {
    //         body:
    //             'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
    //         heading: 'Event Quisque id rhoncus ex',
    //         subheading: 'Vitae egestas',
    //     },
    //     {
    //         body:
    //             'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem.',
    //         heading: 'Event Quisque id rhoncus ex',
    //         subheading: 'Vitae egestas',
    //     },
    // ];
    return (
        <Section>
            <StyledHeader>News</StyledHeader>
            <EventsWrapper>
                <NewsFeatureComponent data={newsEventInfo} />
                {/* <NewsEventList events={eventsInfo} /> */}
            </EventsWrapper>
        </Section>
    );
}

NewsIndexHero.propTypes = {
    newsEventInfo: PropTypes.array.isRequired,
};
