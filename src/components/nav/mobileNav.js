/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const MobileNavButton = styled.button`
    ${tw`absolute flex flex-col justify-between md:hidden h-8 w-10 right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10`}
`;

const StyledSpan = styled.span`
    ${tw`h-1 rounded-full bg-black transform-gpu transition transition-all duration-300 w-full origin-right`}

    background-color: ${({ isIndexPage, isNavOpen, isScrolled }) =>
        !isIndexPage
            ? `var(--brand-1)`
            : isIndexPage && isScrolled
            ? `var(--brand-1)`
            : isIndexPage && isNavOpen
            ? `var(--brand-1)`
            : `var(--white)`};

    &:nth-of-type(1) {
        transform: ${({ isNavOpen }) =>
            isNavOpen ? `rotate(-45deg)` : `rotate(0)`};
    }

    :nth-of-type(2) {
        opacity: ${({ isNavOpen }) => (isNavOpen ? `0` : `1`)};
        width: ${({ isNavOpen }) => (isNavOpen ? `0` : `100%`)};
    }

    :nth-of-type(3) {
        transform: ${({ isNavOpen }) =>
            isNavOpen ? `rotate(45deg)` : `rotate(0)`};
    }
`;

const MobileNavMenu = styled.ul`
    ${tw`absolute right-0 md:hidden min-h-screen w-max flex flex-col items-end transform-gpu transition bg-white pr-4 pt-24 text-brand-1 top-0`}

    transform: ${({ isNavOpen }) =>
        isNavOpen ? `translateX(0)` : `translateX(100%)`}
`;

const MobileNavLI = styled.li`
    ${tw`ml-8 mb-10 capitalize font-wt-bold text-ts-h5 transition-colors duration-700 ease-in-out relative text-current`}
`;

export default function MobileNav({
    handleNavToggle,
    isIndexPage,
    isNavOpen,
    isScrolled,
    navItems,
}) {
    return (
        <>
            <MobileNavButton type="button" onClick={handleNavToggle}>
                <StyledSpan
                    isIndexPage={isIndexPage}
                    isNavOpen={isNavOpen}
                    isScrolled={isScrolled}
                />
                <StyledSpan
                    isIndexPage={isIndexPage}
                    isNavOpen={isNavOpen}
                    isScrolled={isScrolled}
                />
                <StyledSpan
                    isIndexPage={isIndexPage}
                    isNavOpen={isNavOpen}
                    isScrolled={isScrolled}
                />
            </MobileNavButton>
            <MobileNavMenu isNavOpen={isNavOpen}>
                {navItems.map((item) => {
                    return (
                        <MobileNavLI key={item.text}>
                            <Link
                                activeClassName="link-active"
                                className="link hover:link-hover"
                                to={item.link}
                            >
                                {item.text}
                            </Link>
                        </MobileNavLI>
                    );
                })}
            </MobileNavMenu>
        </>
    );
}

MobileNav.propTypes = {
    handleNavToggle: PropTypes.func.isRequired,
    isIndexPage: PropTypes.bool.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
    isScrolled: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired,
};
