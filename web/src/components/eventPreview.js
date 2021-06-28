import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const StyledEventPreview = styled(Link)`
    ${tw`block relative`}
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
    ${tw`text-ts-h4 text-brand-1 pt-4 font-bold`}
`;
const SubHeading = styled.h5`
    ${tw`text-sm text-brand-3 pt-1`}
`;
const Body = styled.p`
    ${tw`text-ts-body text-black my-4`}
`;
export default function EventPreview({ data }) {
    const {
        node: { description, slug, subtitle, title },
    } = data;

    return (
        <StyledEventPreview to={`/events/${slug.current}`}>
            <Heading>{title}</Heading>
            <SubHeading>{subtitle}</SubHeading>
            <Body>{description}</Body>
        </StyledEventPreview>
    );
}

EventPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
