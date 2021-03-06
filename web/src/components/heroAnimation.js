import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';

import heroAnimation from '../animations/newHero.json';
import mobileHero from '../animations/Hero-Mobile.json';
import heroOne from '../animations/Hero_1X1_lottie.json';

export default function HeroAnimation({ setIsAnimationLoaded }) {
    const heroAnimContainer = useRef(null);
    const [activeAnimationFile, setActiveAnimationFile] = useState(
        heroAnimation,
    );

    const setAnimationFile = () => {
        if (window.innerWidth < 767) {
            setActiveAnimationFile(mobileHero);
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setActiveAnimationFile(heroOne);
        } else {
            setActiveAnimationFile(heroAnimation);
        }
    };

    useEffect(() => {
        setAnimationFile();
        window.addEventListener('resize', setAnimationFile);

        return () => {
            window.removeEventListener('resize', setAnimationFile);
        };
    }, []);

    return (
        <>
            <Lottie
                animationData={activeAnimationFile}
                autoplay
                lottieRef={heroAnimContainer}
                onDOMLoaded={setIsAnimationLoaded(true)}
            />
        </>
    );
}

HeroAnimation.propTypes = {
    setIsAnimationLoaded: PropTypes.func.isRequired,
};
