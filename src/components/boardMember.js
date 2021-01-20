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
    ${tw`capitalize font-wt-bold mb-4 text-ts-h5`}
`;

const BioBody = styled.p`
    ${tw`text-ts-sub-detail`}
`;

const ImgWrapper = styled.div`
    ${tw`overflow-hidden rounded-full w-1/2 md:w-2/5`}
`;

export default function BoardMember({ data }) {
    const {
        childImageSharp: { fluid },
    } = data;
    return (
        <StyledListItem key={data.id}>
            <ImgWrapper>
                <Img fluid={fluid} />
            </ImgWrapper>
            <BioWrapper>
                <BioHeading>dmitri alperovitch</BioHeading>
                <BioBody>
                    Quisque consequat, massa ut convallis sagittis, ipsum lectus
                    tempus urna, nec consequat massa leo sed metus. Morbi eget
                    justo justo augue. Etiam a tortor ligula. Duis pharetra
                    egestas urna eu maximus. Integer venenatis convallis
                    elementum. ullamcorper consequat nibh, ac sodales nunc
                    vestibulum eget. Nam ultrices blandit velit at finibus.
                    Nulla vitae condimentum risus. Sed vitae porta tortor. Nulla
                    interdum sapien mi.
                </BioBody>
            </BioWrapper>
        </StyledListItem>
    );
}

BoardMember.propTypes = {
    data: PropTypes.object.isRequired,
};
