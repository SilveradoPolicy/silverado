import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

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
    ${tw`space-x-8 mb-4 md:mb-8`}
`;
const StyledLink = styled(Link)`
    ${tw`text-ts-h5`}
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
`;

export default function BlogPostList({ blogposts, month }) {
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
    month: PropTypes.object.isRequired,
};
