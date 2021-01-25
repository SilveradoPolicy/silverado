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
    ${tw`container px-5 md:px-0 gap-10 grid grid-cols-1 md:grid-cols-3`}
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

export default function Pillars({ hasTopGradient, hasTopTransition }) {
    return (
        <StyledSection gradient={hasTopGradient}>
            {hasTopTransition && <ParallelTransition />}
            <Grid>
                <Card>
                    <EcoSecIcon />
                    <Heading>Testing</Heading>
                    <Body>
                        Cras iaculis, lectus a condimentum lacinia, risus ex
                        varius est, vel fermentum magna enim sed eros.
                    </Body>
                </Card>
                <Card>
                    <InternationalTradeAndSecurityIcon />
                    <Heading>Testing a long title here</Heading>
                    <Body>
                        Cras iaculis, lectus a condimentum lacinia, risus ex
                        varius est, vel fermentum magna enim sed eros.
                    </Body>
                </Card>
                <Card>
                    <CybersecurityIcon />
                    <Heading>Testing a really long title here</Heading>
                    <Body>
                        Cras iaculis, lectus a condimentum lacinia, risus ex
                        varius est, vel fermentum magna enim sed eros.
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
