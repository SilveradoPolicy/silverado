import React from 'react';
import PropTypes from 'prop-types';

export default function FullWidthImage({ node }) {
    const {
        asset: { url },
    } = node;
    return <img src={`${url}`} alt="" />;
}

FullWidthImage.propTypes = {
    node: PropTypes.object.isRequired,
};
