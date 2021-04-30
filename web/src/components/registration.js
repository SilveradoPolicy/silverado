import React from 'react';
// import PropTypes from 'prop-types';

import tw from 'twin.macro';
import styled from 'styled-components';

const RegiWrapper = styled.div`
    ${tw`text-center my-24`}
`;

const Header = styled.h4`
    ${tw`text-brand-1 text-ts-h4`}
`;
const Description = styled.div`
    ${tw`max-w-prose mx-auto mb-4 text-ts-body`}
`;

const StyledButton = styled.button`
    ${tw`bg-brand-3 w-52 h-11 rounded-full text-white`}
`;

export default function Registration() {
    return (
        <RegiWrapper>
            <Header className="font-wt-bold">Interested in Attending?</Header>
            <Description>
                Vestibulum at augue eget turpis pharetra mollis vel sagittis
                elit. Ut eleifend sodales vehicula. Nam malesuada massa vitae
                tellus sagittis tincidunt in in sem.
            </Description>
            <StyledButton className="font-wt-thin">Register</StyledButton>
        </RegiWrapper>
    );
}

// Registration.propTypes = {
//     data: PropTypes.object.isRequired,
// };
