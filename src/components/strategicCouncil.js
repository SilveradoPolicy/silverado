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
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Tom Bossert',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Nick Consonery',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Wendy Cutler',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Richard Danzig',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Mark Galeotti',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Steve Healey',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Chris Inglis',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Jamil Jaffer',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Rick Ledgett',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Mark Linscott',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Bill McElnea',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Evan Medeiros',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Keith Mularski',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Robert Nye',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Matthew Reisman',
            title: 'Sample Title',
        },
        {
            advisorFullName: 'Matt Rojanksy',
            title: 'Sample Title',
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
