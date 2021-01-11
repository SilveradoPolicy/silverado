import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EcoSecIcon from './icons/ecoSec';
import InternationalTradeAndSecurityIcon from './icons/internationalTradeAndSecurity';
import CybersecurityIcon from './icons/cybersecurity';

const StyledSection = styled.section`
    ${tw`container gap-10 grid grid-cols-1 md:grid-cols-3 my-20`}
`;

const Card = styled.div`
    ${tw`flex flex-col items-center text-center`}
`;

const Heading = styled.h3`
    ${tw`font-bold max-w-prose mt-5 text-brand-1 text-ts-h4`}
`;

const Body = styled.p`
    ${tw`text-brand-1 text-lg`}
`;

export default function Pillars() {
    return (
        <StyledSection>
            <Card>
                <EcoSecIcon />
                <Heading>Testing</Heading>
                <Body>
                    Cras iaculis, lectus a condimentum lacinia, risus ex varius
                    est, vel fermentum magna enim sed eros.
                </Body>
            </Card>
            <Card>
                <InternationalTradeAndSecurityIcon />
                <Heading>Testing a long title here</Heading>
                <Body>
                    Cras iaculis, lectus a condimentum lacinia, risus ex varius
                    est, vel fermentum magna enim sed eros.
                </Body>
            </Card>
            <Card>
                <CybersecurityIcon />
                <Heading>Testing a really long title here</Heading>
                <Body>
                    Cras iaculis, lectus a condimentum lacinia, risus ex varius
                    est, vel fermentum magna enim sed eros.
                </Body>
            </Card>
        </StyledSection>
    );
}
