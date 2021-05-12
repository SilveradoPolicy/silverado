import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { AnimatePresence } from 'framer-motion';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardContainer = styled.div`
    ${tw`w-72 overflow-auto shadow-xl bg-white relative mb-4 md:mb-8`}
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
    .card {
        height: 28rem;
    }
    .gatsby-image-wrapper {
        margin-top: 20px;
        height: 150px;
    }
`;

const CardWrapper = styled.div`
    ${tw`px-6 py-4`}
`;

const CardTitle = styled.h5`
    ${tw`text-brand-1 text-ts-h5`}
`;
const CardSubTitle = styled.p`
    ${tw`text-brand-3 text-base pb-2`}
`;

const BlogDetails = styled.p`
    ${tw`text-black text-base `}
`;

const EventDetails = styled.p`
    ${tw`text-black text-base`}
`;
const StyledLink = styled(Link)`
    ${tw`underline text-brand-3 absolute bottom-0 left-0 px-6 py-4`}
`;
export default function BlogCard({ data, isShown }) {
    const {
        categories,
        description,
        eventdate,
        heroImage,
        id,
        place,
        slug,
        subtitle,
        time,
        title,
    } = data.node;

    const imageData = heroImage?.asset?.fluid;
    const primaryPillarColor = categories[0].color;

    return (
        <AnimatePresence>
            {isShown && (
                <CardContainer color={primaryPillarColor} className="card">
                    {imageData && <Img fluid={imageData} />}
                    <CardWrapper id={id}>
                        <CardTitle className="font-wt-bold">{title}</CardTitle>
                        {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
                        {description && (
                            <BlogDetails>{description}</BlogDetails>
                        )}
                        {eventdate && (
                            <>
                                <EventDetails>{eventdate}</EventDetails>
                                <EventDetails>{time}</EventDetails>
                                <EventDetails>{place}</EventDetails>
                            </>
                        )}
                        <StyledLink to={`/news/${slug.current}`}>
                            Read More
                        </StyledLink>
                    </CardWrapper>
                </CardContainer>
            )}
        </AnimatePresence>
    );
}

BlogCard.propTypes = {
    data: PropTypes.object.isRequired,
    isShown: PropTypes.bool.isRequired,
};
