import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const StyledEventPreview = styled.div`
    ${tw`relative`}
    &:before {
        background: var(--brand-6);
        border-radius: 16px;
        content: '';
        height: 1px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
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
export default function EventPreview({ data }) {
    const { body, heading, subheading } = data;

    return (
        <StyledEventPreview>
            <Heading className="font-wt-bold">{heading}</Heading>
            <SubHeading>{subheading}</SubHeading>
            <Body>{body}</Body>
        </StyledEventPreview>
    );
}

EventPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
