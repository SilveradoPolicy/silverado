import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlogCard from './blogCard';

const PillarWrapper = styled.div`
    ${tw`container mb-24`}
`;

const Title = styled.h4`
    ${tw`text-brand-1 text-ts-h4 mb-4`}
`;

const PillarCardWrapper = styled.div`
    ${tw` flex flex-wrap gap-4`}
`;

export default function PillarCardList({ list }) {
    return (
        <PillarWrapper>
            <Title className="font-wt-bold">
                Recent Pillar News and Events
            </Title>
            <PillarCardWrapper>
                {list.map((post) => {
                    return <BlogCard data={post} />;
                })}
            </PillarCardWrapper>
        </PillarWrapper>
    );
}

PillarCardList.propTypes = {
    list: PropTypes.array.isRequired,
};
