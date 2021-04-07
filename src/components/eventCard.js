import React from 'react';
// import PropTypes from 'prop-types';

// import { Link } from 'gatsby';

// import { graphql } from 'gatsby';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardWrapper = styled.div`
    ${tw`flex justify-center bg-white mx-10 absolute top-3/4`}
`;

const StyledTitle = styled.h1`
    ${tw`text-ts-h1 mb-2`}
`;
const SubHeader = styled.h4`
    ${tw`text-brand-3 text-base mb-4`}
`;
const StyledDate = styled.p`
    ${tw`text-ts-body`}
`;

const Body = styled.p`
    ${tw`text-ts-body`}
`;

const InfoWrapper = styled.div`
    ${tw`w-1/2 p-7`}
`;
const DescriptionWrapper = styled.div`
    ${tw`w-1/2 p-7`}
`;

const StyledButton = styled.button`
    ${tw`rounded-2xl bg-brand-1 text-white w-24 h-8 my-4`}
`;

export default function EventCard() {
    return (
        <CardWrapper>
            <InfoWrapper>
                <StyledTitle className="font-wt-bold">
                    Big Featured Event Title Second Line
                </StyledTitle>
                <SubHeader>subheader</SubHeader>
                <StyledDate>date</StyledDate>
                <StyledDate>date</StyledDate>
                <StyledDate>date</StyledDate>
            </InfoWrapper>
            <DescriptionWrapper>
                <Body>
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Morbi malesuada lectus quis scelerisque gravida.
                    Vestibulum feugiat consectetur porta. Donec eleifend enim ac
                    enim varius tincidunt. Morbi pharetra urna dignissim,
                    lobortis diam sit amet, faucibus lectus. Vivamus vulputate
                    massa risus, ac tempor nisi sagittis eget.
                </Body>
                <StyledButton type="button">Register</StyledButton>
            </DescriptionWrapper>
        </CardWrapper>
    );
}
