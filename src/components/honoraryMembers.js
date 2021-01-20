import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import ImageWithName from './imageWithName';

const StyledHeading = styled.h3`
    ${tw`capitalize font-wt-thin mb-20 text-brand-1 text-ts-h3`}
`;

const GridWrapper = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-24`}
`;

export default function HonoraryMembersSection({ honoraryMembers }) {
    return (
        <>
            <StyledHeading>honorary members</StyledHeading>
            <GridWrapper>
                {honoraryMembers.map((item) => {
                    return <ImageWithName data={item} key={item.id} />;
                })}
            </GridWrapper>
        </>
    );
}

HonoraryMembersSection.propTypes = {
    honoraryMembers: PropTypes.array.isRequired,
};
