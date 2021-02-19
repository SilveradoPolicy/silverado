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
    ${tw`capitalize mb-8 text-brand-1 text-ts-h2`}
`;

export default function StrategicCouncil({ honoraryMembers }) {
    const strategicAdvisors = [
        {
            advisorFullName: 'Heather Adkins',
        },
        {
            advisorFullName: 'Michael Allen',
        },
        {
            advisorFullName: 'Robert D. Atkinson',
        },
        {
            advisorFullName: 'Jeremy Bash',
        },
        {
            advisorFullName: 'Thomas P. Bossert',
        },
        {
            advisorFullName: 'Julie Cerqueira',
        },
        {
            advisorFullName: 'Nicholas Consonery',
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
            advisorFullName: 'Jeannette Manfra',
        },
        {
            advisorFullName: 'Evan Medeiros',
        },
        {
            advisorFullName: 'Joseph Nye',
        },
        {
            advisorFullName: 'Scott Paul',
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
        {
            advisorFullName: 'Amy Zegart',
        },
    ];
    return (
        <StyledSection>
            <StyledHeading className="font-wt-bold">
                strategic council
            </StyledHeading>
            <HonoraryMembersSection honoraryMembers={honoraryMembers} />
            <StrategicAdvisorsSection advisors={strategicAdvisors} />
        </StyledSection>
    );
}

StrategicCouncil.propTypes = {
    honoraryMembers: PropTypes.array.isRequired,
};
