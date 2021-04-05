import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSingleEvent = styled.div`
    &:before {
        background: var(--brand-6);
        border-radius: 16px;
        content: '';
        height: 1px;
        position: absolute;
        width: 45%;
    }
    @media only screen and (max-width: 768px) {
        &:before {
            width: 95%;
        }
    }
`;
const Heading = styled.h5`
    ${tw`text-ts-h4 text-brand-1 pt-4`}
`;
const SubHeading = styled.h5`
    ${tw`text-sm text-brand-3 pt-1`}
`;
const Body = styled.p`
    ${tw`text-ts-body text-black my-4`}
`;
export default function SingleEvent({ data }) {
    const { body, heading, subheading } = data;

    return (
        <StyledSingleEvent>
            <Heading className="font-wt-bold">{heading}</Heading>
            <SubHeading>{subheading}</SubHeading>
            <Body>{body}</Body>
        </StyledSingleEvent>
    );
}

SingleEvent.propTypes = {
    data: PropTypes.object.isRequired,
};
