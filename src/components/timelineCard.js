import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';

const Card = styled.div`
    ${tw`text-brand-1 w-96`}
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
                        <h2>{year}</h2>
                        <h2>{heading}</h2>
                        <p>{body}</p>
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
