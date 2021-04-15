import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'twin.macro';

import BlogCard from './blogCard';

const BlogPostsWrapper = styled.section`
    ${tw`container mt-4 md:mt-20`}
`;

const PostWrapper = styled.div`
    ${tw`flex flex-wrap md:gap-4 relative`}
`;

const LinkWrapper = styled.div`
    ${tw`space-x-8`}
`;
const StyledLink = styled(Link)`
    ${tw`text-ts-h5`}
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
`;

export default function BlogPostList({ blogposts }) {
    const [activeLink, setActiveLink] = useState(null);
    const pillars = [
        {
            title: 'All',
            id: '01',
        },
        {
            title: 'Eco²Sec',
            id: '02',
        },
        {
            title: 'International Trade & Security',
            id: '03',
        },
        {
            title: 'Cybersecurity',
            id: '04',
        },
    ];
    return (
        <BlogPostsWrapper>
            <LinkWrapper>
                {pillars.map((pillar) => {
                    return (
                        <StyledLink
                            key={pillar.id}
                            to="#"
                            className="font-wt-bold"
                            onClick={() => setActiveLink(pillar.id)}
                            isActive={activeLink === pillar.id}
                        >
                            {pillar.title}
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
