/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import CtaLink from './ctaLink';
import ParallelTransition from './icons/parallelTransition';

const StyledSection = styled.section`
    ${tw`pb-16 pt-16 relative`}
    background: ${(props) =>
        props.bottomGradient
            ? `linear-gradient(180deg, rgba(115, 150, 99, 0) 0%, rgba(115, 150, 99, 0.37) 100%);`
            : props.topGradient
            ? 'linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%);'
            : ''};
`;

const FlexWrapper = styled.div`
    ${tw`container flex flex-col items-center mb-8 mt-10`}
`;

// todo: align naming convention
// todo: or extract styled body components to their own component

const StyledBody = styled.p`
    ${tw`max-w-prose mx-auto text-center text-lg`}
`;

const StyledHeading = styled.h2`
    ${tw`mb-4 text-brand-1 text-ts-h2 font-bold`}
`;

export default function CopyWithCTA({
    content,
    hasBottomGradient,
    hasTopGradient,
    hasTopTransition,
    hasHeading,
}) {
    // all of this needs to be cleaned up once when adding cta's to pages in sanity
    const {
        buttonText,
        heading,
        internalLink,
        italText,
        text,
        textTwo,
    } = content;
    // remove this check, just use sanity query
    const hasCta = Object.prototype.hasOwnProperty.call(content, 'cta');
    // this is bad, align naming conventions so we're not renaming keys
    const cta = hasCta ? content.cta : { link: internalLink, text: buttonText };

    return (
        <StyledSection
            bottomGradient={hasBottomGradient}
            topGradient={hasTopGradient}
        >
            {hasTopTransition && <ParallelTransition />}
            <FlexWrapper>
                {hasHeading && <StyledHeading>{heading}</StyledHeading>}
                {text && (
                    <StyledBody>
                        {text}
                        <i>{italText}</i>
                        <br />
                        <br />
                        {textTwo}
                    </StyledBody>
                )}
                {(hasCta || internalLink) && <CtaLink cta={cta} />}
            </FlexWrapper>
        </StyledSection>
    );
}

CopyWithCTA.defaultProps = {
    hasBottomGradient: false,
    hasTopGradient: false,
    hasTopTransition: false,
    hasHeading: false,
};

// todo: update proptypes after sanity integration, should cover more that just object

CopyWithCTA.propTypes = {
    content: PropTypes.object.isRequired,
    hasBottomGradient: PropTypes.bool,
    hasTopGradient: PropTypes.bool,
    hasTopTransition: PropTypes.bool,
    hasHeading: PropTypes.bool,
};
