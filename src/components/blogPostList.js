import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlogCard from './blogCard';

const BlogPostsWrapper = styled.section`
    ${tw`container`}
`;

const PostWrapper = styled.div`
    ${tw`flex gap-4 relative my-20`}
`;

const StyledLink = styled(Link)`
    ${tw`text-ts-h5`}
`;

export default function BlogPostList({ blogposts }) {
    const pillars = ['hello', 'howareyou', 'weewoo'];
    return (
        <BlogPostsWrapper>
            {pillars.map((pillar) => {
                return <StyledLink to="/#">{pillar}</StyledLink>;
            })}
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
};
