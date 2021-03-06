import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import NewsFeatureComponent from './newsFeatureComponent';
import NewsEventList from './newsEventList';

const Section = styled.section`
    ${tw`container pt-32`}
`;
const StyledHeader = styled.h2`
    ${tw`text-brand-1 text-ts-h2 pt-4 font-bold`}
`;

const EventsWrapper = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8`}
`;
export default function NewsIndexHero({ events, featuredNewsItem }) {
    return (
        <Section>
            <StyledHeader>News</StyledHeader>
            <EventsWrapper>
                <NewsFeatureComponent data={featuredNewsItem} />
                <NewsEventList events={events} />
            </EventsWrapper>
        </Section>
    );
}

NewsIndexHero.propTypes = {
    featuredNewsItem: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
};
