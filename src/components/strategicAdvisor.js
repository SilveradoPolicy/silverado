import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

const ButtonDiv = styled.div`
    ${tw`cursor-pointer`}
`;

const StyledName = styled.h5`
    ${tw`capitalize font-wt-bold text-brand-1 text-ts-h5`}
`;

const StyledTitle = styled.p`
    ${tw`capitalize font-wt-thin text-brand-1`}
`;

const StyledDiv = styled.div`
    ${tw`text-brand-1 p-4 bg-opacity-100 bg-white`}
`;

const StyledModal = styled.p`
    ${tw`text-black`}
`;

const StyledButton = styled.button`
    ${tw`top-2.5 right-2.5 absolute`}
`;

const ModalTitle = styled.h2`
    ${tw`font-wt-thin mb-4`}
`;

const ModalName = styled.h2`
    ${tw`font-wt-bold dtext-2xl`}
`;

const customStyles = {
    content: {
        maxWidth: '80%',
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
    const { advisorFullName, bio, title } = data;

    function toggleModal() {
        Modal.setAppElement('#___gatsby');
        setIsOpen(!isOpen);
    }

    function handleKeydown(e) {
        const enterKeyWasPressed = e.keycode === 13;

        if (enterKeyWasPressed) {
            toggleModal();
        }
    }

    return (
        <div>
            <ButtonDiv
                role="button"
                onClick={toggleModal}
                onKeyDown={handleKeydown}
                tabIndex={0}
            >
                <StyledName>{advisorFullName}</StyledName>
                <StyledTitle>{title}</StyledTitle>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    style={customStyles}
                    contentLabel="Bio Modal"
                >
                    <StyledDiv>
                        <ModalName>{advisorFullName}</ModalName>
                        <ModalTitle>{title}</ModalTitle>
                        <StyledModal>{bio}</StyledModal>
                        <StyledButton role="button" onClick={toggleModal}>
                            <MdClose />
                        </StyledButton>
                    </StyledDiv>
                </Modal>
            </ButtonDiv>
        </div>
    );
}

StrategicAdvisor.propTypes = {
    data: PropTypes.object.isRequired,
};
