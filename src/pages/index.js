import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../layouts/page-layout';

const StyledHeading = styled.h1`
    ${tw`text-ts-citation text-brand-1`}
`;

export default function IndexPage() {
    return (
        <Layout>
            <StyledHeading>testing paragraph</StyledHeading>
        </Layout>
    );
}
