import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardContainer = styled.div`
    ${tw`w-72 h-96 shadow-xl bg-white relative my-10`}
    &:before {
        background: var(--brand-1);
        content: '';
        height: 20px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
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
    ${tw`text-black text-base`}
`;

const EventDetails = styled.p`
    ${tw`text-black text-base`}
`;
const StyledLink = styled(Link)`
    ${tw`underline text-brand-3 absolute bottom-0 left-0 px-6 py-4`}
`;
export default function BlogCard({ data }) {
    const {
        description,
        eventdate,
        place,
        time,
        title,
        subtitle,
        image: {
            childImageSharp: { fluid },
        },
        id,
    } = data;

    return (
        <CardContainer>
            <Img fluid={fluid} />
            <CardWrapper id={id}>
                <CardTitle className="font-wt-bold">{title}</CardTitle>
                <CardSubTitle>{subtitle}</CardSubTitle>
                {description && <BlogDetails>{description}</BlogDetails>}
                {eventdate && (
                    <div>
                        <EventDetails>{eventdate}</EventDetails>
                        <EventDetails>{time}</EventDetails>
                        <EventDetails>{place}</EventDetails>
                    </div>
                )}
                <StyledLink to="#">Read More</StyledLink>
            </CardWrapper>
        </CardContainer>
    );
}

BlogCard.propTypes = {
    data: PropTypes.object.isRequired,
};
