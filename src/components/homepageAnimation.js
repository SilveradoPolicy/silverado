import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import tw from 'twin.macro';

import homepageAnimation from '../animations/Homepage.json';

const AnimationFlex = styled.section`
    ${tw`flex justify-center mr-2 ml-16 space-x-64 font-wt-bold text-brand-1 text-center text-ts-h2`}
`;

export default function HomepageAnimation() {
    const containerRef = useRef(null);

    const getScrollPosition = () => {
        const {
            current: {
                animationItem: {
                    wrapper: { offsetHeight, offsetTop },
                },
            },
        } = containerRef;

        const elementPosition = offsetTop - offsetHeight;

        return elementPosition;
    };

    const handleScroll = () => {
        const {
            current: { play },
        } = containerRef;

        const windowPosition = window.scrollY;

        const elementScrollPosition = getScrollPosition();

        if (windowPosition >= elementScrollPosition) {
            play();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <Lottie
                autoplay={false}
                loop={0}
                animationData={homepageAnimation}
                lottieRef={containerRef}
            />
            <AnimationFlex>
                <h1>Cultivate</h1>
                <h1>Incubate</h1>
                <h1>Accelerate</h1>
            </AnimationFlex>
        </>
    );
}
