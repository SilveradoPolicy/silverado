import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';

const FlexWrapper = styled.div`
    ${tw`flex flex-col items-center`}
`;

const ImgWrapper = styled.div`
    ${tw`mb-4 mx-auto h-full overflow-hidden rounded-full w-3/4`}
`;

export default function ImageWithName({ data }) {
    const {
        childImageSharp: { fluid },
    } = data;

    return (
        <FlexWrapper>
            <ImgWrapper>
                <Img fluid={fluid} />
            </ImgWrapper>
        </FlexWrapper>
    );
}

ImageWithName.propTypes = {
    data: PropTypes.object.isRequired,
};
