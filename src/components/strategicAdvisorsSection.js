import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import StrategicAdvisor from './strategicAdvisor';

const StyledHeading = styled.h3`
    ${tw`capitalize font-wt-thin mb-20 text-brand-1 text-ts-h3`}
`;

const GridWrapper = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10`}
`;

const testData = Array(20)
    .fill()
    .map((x, i) => i);

export default function StrategicAdvisorsSection() {
    return (
        <>
            <StyledHeading>strategic advisors</StyledHeading>
            <GridWrapper>
                {testData.map((item) => {
                    return <StrategicAdvisor key={item} />;
                })}
            </GridWrapper>
        </>
    );
}
