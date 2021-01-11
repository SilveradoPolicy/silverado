import React, { useEffect, useState } from 'react';
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
    ${tw`ml-8 capitalize font-wt-bold text-lg transition`}

    color: ${(props) => (props.isScrolled ? `var(--brand-1)` : `var(--white)`)}
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

export default function Header() {
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
            <StyledLI key={item.text} isScrolled={isScrolled}>
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
