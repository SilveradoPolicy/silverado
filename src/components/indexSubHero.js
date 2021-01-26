import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import ParallelTransition from './icons/parallelTransition';

const StyledSection = styled.section`
    ${tw`pb-28 pt-10`}
    background: linear-gradient(
        180deg,
        #edf8f8 0%,
        rgba(237, 248, 248, 0) 100%
    );
`;

const GridWrapper = styled.div`
    ${tw`container px-5 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10`}
`;

const StyledHeading = styled.h2`
    ${tw`font-wt-bold max-w-prose text-ts-h4 text-brand-1`}
`;

const StyledBody = styled.p`
    ${tw`max-w-prose text-lg`}
`;

export default function IndexSubHero({ body, heading, hasTopTransition }) {
    return (
        <StyledSection>
            {hasTopTransition && <ParallelTransition />}
            <GridWrapper>
                <StyledHeading>{heading}</StyledHeading>
                <StyledBody>{body}</StyledBody>
            </GridWrapper>
        </StyledSection>
    );
}

IndexSubHero.defaultProps = {
    hasTopTransition: false,
};

IndexSubHero.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    hasTopTransition: PropTypes.bool,
};
