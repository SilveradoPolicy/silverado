import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-size: 1rem;
    }
`;
export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <main>{children}</main>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
