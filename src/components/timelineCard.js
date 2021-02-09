import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';

const Card = styled.div`
    ${tw`ml-72 py-10 text-brand-1 w-96`}
`;

const Year = styled.p`
    ${tw`font-wt-thin mb-4 text-5xl`}
`;

const Heading = styled.p`
    ${tw`font-wt-bold mb-2 text-ts-h5`}
`;

const Body = styled.p`
    ${tw`leading-6`}
`;

export default function TimeLineCard({ body, heading, year, isOpen }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                        hidden: {
                            position: 'absolute',
                            scale: 0.8,
                            transformOrigin: 'top left',
                        },
                        visible: {
                            position: 'relative',
                            scale: 1,
                            transformOrigin: 'top left',
                        },
                    }}
                >
                    <Card key={year}>
                        <Year>{year}</Year>
                        <Heading>{heading}</Heading>
                        <Body>{body}</Body>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

TimeLineCard.propTypes = {
    body: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
