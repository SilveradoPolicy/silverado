import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSVG = styled.svg`
    ${tw`absolute mx-auto mb-12 inset-x-1/2 top-0 transform-gpu -translate-x-1/2 -translate-y-1/2 `}
`;

export default function ParallelTransition() {
    return (
        <StyledSVG
            width="78"
            height="114"
            viewBox="0 0 78 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="20.5"
                y1="28.5"
                x2="20.5"
                y2="82.5"
                stroke="#739663"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <line
                x1="39.5"
                y1="15.5"
                x2="39.5"
                y2="95.5"
                stroke="#56959E"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M59 27L59 84"
                stroke="#FCAF1B"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </StyledSVG>
    );
}
