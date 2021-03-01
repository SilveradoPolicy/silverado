import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

const StyledName = styled.h5`
    ${tw`capitalize text-brand-1 text-ts-h5`}
`;

const StyledTitle = styled.p`
    ${tw`capitalize text-brand-1`}
`;

const StyledDiv = styled.div`
    ${tw`text-brand-1 p-4 bg-opacity-100 bg-white`}
`;

const StyledModal = styled.p`
    ${tw`text-black`}
`;

const customStyles = {
    content: {
        width: '364px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        background: '#FFFFFF',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '23px',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
    },
    overlay: {
        zIndex: '10',
    },
};

export default function StrategicAdvisor({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const { advisorFullName, title } = data;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div
                type="button"
                role="button"
                onClick={openModal}
                onKeyDown={openModal}
                tabIndex={0}
            >
                <StyledName className="font-wt-bold">
                    <label>{advisorFullName}</label>
                </StyledName>
                <StyledTitle className="font-wt-thin">{title}</StyledTitle>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Bio Modal"
            >
                <StyledDiv>
                    <h1 className="font-wt-bold" style={{ fontSize: '23px' }}>
                        {advisorFullName}
                    </h1>
                    <h2 className="font-wt-thin">{title}</h2>
                    <br />
                    <StyledModal>
                        Quisque consequat, massa ut convallis sagittis, ipsum
                        lectus tempus urna, nec consequat massa leo sed metus.
                        Morbi eget justo augue. Etiam a tortor ligula. Duis
                        pharetra egestas urna eu maximus. Integer venenatis
                        convallis elementum. Donec ullamcorper consequat nibh,
                        ac sodales nunc vestibulum eget.
                    </StyledModal>
                    <br />
                    <button type="button" onClick={closeModal}>
                        <MdClose />
                    </button>
                </StyledDiv>
            </Modal>
        </div>
    );
}

StrategicAdvisor.propTypes = {
    data: PropTypes.object.isRequired,
};
