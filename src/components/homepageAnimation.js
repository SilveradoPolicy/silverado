import React from 'react';
import homepageAnimation from '../animations/Homepage.json';

import ScrolledAnimation from './scrolledAnimation';

export default function HomepageAnimation() {
    return (
        <ScrolledAnimation
            data={homepageAnimation}
            frames={270}
            style={{ height: 500 }}
            visibilityOptions={[0.25, 0.65]}
        />
    );
}
