import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

import heroAnimation from '../animations/newHero.json';
import mobileHero from '../animations/Hero-Mobile.json';
import heroOne from '../animations/Hero_1X1_lottie.json';

export default function HeroAnimation() {
    const heroAnimContainer = useRef(null);
    const [activeAnimationFile, setActiveAnimationFile] = useState(
        heroAnimation,
    );

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setActiveAnimationFile(mobileHero);
        } else if (window.innerWidth >= 769 && window.innerWidth < 1280) {
            setActiveAnimationFile(heroOne);
        } else {
            setActiveAnimationFile(heroAnimation);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        const anim = lottie.loadAnimation({
            container: heroAnimContainer.current, // current instance of our container!
            animationData: activeAnimationFile, // animation file!
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });

        return () => {
            anim.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, [activeAnimationFile]);

    return <div className="animation-container" ref={heroAnimContainer} />;
}
