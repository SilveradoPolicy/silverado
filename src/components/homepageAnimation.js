import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

import homepageAnimation from '../animations/Homepage.json';

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
        const mobileView = window.outerWidth;
        console.log(window);

        const elementScrollPosition = getScrollPosition();
        console.log(windowPosition);
        console.log(elementScrollPosition);

        if (windowPosition >= elementScrollPosition) {
            play();
        } else if (windowPosition > 1150 && mobileView < 600) {
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
        </>
    );
}
