import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

import accelerate from '../animations/Accelerate.json';
import cultivate from '../animations/Cultivate.json';
import icons from '../animations/Icons.json';
import incubate from '../animations/Incubate.json';

export default function InitiativesAnimation() {
    const accelerateContainer = useRef(null);
    const cultivateContainer = useRef(null);
    const iconsContainer = useRef(null);
    const incubateContainer = useRef(null);

    const style = {
        height: 300,
    };

    const interactivity = {
        mode: 'scroll',
        actions: [
            {
                visibility: [0, 0.2],
                type: 'stop',
                frames: [0],
            },
            {
                visibility: [0.2, 0.45],
                type: 'seek',
                frames: [0, 45],
            },
            {
                visibility: [0.45, 1.0],
                type: 'loop',
                frames: [45, 60],
            },
        ],
    };

    return (
        <div className="initiative-container">
            <Lottie
                className="icons"
                animationData={icons}
                ref={iconsContainer}
                style={style}
            ></Lottie>
            <Lottie
                className="cultivate"
                animationData={cultivate}
                ref={cultivateContainer}
                interactivity={interactivity}
                style={style}
            ></Lottie>
            <Lottie
                className="incubate"
                animationData={incubate}
                ref={incubateContainer}
                style={style}
            ></Lottie>
            <Lottie
                animationData={accelerate}
                ref={accelerateContainer}
                interactivity={interactivity}
                style={style}
            ></Lottie>
        </div>
    );
}
