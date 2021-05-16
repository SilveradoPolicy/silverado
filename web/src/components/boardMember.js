import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const StyledListItem = styled.div`
    ${tw`flex flex-col`}
`;

const BioWrapper = styled.div`
    ${tw`text-white bg-brand-1 px-6 pt-4 pb-6 rounded-3xl md:self-end -mt-2 md:-mt-14 md:w-4/6`}
`;

const BioHeading = styled.h3`
    ${tw`capitalize mb-4 text-ts-h5 font-bold`}
`;

const BioBody = styled.p`
    ${tw`text-ts-sub-detail`}
`;

const ImgWrapper = styled.div`
    ${tw`overflow-hidden rounded-full w-1/2 md:w-2/5`}
`;

export default function BoardMember({ data }) {
    const {
        name,
        bio,
        image: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <StyledListItem key={data.id}>
            <ImgWrapper>
                <Img fluid={fluid} />
            </ImgWrapper>
            <BioWrapper>
                <BioHeading>{name}</BioHeading>
                <BioBody>{bio}</BioBody>
            </BioWrapper>
        </StyledListItem>
    );
}

BoardMember.propTypes = {
    data: PropTypes.object.isRequired,
};
