/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const StyledUL = styled.ul`
    ${tw`hidden md:flex flex-row items-center`}
`;

// link hover state utility classes applied as className on gatsby Link component
const StyledLI = styled.li`
    ${tw`ml-8 capitalize font-wt-bold text-lg transition-colors duration-700 ease-in-out relative`}

    color: ${({ isIndexPage, isScrolled }) =>
        !isIndexPage
            ? `var(--brand-1)`
            : isIndexPage && !isScrolled
            ? `var(--white)`
            : `var(--brand-1)`}
`;

export default function MainNav({ isIndexPage, isScrolled, navItems }) {
    return (
        <StyledUL>
            {navItems.map((item) => {
                return (
                    <StyledLI
                        isIndexPage={isIndexPage}
                        isScrolled={isScrolled}
                        key={item.text}
                    >
                        <Link className="link hover:link-hover" to={item.link}>
                            {item.text}
                        </Link>
                    </StyledLI>
                );
            })}
        </StyledUL>
    );
}

MainNav.propTypes = {
    isIndexPage: PropTypes.bool.isRequired,
    isScrolled: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired,
};
