import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';
import BlockText from './block-content/blockText';

const Section = styled.section`
    ${tw`pb-12 pt-9`}

    background: linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%)
`;

const DescriptionWrapper = styled.div`
    ${tw`container w-8/12`}
`;

const PillarTitle = styled.h3`
    ${tw`text-brand-1 text-ts-h3 mb-6`}
`;

const PillarDescriptionText = styled.div`
    ${tw`prose max-w-full text-lg`}
`;

export default function PillarDescription({ data }) {
    const { longDescriptionTitle, _rawLongDescription } = data;
    return (
        <Section>
            <DescriptionWrapper>
                <PillarTitle className="text-wt-thin">
                    {longDescriptionTitle}
                </PillarTitle>
                <PillarDescriptionText>
                    <BlockText blocks={_rawLongDescription} />
                </PillarDescriptionText>
            </DescriptionWrapper>
        </Section>
    );
}

PillarDescription.propTypes = {
    data: PropTypes.object.isRequired,
};
