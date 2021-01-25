import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import CtaLink from './ctaLink';
import ParallelTransition from './icons/parallelTransition';

const StyledSection = styled.section`
    ${tw`py-32 relative`}
    background: ${(props) =>
        props.bgGradient
            ? `linear-gradient(180deg, rgba(115, 150, 99, 0) 0%, rgba(115, 150, 99, 0.37) 100%);`
            : ''};
`;

const FlexWrapper = styled.div`
    ${tw`container px-4 md:px-0 flex flex-col items-center`}
`;

// todo: align naming convention
// todo: or extract styled body components to their own component

const StyledBody = styled.p`
    ${tw`max-w-prose mb-6 mx-auto text-center text-lg`}
`;

export default function CopyWithCTA({
    content,
    hasBgGradient,
    hasTopTransition,
}) {
    const { text } = content;
    const hasCta = Object.prototype.hasOwnProperty.call(content, 'cta');
    const { cta } = content;

    return (
        <StyledSection bgGradient={hasBgGradient}>
            {hasTopTransition && <ParallelTransition />}
            <FlexWrapper>
                <StyledBody>{text}</StyledBody>
                {hasCta && <CtaLink cta={cta} />}
            </FlexWrapper>
        </StyledSection>
    );
}

CopyWithCTA.defaultProps = {
    hasBgGradient: false,
    hasTopTransition: false,
};

// todo: update proptypes after sanity integration, should cover more that just object

CopyWithCTA.propTypes = {
    content: PropTypes.object.isRequired,
    hasBgGradient: PropTypes.bool,
    hasTopTransition: PropTypes.bool,
};
