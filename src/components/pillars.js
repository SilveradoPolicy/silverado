import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EcoSecIcon from './icons/ecoSec';
import InternationalTradeAndSecurityIcon from './icons/internationalTradeAndSecurity';
import CybersecurityIcon from './icons/cybersecurity';
import ParallelTransition from './icons/parallelTransition';

const StyledSection = styled.section`
    ${tw`relative py-32`}
    background: ${(props) =>
        props.gradient
            ? `linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%);`
            : ''};
`;

const Grid = styled.div`
    ${tw`container gap-10 grid grid-cols-1 md:grid-cols-3`}
`;

const Card = styled.div`
    ${tw`flex flex-col items-center text-center`}
`;

const Heading = styled.h3`
    ${tw`max-w-prose mt-5 text-brand-1 text-ts-h4`}
`;

const Body = styled.p`
    ${tw`text-black text-lg`}
`;

export default function Pillars({ hasTopGradient, hasTopTransition }) {
    return (
        <StyledSection gradient={hasTopGradient}>
            {hasTopTransition && <ParallelTransition />}
            <Grid>
                <Card>
                    <EcoSecIcon />
                    <Heading className="font-wt-bold">Eco&sup2;Sec</Heading>
                    <Body>
                        Foregrounding the nexus of economic and ecological risk
                        and opportunity to meet the 21st-century climate
                        imperative.
                    </Body>
                </Card>
                <Card>
                    <InternationalTradeAndSecurityIcon />
                    <Heading>Trade and Industrial Security</Heading>
                    <Body>
                        Developing a trade and industrual strategy that supports
                        American workers, secures America&#39;s supply chains,
                        and advances equitable trade practices.
                    </Body>
                </Card>
                <Card>
                    <CybersecurityIcon />
                    <Heading>Cybersecurity</Heading>
                    <Body>
                        Modernizing America&#39;s cyber strategy to enhance
                        deterrence, defend against cyber attacks, and protect
                        intellectual property and national security.
                    </Body>
                </Card>
            </Grid>
        </StyledSection>
    );
}

Pillars.defaultProps = {
    hasTopGradient: false,
    hasTopTransition: false,
};

Pillars.propTypes = {
    hasTopGradient: PropTypes.bool,
    hasTopTransition: PropTypes.bool,
};
