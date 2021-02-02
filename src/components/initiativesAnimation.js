import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import tw from 'twin.macro';

import accelerate from '../animations/Accelerate.json';
import cultivate from '../animations/Cultivate.json';
import icons from '../animations/Icons.json';
import incubate from '../animations/Incubate.json';

import InitiativesText from './initiativesText';

const InitiativesWrapper = styled.div`
    ${tw`grid grid-cols-5 grid-rows-5 justify-center`}

    .icons {
        grid-column-start: 1;
        grid-column-end: 6;
        align-self: flex-end;
    }
    #cult {
        grid-column-start: 3;
        grid-column-end: 5;
        align-self: flex-start;
    }
    .cultivate {
        grid-column: 2 / span 1;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    #incu {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
    }
    .incubate {
        grid-column-start: 4;
        grid-column-end: 5;
    }
    #acc {
        grid-column-start: 3;
        grid-column-end: 5;
    }
    .accelerate {
        grid-column-start: 2;
        grid-row-start: 4;
        grid-row-end: 5;
    }
`;

export default function InitiativesAnimation() {
    const style = {
        height: 300,
    };

    const interactivity = {
        mode: 'scroll',
        actions: [
            {
                visibility: [0, 0.3],
                type: 'stop',
                frames: [0],
            },
            {
                visibility: [0.3, 0.45],
                type: 'seek',
                frames: [0, 45],
            },
            {
                visibility: [0.45, 1.0],
                type: 'play',
                frames: [0, 150],
            },
        ],
    };
    const content = {
        cultivate: {
            id: `cult`,
            heading: `Cultivate`,
            body: `Convening diverse groups of policy experts and stakeholders to generate productive disagreement over policy challenges and germinate fresh solutions to those challenges.`,
        },
        incubate: {
            id: `incu`,
            heading: `Incubate`,
            body: `Leveraging the policy expertise of our Strategic Council, technical team, and campaign partners to transform novel policy ideas into actionable policy initiatives. `,
        },
        accelerate: {
            id: `acc`,
            heading: `Accelerate`,
            body: `Building and executing campaigns to guide our initiatives through the necessary chanels of implementation, be they statuatory, regulatory, or at the agency level. `,
        },
    };
    return (
        <InitiativesWrapper className="initiative-container">
            <span className="icons">
                <Lottie
                    animationData={icons}
                    style={style}
                    interactivity={interactivity}
                />
            </span>
            <span className="cultivate">
                <Lottie
                    animationData={cultivate}
                    interactivity={interactivity}
                    style={style}
                />
            </span>
            <InitiativesText
                id={content.cultivate.id}
                heading={content.cultivate.heading}
                body={content.cultivate.body}
            />
            <InitiativesText
                id={content.incubate.id}
                heading={content.incubate.heading}
                body={content.incubate.body}
            />
            <span className="incubate">
                <Lottie
                    animationData={incubate}
                    style={style}
                    interactivity={interactivity}
                />
            </span>
            <span className="accelerate">
                <Lottie
                    animationData={accelerate}
                    interactivity={interactivity}
                    style={style}
                />
            </span>
            <InitiativesText
                id={content.accelerate.id}
                heading={content.accelerate.heading}
                body={content.accelerate.body}
            />
        </InitiativesWrapper>
    );
}
