/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';

import TimelineIcon from './icons/timeline';
import TimeLineCard from './timelineCard';

const StyledSection = styled.section`
    ${tw`mb-20`}
`;

const StyledHeading = styled.h2`
    ${tw`container capitalize font-wt-bold mb-8 text-brand-1 text-ts-h2`}
`;

const CarouselOuter = styled.div`
    ${tw`relative`}
`;

const CarouselInner = styled.div`
    ${tw`absolute top-0 transform transform-gpu translate-y-full`}
`;

const Carousel = styled.div`
    ${tw`flex transform transform-gpu transition transition-transform duration-300 ease-out`}

    transform: ${({ activeSlide }) =>
        `translateX(${activeSlide * -386 + 193}px)`}
`;

const CarouselItem = styled.div`
    ${tw`flex items-center justify-center flex-shrink-0 cursor-pointer text-ts-h4 text-brand-1 font-semibold transition-opacity`}

    opacity: ${({ isActive }) => (isActive ? '0' : '1')};
    width: 386px;
`;

const CardContainer = styled.div`
    ${tw`container px-5 lg:px-0`}
`;

export default function Timeline() {
    const [activeSlide, setActiveSlide] = useState(1);
    const [currentYear, setCurrentYear] = useState('1995');

    const handleSlideChange = (e) => {
        const arrayOfYears = content.map(({ year }) => year);
        const selectedSlide = e.target.dataset.position;
        const arrayPosition = arrayOfYears.indexOf(selectedSlide);
        setActiveSlide(arrayPosition);
        setCurrentYear(e.target.dataset.position);
    };

    const variants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1 },
    };

    return (
        <StyledSection>
            <StyledHeading>history</StyledHeading>
            <CarouselOuter>
                <TimelineIcon />
                <CarouselInner>
                    <Carousel activeSlide={activeSlide}>
                        {content.map(({ year, index }) => (
                            <CarouselItem
                                key={index}
                                data-position={year}
                                onClick={handleSlideChange}
                                isActive={year === currentYear}
                            >
                                {year}
                            </CarouselItem>
                        ))}
                    </Carousel>
                </CarouselInner>
                <AnimatePresence>
                    {(activeSlide || activeSlide === 0) && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={variants}
                        >
                            <CardContainer>
                                {content.map(
                                    ({ body, heading, year }, index) => {
                                        return (
                                            <TimeLineCard
                                                body={body}
                                                heading={heading}
                                                year={year}
                                                isOpen={activeSlide === index}
                                            />
                                        );
                                    },
                                )}
                            </CardContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CarouselOuter>
        </StyledSection>
    );
}

const content = [
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '1990',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '1995',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2000',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2005',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2010',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2012',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2014',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2016',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Vestibulum mattis lobortis dignissim. Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas.',
        year: '2018',
    },
    {
        heading: 'Donec porta volutpat felis felicis',
        body:
            'Suspendisse et fermentum quam. Nullam gravida tellus in felis lacinia, ac sagittis magna egestas. Lorem porttitor vel. Aliquam massa justo, pharetra ut dignissim sit amet, efficitur sit amet sem. Vestibulum mattis lobortis dignissim.',
        year: '2020',
    },
];
