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
            advisorFullName: 'Robert D. Atkinson',
        },
        {
            advisorFullName: 'Thomas P. Bossert',
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
            advisorFullName: 'Steven Glickman',
        },
        {
            advisorFullName: 'Jason Healey',
        },
        {
            advisorFullName: 'John C. (Chris) Inglis',
        },
        {
            advisorFullName: 'Jamil Jaffer',
        },
        {
            advisorFullName: 'Richard Ledgett',
        },
        {
            advisorFullName: 'Mark Linscott',
        },
        {
            advisorFullName: 'Evan Medeiros',
        },
        {
            advisorFullName: 'Keith Mularski',
        },
        {
            advisorFullName: 'Joseph Nye',
        },
        {
            advisorFullName: 'Matthew Reisman',
        },
        {
            advisorFullName: 'Matthew Rojanksy',
        },
        {
            advisorFullName: 'Nadia Schadlow',
        },
        {
            advisorFullName: 'Neill Sciarrone',
        },
        {
            advisorFullName: 'Matthew Spence',
        },
        {
            advisorFullName: 'Terence P. Stewart',
        },
        {
            advisorFullName: 'Jonathan Ward',
        },
        {
            advisorFullName: 'Michael R. Wessel',
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
