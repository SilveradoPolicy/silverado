import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import StrategicAdvisor from './strategicAdvisor';

const StyledHeading = styled.h3`
    ${tw`capitalize mb-20 text-brand-1 text-ts-h3`}
`;

const GridWrapper = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10`}
`;

export default function StrategicAdvisorsSection({ advisors }) {
    return (
        <>
            <StyledHeading className="font-wt-thin">
                strategic advisors
            </StyledHeading>
            <GridWrapper>
                {advisors.map((item) => {
                    return <StrategicAdvisor data={item} key={item} />;
                })}
            </GridWrapper>
        </>
    );
}

StrategicAdvisorsSection.propTypes = {
    advisors: PropTypes.array.isRequired,
};
