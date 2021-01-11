import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import CtaLink from './ctaLink';

const StyledSection = styled.section`
    ${tw`py-20`}
    background: ${(props) =>
        props.bgGradient
            ? `linear-gradient(180deg, rgba(115, 150, 99, 0) 0%, rgba(115, 150, 99, 0.37) 100%);`
            : ''};
`;

const FlexWrapper = styled.div`
    ${tw`container flex flex-col items-center`}
`;

// todo: align naming convention
// todo: or extract styled body components to their own component

const StyledBody = styled.p`
    ${tw`max-w-prose mb-6 mx-auto text-center text-lg`}
`;

export default function CopyWithCTA({ content, hasBgGradient }) {
    const { text } = content;
    const hasCta = Object.prototype.hasOwnProperty.call(content, 'cta');
    const { cta } = content;

    return (
        <StyledSection bgGradient={hasBgGradient}>
            <FlexWrapper>
                <StyledBody>{text}</StyledBody>
                {hasCta && <CtaLink cta={cta} />}
            </FlexWrapper>
        </StyledSection>
    );
}

CopyWithCTA.defaultProps = {
    hasBgGradient: false,
};

// todo: update proptypes after sanity integration, should cover more that just object

CopyWithCTA.propTypes = {
    content: PropTypes.object.isRequired,
    hasBgGradient: PropTypes.bool,
};
