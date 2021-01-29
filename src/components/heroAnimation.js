import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import heroAnimation from '../animations/Hero.json';

export default function HeroAnimation() {
    const heroAnimContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: heroAnimContainer.current, // current instance of our container!
            animationData: heroAnimation, // animation file!
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
        return () => anim.destroy();
    }, []);

    return <div className="animation-container" ref={heroAnimContainer} />;
}
