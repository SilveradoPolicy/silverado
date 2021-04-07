import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlogCard from './blogCard';

const BlogPostsWrapper = styled.section`
    ${tw`container mt-20`}
`;

const PostWrapper = styled.div`
    ${tw`flex gap-4 relative`}
`;

const LinkWrapper = styled.div`
    ${tw`space-x-8`}
`;
const StyledLink = styled(Link)`
    ${tw`text-ts-h5`}
`;

export default function BlogPostList({ blogposts }) {
    const pillars = [
        'All',
        'Eco²Sec',
        'International Trade & Security',
        'Cybersecurity',
    ];
    return (
        <BlogPostsWrapper>
            <LinkWrapper>
                {pillars.map((pillar) => {
                    return (
                        <StyledLink to="/#" className="font-wt-bold">
                            {pillar}
                        </StyledLink>
                    );
                })}
            </LinkWrapper>
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
