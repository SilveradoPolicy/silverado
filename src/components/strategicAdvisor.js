import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Modal from 'react-modal';

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
        top: '63%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        background: '#FFFFFF',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '23px',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
    },
};

export default function StrategicAdvisor({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const { advisorFullName, title } = data;

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#306184';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button type="button" onClick={openModal} onKeyDown={openModal}>
                <StyledName className="font-wt-bold">
                    <label>{advisorFullName}</label>
                </StyledName>
            </button>
            <StyledTitle className="font-wt-thin">{title}</StyledTitle>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Bio Modal"
                className="z-10"
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
                        x
                    </button>
                </StyledDiv>
            </Modal>
        </div>
    );
}

StrategicAdvisor.propTypes = {
    data: PropTypes.object.isRequired,
};
