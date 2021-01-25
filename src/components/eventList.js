import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';

import CalendarEvent from './calendarEvent';
import Calendar from './icons/calendar';
import Close from './icons/close';

const FixedWrapper = styled.div`
    ${tw`fixed bottom-1/4 md:bottom-1/3 pointer-events-none w-full z-10`}
`;

const ToggleButton = styled.button`
    ${tw`absolute bottom-0 cursor-pointer pointer-events-auto right-0 transform transform-gpu translate-y-full`}
`;

const InnerContainer = styled.div`
    ${tw`container flex justify-end relative -ml-4 xl:ml-0`}
`;

const StyledDiv = styled.div`
    ${tw`bg-brand-1 mb-4 pointer-events-auto pl-6 pr-10 py-6 rounded-3xl text-white`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-wt-bold text-ts-h4`}
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
    const [isWindowScrolled, setIsWindowScrolled] = useState(true);
    const [didUserOpen, setDidUserOpen] = useState(false);

    const handleDidUserOpen = () => {
        return setDidUserOpen(!didUserOpen);
    };

    const handleScroll = () => {
        if (window.innerWidth > 1024) {
            if (window.scrollY === 0) {
                setDidUserOpen(false);
                setIsWindowScrolled(true);
            }
            if (window.scrollY > 10) {
                setIsWindowScrolled(true);
            } else {
                setIsWindowScrolled(false);
            }
        }
    };

    const handleInitialRender = () => {
        if (window.innerWidth > 1024) {
            setDidUserOpen(false);
            setIsWindowScrolled(false);
        }
    };

    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsWindowScrolled(false);
        } else {
            setIsWindowScrolled(true);
        }
    };

    useEffect(() => {
        window.addEventListener('load', handleInitialRender);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleInitialRender);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <FixedWrapper>
            <AnimatePresence>
                {(didUserOpen || !isWindowScrolled) && (
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
                {isWindowScrolled && (
                    <ToggleButton role="button" onClick={handleDidUserOpen}>
                        {didUserOpen ? (
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
