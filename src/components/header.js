/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import Logo from './logos/horizontal';

const StyledHeader = styled.header`
    ${tw`fixed transition w-full z-10`}

    background-color: ${(props) =>
        props.isScrolled ? `#ffffff` : `#ffffff00`};
`;
const CtaBar = styled.div`
    ${tw`h-10 bg-brand-1`}
`;

const StyledNav = styled.nav`
    ${tw`container flex justify-between py-3`}
`;

const StyledLogoLink = styled(Link)`
    ${tw`w-60`}
`;

const StyledUL = styled.ul`
    ${tw`flex items-center`}
`;

const StyledLI = styled.li`
    ${tw`ml-8 capitalize font-wt-bold text-lg transition-colors duration-700 ease-in-out`}

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

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
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
                <Link to={item.link}>{item.text}</Link>
            </StyledLI>
        );
    });

    return (
        <StyledHeader isScrolled={isScrolled}>
            <CtaBar />
            <StyledNav>
                <StyledLogoLink to="/">
                    <Logo />
                </StyledLogoLink>
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
