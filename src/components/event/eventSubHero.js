import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
    ${tw`py-12`}

    background: linear-gradient(180deg, var(--gradient-blue) 0%, rgba(237, 248, 248, 0) 100%);
`;

const GridContainer = styled.div`
    ${tw`container grid grid-cols-1 md:grid-cols-2 gap-10`}
`;

const Body = styled.p`
    ${tw`text-lg`}
`;

const ListHeading = styled.p`
    ${tw`capitalize font-wt-thin mb-4 text-brand-1 text-ts-h4`}
`;

const ListItem = styled.li`
    ${tw`mb-2 text-lg`}
`;

export default function EventSubHero({ data }) {
    const {
        body,
        list: { heading, items },
    } = data;
    return (
        <Section>
            <GridContainer>
                <Body>{body}</Body>
                <div>
                    <ListHeading>{heading}</ListHeading>
                    <ul>
                        {items.map((item) => {
                            return <ListItem>{item}</ListItem>;
                        })}
                    </ul>
                </div>
            </GridContainer>
        </Section>
    );
}

EventSubHero.propTypes = {
    data: PropTypes.object.isRequired,
};
