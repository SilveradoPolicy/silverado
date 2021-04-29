import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const HeroWrapper = styled.section`
    ${tw`container pt-36`}
`;
const StyledImg = styled(Img)`
    ${tw`mt-4`}

    &:before {
        background: ${({ color }) => color};
        content: '';
        height: 20px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }
`;
const StyledLink = styled(Link)`
    ${tw`pb-10 text-brand-1`}
`;
export default function BlogHero({ color, image }) {
    const {
        asset: { fluid: imageData },
    } = image;
    return (
        <HeroWrapper>
            <StyledLink to="/news"> {'<'} Back to News</StyledLink>
            <StyledImg color={color} fluid={imageData} />
        </HeroWrapper>
    );
}

export const query = graphql`
    query BlogHeroQuery {
        silverado: file(relativePath: { regex: "/Silverado1/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
    }
`;

BlogHero.propTypes = {
    color: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
