import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import * as fonts from '../fonts';

import Header from '../components/header';
import Footer from '../components/footer';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Aliens & Cows';
        font-style: normal;
        font-weight: normal;
        src: local('Aliens & Cows'), url('${fonts.AliensAndCows}') format('truetype');
    }

    // Todo: add font info to readme
    // use tailwind class font-wt-thin
    @font-face {
        font-family: 'SukhumvitThin';
        font-style: normal;
        font-weight: normal;
        src: local('Sukhumvit'), url('${fonts.SukhumvitThin}') format('truetype');
    }

    // use tailwind class font-wt-reg
    @font-face {
        font-family: 'SukhumvitReg';
        font-style: normal;
        font-weight: normal;
        src: local('Sukhumvit'), url('${fonts.SukhumvitReg}') format('truetype');
    }

    // use tailwind class font-wt-bold
    @font-face {
        font-family: 'SukhumvitBold';
        font-style: normal;
        font-weight: normal;
        src: local('Sukhumvit'), url('${fonts.SukhumvitBold}') format('truetype');
    }

    body {
        font-size: 1rem;
        font-family: 'SukhumvitReg'
    }
`;
export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
