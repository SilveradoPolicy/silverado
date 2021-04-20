import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSVG = styled.svg`
    ${tw`absolute mx-auto mb-12 inset-x-1/2 top-0 transform-gpu -translate-x-1/2 -translate-y-3/4 `}
`;

export default function CurvedTransition() {
    return (
        <StyledSVG
            width="250"
            height="220"
            viewBox="0 0 250 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M103.5 171L103.5 103C103.5 75.3858 81.1142 53 53.5 53L28.5 53"
                stroke="#739663"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M122.5 22.5L122.5 198.5"
                stroke="#56959E"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M142 170L142 103C142 75.3858 164.386 53 192 53L212.5 53"
                stroke="#FCAF1B"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </StyledSVG>
    );
}
