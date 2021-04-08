import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
    ${tw`pb-12 pt-6`}

    background: linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%)
`;

const DescriptionWrapper = styled.div`
    ${tw`container w-9/12`}
`;

const PillarTitle = styled.h3`
    ${tw`text-brand-1 text-ts-h3 mb-6`}
`;

const PillarDescriptionText = styled.p`
    ${tw`text-ts-body`}
`;

export default function PillarDescription({ data }) {
    const { title, description } = data;
    return (
        <Section>
            <DescriptionWrapper>
                <PillarTitle className="text-wt-thin">{title}</PillarTitle>
                <PillarDescriptionText>{description}</PillarDescriptionText>
            </DescriptionWrapper>
        </Section>
    );
}

PillarDescription.propTypes = {
    data: PropTypes.object.isRequired,
};
