import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

export default function Breadcrumb({ data }) {
    const { location } = data;
    return (
        <Link key={location} to="/">
            Bread
        </Link>
    );
}

Breadcrumb.propTypes = {
    data: PropTypes.object.isRequired,
};
