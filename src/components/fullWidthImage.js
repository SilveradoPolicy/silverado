import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const StyledSection = styled.section`
    ${tw`my-20`}

    background: linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%);
`;

const Wrapper = styled.div`
    ${tw`container px-5 lg:px-0 transform transform-gpu -translate-y-1/4`}
`;

export default function FullWidthImage({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <StyledSection>
            <Wrapper>
                <Img fluid={fluid} />
            </Wrapper>
        </StyledSection>
    );
}

FullWidthImage.propTypes = {
    image: PropTypes.object.isRequired,
};
