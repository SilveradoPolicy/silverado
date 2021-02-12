import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';

const FlexWrapper = styled.div`
    ${tw`flex flex-col items-center`}
`;

const ImgWrapper = styled.div`
    ${tw`overflow-hidden rounded-full w-3/4`}
`;

const StyledName = styled.div`
    ${tw`capitalize text-brand-1 text-ts-h5`}
`;

export default function ImageWithName({ data }) {
    const {
        fullName,
        image: {
            childImageSharp: { fluid },
        },
    } = data;

    return (
        <FlexWrapper>
            <ImgWrapper>
                <Img fluid={fluid} />
            </ImgWrapper>
            <StyledName className="font-wt-bold">{fullName}</StyledName>
        </FlexWrapper>
    );
}

ImageWithName.propTypes = {
    data: PropTypes.object.isRequired,
};
