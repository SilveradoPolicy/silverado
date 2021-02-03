import { useLottie, useLottieInteractivity } from 'lottie-react';

export default function ScrolledAnimation({
    data,
    frames,
    style,
    visibilityOptions,
}) {
    const options = {
        animationData: data,
    };
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: 'scroll',
        actions: [
            {
                visibility: visibilityOptions || [0.25, 0.75],
                type: 'seek',
                frames: [0, frames],
            },
        ],
    });

    return Animation;
}
