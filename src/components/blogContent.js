import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

const ContentWrapper = styled.div`
    ${tw`container`}
`;
const BlogTitle = styled.h2`
    ${tw`text-ts-h2 text-brand-1`}
`;
// const Date = styled.p`
//     ${}
// `
export default function BlogContent() {
    return (
        <ContentWrapper>
            <BlogTitle>
                [Title] Proin non tortor elementum, varius arcu quis, luctus
                risus.
            </BlogTitle>
            {/* <Date>Month 20, 2021</Date> {'|'} <Author>Authors Name</Author> */}
            {/* <Body></Body> */}
        </ContentWrapper>
    );
}
