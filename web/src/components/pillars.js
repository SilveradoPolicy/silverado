import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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

const Card = styled(Link)`
    ${tw`flex flex-col items-center text-center`}
`;

const Heading = styled.h3`
    ${tw`max-w-prose mt-5 text-brand-1 text-ts-h4 font-bold`}
`;

const Body = styled.p`
    ${tw`text-black text-lg`}
`;

export default function Pillars({
    hasTopGradient,
    hasTopTransition,
    pillarData,
}) {
    console.log(`*****PILLARS*****`);
    console.log(pillarData);
    return (
        <StyledSection gradient={hasTopGradient}>
            {hasTopTransition && <ParallelTransition />}
            <Grid>
                {pillarData.edges.map((pillar) => {
                    console.log(pillar);
                    const { node } = pillar;
                    return (
                        <Card to={`/${node.slug.current}`} key={node.id}>
                            <Img
                                className="w-32"
                                fluid={node.pillarIcon.asset.fluid}
                            />
                            <Heading>Eco&sup2;Sec</Heading>
                            <Body>{node.shortDescription}</Body>
                        </Card>
                    );
                })}
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
    pillarData: PropTypes.object.isRequired,
};
