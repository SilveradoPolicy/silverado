import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import * as fonts from '../fonts';
import '../styles/layout.css';

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

    html {
        --brand-1: #306184;
        --brand-2: #739663;
        --brand-3: #56959E;
        --brand-4: #C4E7E7;
        --brand-5: #A3C1BF;
        --brand-6: #FCAF1B;
        --white: #ffffff;
        --black: #000000;
    }
    body {
        font-size: 1rem;
        font-family: 'SukhumvitReg', sans-serif;
    }
`;
export default function Layout({ children, isIndexPage }) {
    return (
        <>
            <GlobalStyles />
            <Header isIndexPage={isIndexPage} />
            <main>{children}</main>
            <Footer />
        </>
    );
}

Layout.defaultProps = {
    isIndexPage: false,
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isIndexPage: PropTypes.bool,
};
