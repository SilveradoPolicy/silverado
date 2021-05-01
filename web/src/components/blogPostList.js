import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlogCard from './blogCard';

const BlogPostsWrapper = styled.section`
    ${tw`container mt-4 md:mt-8`}
`;

const PostWrapper = styled.div`
    ${tw`flex flex-wrap gap-1 md:gap-4 relative`}
`;

const MonthWrapper = styled.h4`
    ${tw`text-ts-h4 text-brand-1`}
`;

const LinkWrapper = styled.div`
    ${tw`flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-8`}
`;
const StyledButton = styled.button`
    ${tw`text-ts-h5 relative`}

    color: ${({ color }) => color};

    &.isActive {
        &:after {
            background-color: currentColor;
            bottom: 0;
            content: '';
            height: 3px;
            left: 0;
            position: absolute;
            transform: translateY(100%);
            width: 100%;
        }
    }
`;

export default function BlogPostList({ blogposts, categories, month }) {
    const [activeFilter, setActiveFilter] = useState('#000');

    // create all filter object
    const all = {
        node: {
            color: '#000',
            id: '#000',
            name: 'All',
        },
    };

    // add all filter object to categories array
    const categoriesArray = [all, ...categories];

    return (
        <BlogPostsWrapper>
            <LinkWrapper>
                {categoriesArray.map((item) => {
                    const { node } = item;

                    return (
                        <StyledButton
                            key={node.id}
                            color={node.color}
                            className={`font-wt-bold ${
                                activeFilter === node.id ? 'isActive' : ''
                            }`}
                            onClick={() => setActiveFilter(node.id)}
                            isActive={activeFilter === node.id}
                            type="button"
                        >
                            {node.name}
                        </StyledButton>
                    );
                })}
            </LinkWrapper>
            {month && (
                <MonthWrapper className="font-wt-thin">{month}</MonthWrapper>
            )}
            <PostWrapper>
                {blogposts.map((post) => {
                    return <BlogCard data={post} />;
                })}
            </PostWrapper>
        </BlogPostsWrapper>
    );
}

BlogPostList.propTypes = {
    blogposts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    month: PropTypes.object.isRequired,
};
