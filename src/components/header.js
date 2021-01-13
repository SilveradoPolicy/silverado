/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import Logo from './logos/horizontal';
import Hamburger from './icons/hamburger';

const StyledHeader = styled.header`
    ${tw`fixed transition w-full z-10`}

    background-color: ${(props) =>
        props.isScrolled ? `#ffffff` : `#ffffff00`};
`;
const CtaBar = styled.div`
    ${tw`h-10 bg-brand-1`}
`;

const StyledNav = styled.nav`
    ${tw`container flex justify-between py-3 relative px-4 md:px-0`}
`;

const StyledLogoLink = styled(Link)`
    ${tw`w-60`}
`;

const StyledUL = styled.ul`
    ${tw`hidden md:flex flex-row items-center`}
`;

const MobileNavButton = styled.button`
    ${tw`absolute md:hidden h-12 w-12 right-0 top-1/2 transform -translate-y-1/2 -translate-x-4`}
`;

const MobileNav = styled.ul`
    ${tw`absolute right-0 md:hidden flex flex-col items-end transform-gpu transition top-full bg-white p-10 text-brand-1`}

    transform: ${(props) =>
        props.isNavOpen ? `translateX(0)` : `translateX(100%)`}
`;

const MobileNavLI = styled.li`
    ${tw`ml-8 capitalize font-wt-bold text-lg transition-colors duration-700 ease-in-out relative text-current`}
`;

// link hover state utility classes applied as className on gatsby Link component
const StyledLI = styled.li`
    ${tw`ml-8 capitalize font-wt-bold text-lg transition-colors duration-700 ease-in-out relative`}

    color: ${(props) =>
        !props.isIndexPage
            ? `var(--brand-1)`
            : props.isIndexPage && !props.isScrolled
            ? `var(--white)`
            : `var(--brand-1)`}
`;

const nav = [
    {
        text: 'initiatives',
        link: '/',
    },
    {
        text: 'ideas',
        link: '/',
    },
    {
        text: 'about',
        link: '/',
    },
    {
        text: `what's happening`,
        link: '/',
    },
];

// todo: mobile layout, confirm design w/ Josh
// todo: nav hover states, confirm desgin w/ Josh

export default function Header({ isIndexPage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleNavToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const navItems = nav.map((item) => {
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
    });

    const mobileNavItems = nav.map((item) => {
        return (
            <MobileNavLI key={item.text}>
                <Link className="link hover:link-hover" to={item.link}>
                    {item.text}
                </Link>
            </MobileNavLI>
        );
    });
    return (
        <StyledHeader isScrolled={isScrolled}>
            <CtaBar />
            <StyledNav>
                <StyledLogoLink to="/">
                    <Logo />
                </StyledLogoLink>
                <MobileNavButton onClick={handleNavToggle}>
                    <Hamburger />
                </MobileNavButton>
                <MobileNav isNavOpen={isMobileMenuOpen}>
                    {mobileNavItems}
                </MobileNav>
                <StyledUL>{navItems}</StyledUL>
            </StyledNav>
        </StyledHeader>
    );
}

Header.defaultProps = {
    isIndexPage: false,
};

Header.propTypes = {
    isIndexPage: PropTypes.bool,
};
