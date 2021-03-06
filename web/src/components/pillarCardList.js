import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlogCard from './blogCard';

const PillarWrapper = styled.section`
    ${tw`container mb-24`}
`;

const Title = styled.h4`
    ${tw`text-brand-1 text-ts-h4 mb-4 font-bold`}
`;

const PillarCardWrapper = styled.div`
    ${tw` flex flex-wrap gap-4`}
`;
export default function PillarCardList({ list }) {
    return (
        <PillarWrapper>
            <Title>Related News and Events</Title>
            <PillarCardWrapper>
                {list.map((post) => {
                    return <BlogCard data={post} key={post.node.id} isShown />;
                })}
            </PillarCardWrapper>
        </PillarWrapper>
    );
}

PillarCardList.propTypes = {
    list: PropTypes.array.isRequired,
};
