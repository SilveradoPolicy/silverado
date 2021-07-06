import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { format, parseISO } from 'date-fns';

import styled from 'styled-components';
import tw from 'twin.macro';

const StyledFeaturedEvent = styled.div`
    ${tw`md:w-full`}
`;

const StyledImg = styled(Img)`
    ${tw`w-full my-4`}
`;

const Heading = styled.h4`
    ${tw`text-ts-h4 text-black leading-8 max-w-sm font-bold`}
`;

const EventInfo = styled.h5`
    ${tw`text-sm text-brand-3 pt-1`}
`;

const Body = styled.p`
    ${tw`text-ts-body my-4`}
`;

const StyledLink = styled(Link)`
    ${tw`underline text-brand-3 pr-6 py-4`}
`;

export default function NewsFeature({ data }) {
    const content = data[0];
    const date = parseISO(content.publishDate);
    const formattedDate = format(date, 'MM/dd/yyyy');

    return (
        <StyledFeaturedEvent>
            <StyledImg fluid={content.heroImage.asset.fluid} />
            <Heading>{content.title}</Heading>
            <EventInfo>
                {content.author} | {formattedDate}
            </EventInfo>
            <Body>{content.description}</Body>
            <StyledLink to={`/news/${content.slug.current}`}>
                Read More
            </StyledLink>
        </StyledFeaturedEvent>
    );
}

NewsFeature.propTypes = {
    data: PropTypes.array.isRequired,
};
