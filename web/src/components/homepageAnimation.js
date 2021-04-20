import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';

import homepageAnimation from '../animations/Homepage.json';

export default function HomepageAnimation() {
    const containerRef = useRef(null);

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView) {
        containerRef.current.play();
    }

    return (
        <div ref={ref}>
            <Lottie
                autoplay={false}
                loop={0}
                animationData={homepageAnimation}
                lottieRef={containerRef}
            />
        </div>
    );
}
