import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

const GlobalStyles = createGlobalStyle`
    html {
        --brand-1: #306184;
        --brand-2: #739663;
        --brand-3: #56959E;
        --brand-4: #C4E7E7;
        --brand-5: #A3C1BF;
        --brand-6: #FCAF1B;
        --white: #ffffff;
        --black: #000000;
        --gradient-blue: #EDF8F8;
    }
    body {
        font-size: 1rem;
        font-family: 'Sukhumvit', sans-serif;
    }
`;
export default function Layout({ children, isIndexPage, hasBackgroundColor }) {
    return (
        <>
            <GlobalStyles />
            <Header
                isIndexPage={isIndexPage}
                hasBackgroundColor={hasBackgroundColor}
            />
            <main>{children}</main>
            <Footer />
        </>
    );
}

Layout.defaultProps = {
    isIndexPage: false,
    hasBackgroundColor: false,
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isIndexPage: PropTypes.bool,
    hasBackgroundColor: PropTypes.bool,
};
