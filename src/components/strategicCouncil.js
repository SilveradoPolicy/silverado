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
            advisorFullName:
                'Heather Adkins—Senior Director of Information Security at Google',
        },
        {
            advisorFullName:
                'Michael Allen—Managing Director, Beacon Global Strategies',
        },
        {
            advisorFullName:
                'Robert D. Atkinson—Founder and President, the Information Technology and Innovation Foundation',
        },
        {
            advisorFullName:
                'Jeremy Bash—Founder and Managing Director, Beacon Global Strategies',
        },
        {
            advisorFullName: 'Thomas P. Bossert—President, TrinityCyber, Inc.',
        },
        {
            advisorFullName:
                'Julie Cerqueira—Executive Director, the U.S. Climate Alliance',
        },
        {
            advisorFullName:
                'John Conger—President, Conger Strategies and Solutions, LLC; Director, the Center for Climate and Security',
        },
        {
            advisorFullName:
                'Nicholas Consonery—Director of Global Markets Research and Strategy, The Eurasia Group',
        },
        {
            advisorFullName:
                'Wendy Cutler—Vice President, the Asia Society Policy Institute',
        },
        {
            advisorFullName:
                'Ivo Daalder—President, the Chicago Council on Global Affairs',
        },
        {
            advisorFullName:
                'Richard Danzig—Former Secretary of the Navy, Senior Intelligence and Defense Consultant',
        },
        {
            advisorFullName:
                'Mark Galeotti—Principal Director, Mayak Intelligence',
        },
        {
            advisorFullName: 'Steve Glickman—Founder and CEO, Develop LLC',
        },
        {
            advisorFullName:
                'Jason Healey—Senior Research Scholar, Columbia University’s School for International and Public Affairs',
        },
        {
            advisorFullName:
                'John C. (Chris) Inglis— Robert Looker Distinguished Chair for Cyber Operations, U.S. Naval Academy',
        },
        {
            advisorFullName:
                'Jamil Jaffer—Founder and Executive Director, the National Security Institute',
        },
        {
            advisorFullName:
                'Richard H. Ledgett, Jr. (Rick)—Former Deputy Director, National Security Agency',
        },
        {
            advisorFullName:
                'Mark Linscott—Senior Advisor, The Asia Group; Senior Fellow, the Atlantic Council’s South Asia Center',
        },
        {
            advisorFullName:
                'Jeanette Manfra—Director for Risk and Compliance, Google Cloud',
        },
        {
            advisorFullName:
                'Evan Medeiros—Penner Family Chair in Asian Studies at the Edmund A. Walsh School of Foreign Service, Georgetown University',
        },
        {
            advisorFullName:
                'Keith Mularksi—Managing Director, Advisory-Cybersecurity for Ernst & Young LLP',
        },
        {
            advisorFullName:
                'Joseph S. Nye, Jr.—University Distinguished Service Professor emeritus and former Dean of the Kennedy School of Government, Harvard University',
        },
        {
            advisorFullName:
                'Scott N. Paul—President, the Alliance for American Manufacturing',
        },
        {
            advisorFullName:
                'Matthew Reisman—Director, International Trade Policy, Microsoft',
        },
        {
            advisorFullName:
                'Matthew Rojansky—Director, the Wilson Center’s Kennan Institute',
        },
        {
            advisorFullName: 'Nadia Schadlow—Founder, Scout Strategy Group LLC',
        },
        {
            advisorFullName:
                'Marie O’Neill Sciarrone—Chief Executive Officer, Tribal Tech',
        },
        {
            advisorFullName:
                'Matthew Spence—Managing Director, Guggenheim Partners',
        },
        {
            advisorFullName:
                'Terence P. Stewart—Former Managing Partner, Law Offices of Stewart and Stewart',
        },
        {
            advisorFullName: 'Dr. Jonathan Ward—Founder, Altas Organization',
        },
        {
            advisorFullName:
                'Michael R. Wessel—President, The Wessel Group Incorporated',
        },
        {
            advisorFullName:
                'Amy Zegart—Senior Fellow, Freeman Spogli Institute for International Studies at Stanford University; Davies Family Senior Fellow at the Hoover Institution',
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
