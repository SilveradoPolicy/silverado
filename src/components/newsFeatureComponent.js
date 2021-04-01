import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';

const StyledImg = styled(Img)`
    ${tw`w-1/3`}
`;

const Header = styled.h4`
    ${tw`text-ts-h4 text-black`}
`;

const SubHeader = styled.h5`
    ${tw`text-sm text-brand-3`}
`;
const Body = styled.p`
    ${tw`text-ts-body`}
`;

export default function NewsFeature({ image, header, body, subheader }) {
    const {
        childImageSharp: { fluid },
    } = image;

    console.log(image);

    return (
        <div>
            <StyledImg fluid={fluid} />
            <Header>{header}</Header>
            <SubHeader>{subheader}</SubHeader>
            <Body>{body}</Body>
        </div>
    );
}

NewsFeature.propTypes = {
    image: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
};
