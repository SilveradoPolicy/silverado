import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
// import Lottie from 'lottie-react'; // remove this if we're not using it

import heroAnimation from '../animations/Hero.json';
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
    });

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: heroAnimContainer.current, // current instance of our container!
            animationData: activeAnimationFile, // animation file!
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });

        return () => anim.destroy();
    }, [activeAnimationFile]);

    return <div className="animation-container" ref={heroAnimContainer} />;
}
