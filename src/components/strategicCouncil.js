import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import HonoraryMembersSection from './honoraryMembers';
import StrategicAdvisorsSection from './strategicAdvisorsSection';

const StyledSection = styled.section`
    ${tw`container mb-40`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-wt-bold mb-8 text-brand-1 text-ts-h2`}
`;

export default function StrategicCouncil({ honoraryMembers }) {
    const strategicAdvisors = [
        {
            advisorFullName: 'Rob Atkinson',
        },
        {
            advisorFullName: 'Tom Bossert',
        },
        {
            advisorFullName: 'Nick Consonery',
        },
        {
            advisorFullName: 'Wendy Cutler',
        },
        {
            advisorFullName: 'Richard Danzig',
        },
        {
            advisorFullName: 'Mark Galeotti',
        },
        {
            advisorFullName: 'Steve Healey',
        },
        {
            advisorFullName: 'Chris Inglis',
        },
        {
            advisorFullName: 'Jamil Jaffer',
        },
        {
            advisorFullName: 'Rick Ledgett',
        },
        {
            advisorFullName: 'Mark Linscott',
        },
        {
            advisorFullName: 'Bill McElnea',
        },
        {
            advisorFullName: 'Evan Medeiros',
        },
        {
            advisorFullName: 'Keith Mularski',
        },
        {
            advisorFullName: 'Robert Nye',
        },
        {
            advisorFullName: 'Matthew Reisman',
        },
        {
            advisorFullName: 'Matt Rojanksy',
        },
    ];
    return (
        <StyledSection>
            <StyledHeading>strategic council</StyledHeading>
            <HonoraryMembersSection honoraryMembers={honoraryMembers} />
            <StrategicAdvisorsSection advisors={strategicAdvisors} />
        </StyledSection>
    );
}

StrategicCouncil.propTypes = {
    honoraryMembers: PropTypes.array.isRequired,
};
