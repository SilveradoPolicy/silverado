import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
// import styled from 'styled-components';
// import tw from 'twin.macro';

import heroAnimation from '../animations/Hero.json';

// const AnimationStyle = styled.div`

// `

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
