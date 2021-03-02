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

const StyledButton = styled.button`
    ${tw`top-2.5 right-2.5 absolute`}
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
    Modal.setAppElement('#___gatsby');
    const [isOpen, setIsOpen] = useState(false);
    const { advisorFullName, title } = data;

    // function openModal() {
    //     console.log('open');
    //     setIsOpen(true);
    // }

    // function closeModal() {
    //     console.log('close');
    //     setIsOpen(false);
    // }

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <ButtonDiv
                type="button"
                role="button"
                onClick={toggleModal}
                onKeyDown={toggleModal}
                tabIndex={0}
            >
                <StyledName className="font-wt-bold">
                    {advisorFullName}
                </StyledName>
                <StyledTitle className="font-wt-thin">{title}</StyledTitle>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    style={customStyles}
                    contentLabel="Bio Modal"
                >
                    <StyledDiv>
                        <h1
                            className="font-wt-bold"
                            style={{ fontSize: '23px' }}
                        >
                            {advisorFullName}
                        </h1>
                        <h2 className="font-wt-thin">{title}</h2>
                        <br />
                        <StyledModal>
                            Quisque consequat, massa ut convallis sagittis,
                            ipsum lectus tempus urna, nec consequat massa leo
                            sed metus. Morbi eget justo augue. Etiam a tortor
                            ligula. Duis pharetra egestas urna eu maximus.
                            Integer venenatis convallis elementum. Donec
                            ullamcorper consequat nibh, ac sodales nunc
                            vestibulum eget.
                        </StyledModal>
                        <StyledButton
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                            }}
                            role="button"
                            onClick={toggleModal}
                        >
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
