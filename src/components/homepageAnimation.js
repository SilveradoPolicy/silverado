import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import homepageAnimation from '../animations/Homepage.json';

export default function HomepageAnimation() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current, // current instance of our container!
            animationData: homepageAnimation, // animation file!
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
        return () => anim.destroy();
    }, []);

    return (
        <div className="animation">
            <div className="animation-container" ref={animationContainer} />
        </div>
    );
}
