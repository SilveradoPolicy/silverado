import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import BoardMember from './boardMember';

const StyledSection = styled.section`
    ${tw`container px-4 md:px-0`}
`;

const StyledList = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-24`}
`;

export default function AdvisoryBoard({ team }) {
    return (
        <StyledSection>
            <StyledList>
                {team.map((item) => {
                    return <BoardMember data={item} key={item.id} />;
                })}
            </StyledList>
        </StyledSection>
    );
}

AdvisoryBoard.propTypes = {
    team: PropTypes.array.isRequired,
};
