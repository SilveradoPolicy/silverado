import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import LogoAlt from './logos/fullAlt';
import MainNav from './nav/mainNav';
import MobileNav from './nav/mobileNav';

const StyledHeader = styled.header`
    ${tw`fixed transition w-full z-10`}

    background-color: ${({ isScrolled, hasBackgroundColor }) =>
        isScrolled || hasBackgroundColor ? `#ffffff` : `#ffffff00`};
`;
const CtaBar = styled.div`
    ${tw`h-10 bg-brand-1`}
`;

const StyledNav = styled.nav`
    ${tw`container flex justify-between py-3 relative`}
`;

const StyledLogoLink = styled(Link)`
    ${tw`w-60`}
`;

const nav = [
    {
        text: 'initiatives',
        link: '/initiatives',
    },
    {
        text: 'ideas',
        link: '/ideas',
    },
    {
        text: 'about',
        link: '/about',
    },
    {
        text: 'news and events',
        link: '/news',
    },
];
export default function Header({ isIndexPage, hasBackgroundColor }) {
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

    return (
        <StyledHeader
            isScrolled={isScrolled}
            hasBackgroundColor={hasBackgroundColor}
        >
            <CtaBar />
            <StyledNav>
                <StyledLogoLink to="/">
                    <LogoAlt />
                </StyledLogoLink>
                <MobileNav
                    isIndexPage={isIndexPage}
                    isNavOpen={isMobileMenuOpen}
                    isScrolled={isScrolled}
                    handleNavToggle={handleNavToggle}
                    navItems={nav}
                />
                <MainNav
                    isIndexPage={isIndexPage}
                    isScrolled={isScrolled}
                    navItems={nav}
                />
            </StyledNav>
        </StyledHeader>
    );
}

Header.defaultProps = {
    isIndexPage: false,
    hasBackgroundColor: false,
};

Header.propTypes = {
    isIndexPage: PropTypes.bool,
    hasBackgroundColor: PropTypes.bool,
};
