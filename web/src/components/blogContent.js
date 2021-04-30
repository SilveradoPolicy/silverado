import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlockText from './block-content/blockText';

const ContentWrapper = styled.section`
    ${tw`container mb-14 xl:w-1/2`}
`;
const BlogTitle = styled.h2`
    ${tw`text-ts-h2 text-brand-1 mt-14`}
`;

const SubheaderWrapper = styled.div`
    ${tw`flex text-brand-3 text-ts-body mb-6`}
`;

const BodyWrapper = styled.div`
    ${tw`prose prose-lg max-w-full mb-8`}
`;
const PillarHeader = styled.h6`
    ${tw`text-brand-1 pt-8 mb-2`}
`;

const Pillar = styled.p`
    ${tw`text-white max-w-max px-4 py-1 mb-4`}

    background: ${({ bgColor }) => bgColor};
`;

const PillarWrapper = styled.div`
    &:before {
        background: var(--brand-1);
        border-radius: 16px;
        content: '';
        height: 4px;
        left: 1;
        position: absolute;
        width: 3rem;
    }
`;
export default function BlogContent({ data }) {
    const { categories, title, _rawBody } = data;
    return (
        <ContentWrapper>
            <BlogTitle className="font-wt-bold">{title}</BlogTitle>
            <SubheaderWrapper>Month 20, 2021 | Authors Name</SubheaderWrapper>
            <BodyWrapper>
                <BlockText blocks={_rawBody} />
            </BodyWrapper>
            <PillarWrapper className="font-wt-bold">
                <PillarHeader>Pillar</PillarHeader>
                {categories.map((category) => {
                    return (
                        <Pillar bgColor={category.color}>
                            {category.name}
                        </Pillar>
                    );
                })}
            </PillarWrapper>
        </ContentWrapper>
    );
}

BlogContent.propTypes = {
    data: PropTypes.object.isRequired,
};
