import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

// todo: confirm hover states
// todo: add bg color as prop defined in sanity?

const StyledLink = styled(Link)`
    ${tw`bg-brand-1 border border-2 border-brand-1 capitalize cursor-pointer mt-8 inline-block px-5 py-1 rounded-full text-center text-2xl text-brand-7 hover:bg-brand-6 hover:border-brand-6 transition-colors`}
`;

export default function CtaLink({ cta }) {
    return <StyledLink to={cta.link}>{cta.text}</StyledLink>;
}

CtaLink.propTypes = {
    cta: PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};
