import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import accelerate from '../animations/Accelerate.json';
import cultivate from '../animations/Cultivate.json';
import icons from '../animations/Icons.json';
import incubate from '../animations/Incubate.json';

import InitiativesText from './initiativesText';

import ScrolledAnimation from './scrolledAnimation';

// const CultivateTextContainer = styled.div`
//     ${tw`justify-self-center lg:col-start-3 lg:col-end-5`}
// `;

// const CultivateAnim = styled.div`
//     ${tw`lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3`}
// `;
const InitiativesWrapper = styled.div`
    ${tw`grid grid-cols-1 auto-rows-fr lg:grid-cols-5 lg:grid-rows-4 justify-center`}

    @media screen and (min-width: 900px) {
        #accelerate {
            grid-column-start: 3;
            grid-column-end: 5;
        }
        .accelerate {
            grid-column-start: 2;
            grid-row-start: 4;
            grid-row-end: 5;
        }
        #cultivate {
            grid-column-start: 3;
            grid-column-end: 5;
            align-self: flex-start;
        }
        .cultivate {
            grid-column: 2 / span 1;
            grid-row-start: 2;
            grid-row-end: 3;
        }
        .icons {
            grid-column-start: 1;
            grid-column-end: 6;
            align-self: flex-end;
        }
        #incubate {
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 3;
            grid-row-end: 4;
        }
        .incubate {
            grid-column-start: 4;
            grid-column-end: 5;
        }
    }
`;

const content = {
    accelerate: {
        id: `accelerate`,
        heading: `Accelerate`,
        body: `Building and executing campaigns to guide our initiatives through the necessary channels of implementation, be they statutory, regulatory, or at the agency level.`,
    },
    cultivate: {
        id: `cultivate`,
        heading: `Cultivate`,
        body: `Convening diverse groups of policy experts and stakeholders to generate productive disagreement over policy challenges and germinate fresh solutions to those challenges.`,
    },
    incubate: {
        id: `incubate`,
        heading: `Incubate`,
        body: `Leveraging the policy expertise of our Strategic Council, technical team, and campaign partners to transform novel policy ideas into actionable policy initiatives. `,
    },
};

const style = {
    height: 300,
};

export default function InitiativesSection() {
    return (
        <InitiativesWrapper className="initiative-container">
            <div className="icons">
                <ScrolledAnimation data={icons} frames={150} style={style} />
            </div>
            <InitiativesText
                id={content.cultivate.id}
                heading={content.cultivate.heading}
                body={content.cultivate.body}
            />
            <div className="cultivate">
                <ScrolledAnimation
                    data={cultivate}
                    frames={150}
                    style={style}
                />
            </div>
            <InitiativesText
                id={content.incubate.id}
                heading={content.incubate.heading}
                body={content.incubate.body}
            />
            <div className="incubate">
                <ScrolledAnimation data={incubate} frames={150} style={style} />
            </div>
            <InitiativesText
                id={content.accelerate.id}
                heading={content.accelerate.heading}
                body={content.accelerate.body}
            />
            <div className="accelerate">
                <ScrolledAnimation
                    data={accelerate}
                    frames={157}
                    style={style}
                />
            </div>
        </InitiativesWrapper>
    );
}
