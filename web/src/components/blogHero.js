import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

const HeroWrapper = styled.section`
    ${tw`container pt-36`}
`;
const StyledImg = styled.img`
    ${tw`mt-4 w-full`}

    border-top: ${({ color }) => `20px solid ${color}`};
`;
const StyledLink = styled(Link)`
    ${tw`pb-10 text-brand-1`}
`;
export default function BlogHero({ color, image }) {
    return (
        <HeroWrapper>
            <StyledLink to="/news"> {'<'} Back to News</StyledLink>
            <StyledImg
                src={imageUrlFor(buildImageObj(image))
                    .width(1400)
                    .height(Math.floor((9 / 16) * 1400))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
                color={color}
            />
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
