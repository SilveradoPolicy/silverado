import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';

import CalendarEvent from './calendarEvent';
import Calendar from './icons/calendar';
import Close from './icons/close';

const FixedWrapper = styled.div`
    ${tw`fixed pointer-events-none w-full z-10`}

    bottom: 25%;
    right: 1%;
`;

const ToggleButton = styled.button`
    ${tw`absolute bottom-0 cursor-pointer pointer-events-auto right-0 transform transform-gpu translate-y-full`}
`;

const InnerContainer = styled.div`
    ${tw`container flex justify-end relative mx-auto`}
`;

const StyledDiv = styled.div`
    ${tw`bg-brand-1 mb-4 pointer-events-auto pl-6 pr-10 py-6 rounded-3xl text-white`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize text-ts-h4 font-bold`}
`;

const StyledList = styled.ul`
    ${tw`relative`}
`;

const content = [
    {
        date: 10,
        month: 'aug',
        line1: 'event name first',
        line2: 'event line two',
        link: '#',
    },
    {
        date: 10,
        month: 'june',
        line1: 'event name first',
        line2: 'event line two',
        link: '#',
    },
    {
        date: 10,
        month: 'nov',
        line1: 'event name first',
        line2: 'event line two',
        link: '#',
    },
];

export default function EventList() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDidUserOpen = () => {
        return setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <FixedWrapper>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        style={{ overflow: 'hidden' }}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                            open: { height: 'auto' },
                            closed: { height: 0 },
                        }}
                    >
                        <InnerContainer>
                            <motion.div
                                style={{ transformOrigin: 'bottom right' }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: { transform: 'scale(1)' },
                                    closed: { transform: 'scale(0)' },
                                }}
                            >
                                <StyledDiv>
                                    <StyledHeading>
                                        upcoming events
                                    </StyledHeading>
                                    <StyledList>
                                        {content.map((item) => {
                                            return (
                                                <CalendarEvent data={item} />
                                            );
                                        })}
                                    </StyledList>
                                </StyledDiv>
                            </motion.div>
                        </InnerContainer>
                    </motion.div>
                )}
            </AnimatePresence>
            <InnerContainer>
                {true && (
                    <ToggleButton role="button" onClick={handleDidUserOpen}>
                        {isOpen ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        rotate: [0, 0],
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: [45, 45],
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: [0, 0],
                                    }}
                                >
                                    <Close />
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, rotate: [0, 0] }}
                                    animate={{ opacity: 1, rotate: [0, 0] }}
                                    exit={{ opacity: 0, rotate: [0, 0] }}
                                >
                                    <Calendar />
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </ToggleButton>
                )}
            </InnerContainer>
        </FixedWrapper>
    );
}
