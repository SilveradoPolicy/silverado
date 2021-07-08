import React from 'react';
import PropTypes from 'prop-types';

import tw from 'twin.macro';
import styled from 'styled-components';

const RegiWrapper = styled.div`
    ${tw`text-center mb-24`}
`;

const Header = styled.h4`
    ${tw`text-brand-1 text-ts-h4 font-bold`}
`;
const Description = styled.div`
    ${tw`max-w-prose mx-auto mb-4 text-ts-body`}
`;

const StyledLink = styled.a`
    ${tw`bg-brand-3 text-ts-h4 inline-block py-3.5 px-20 rounded-full text-white font-light`}
`;

export default function Registration({ ctaBody, url }) {
    return (
        <RegiWrapper>
            <Header>Interested in Attending?</Header>
            {ctaBody && <Description>{ctaBody}</Description>}

            <StyledLink href={url} target="_blank" rel="noreferrer">
                Register
            </StyledLink>
        </RegiWrapper>
    );
}

Registration.defaultProps = {
    ctaBody: null,
};

Registration.propTypes = {
    ctaBody: PropTypes.string,
    url: PropTypes.string.isRequired,
};
