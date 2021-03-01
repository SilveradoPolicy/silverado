import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledName = styled.h5`
    ${tw`capitalize text-brand-1 text-ts-h5`}
`;

const StyledTitle = styled.p`
    ${tw`capitalize text-brand-1 text-ts-h5`}
`;

const StyledDiv = styled.div`
    ${tw`w-80 p-6 bg-opacity-100 bg-white rounded-lg shadow-lg absolute`}
`;

export default function StrategicAdvisor({ data }) {
    const [isShown, setIsShown] = useState(false);
    const { advisorFullName, title } = data;
    return (
        <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <StyledName className="font-wt-bold">{advisorFullName}</StyledName>
            <StyledTitle className="font-wt-thin">{title}</StyledTitle>
            {isShown && (
                <StyledDiv>
                    Quisque consequat, massa ut convallis sagittis, ipsum lectus
                    tempus urna, nec consequat massa leo sed metus. Morbi eget
                    justo augue. Etiam a tortor ligula. Duis pharetra egestas
                    urna eu maximus. Integer venenatis convallis elementum.
                    Donec ullamcorper consequat nibh, ac sodales nunc vestibulum
                    eget. Nam ultrices blandit velit at finibus. Nulla vitae
                    condimentum risus. Sed vitae porta tortor. Nulla interdum
                    sapien mi..
                </StyledDiv>
            )}
        </div>
    );
}

StrategicAdvisor.propTypes = {
    data: PropTypes.object.isRequired,
};
