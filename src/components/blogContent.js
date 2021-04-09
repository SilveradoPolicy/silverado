import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

const ContentWrapper = styled.div`
    ${tw`px-4 md:px-8 lg:px-48 mb-14`}
`;
const BlogTitle = styled.h2`
    ${tw`text-ts-h2 text-brand-1 mt-14`}
`;

const SubheaderWrapper = styled.div`
    ${tw`flex text-brand-3 text-ts-body mb-6`}
`;
const Body = styled.p`
    ${tw`text-ts-body mb-8`}
`;
const PillarHeader = styled.h6`
    ${tw`text-brand-1 pt-8 mb-2`}
`;
const Pillar = styled.p`
    ${tw`bg-brand-4 text-white max-w-max p-1`}
`;

const PillarWrapper = styled.div`
    &:before {
        background: var(--brand-1);
        border-radius: 16px;
        content: '';
        height: 4px;
        left: 1;
        position: absolute;
        width: 3rem;
    }
`;
export default function BlogContent() {
    return (
        <ContentWrapper>
            <BlogTitle className="font-wt-bold">
                [Title] Proin non tortor elementum, varius arcu quis, luctus
                risus.
            </BlogTitle>
            <SubheaderWrapper>Month 20, 2021 | Authors Name</SubheaderWrapper>
            <Body>
                Fusce a nisl ut dui iaculis posuere. Pellentesque mauris lorem,
                posuere eget ullamcorper ac, convallis eget urna. Cras
                sollicitudin arcu eget laoreet euismod. Nullam semper ex sed
                ligula luctus cursus. Integer laoreet sed velit non lacinia.
                Integer orci augue, pretium sit amet congue a, aliquam vel
                massa. Aliquam laoreet placerat mauris sit amet lobortis. Nunc
                et lorem ut urna malesuada ultrices. Proin et ex fringilla,
                pulvinar augue in, consectetur libero. Etiam vehicula risus nec
                libero malesuada, vestibulum sollicitudin dolor finibus. Cras
                tristique in nibh in varius. Cras fringilla eu ligula eget
                gravida. Aliquam condimentum gravida enim ac consequat. Nullam
                imperdiet ullamcorper purus, ac aliquet metus gravida sed.
                Aliquam erat volutpat. Mauris id sem sit amet nulla auctor
                venenatis non ut eros. Ut sed rhoncus justo. Nam velit tellus,
                egestas nec mauris nec, mollis imperdiet eros. Suspendisse
                tristique metus a nibh laoreet commodo. Nullam elementum
                venenatis bibendum. [H5] Aliquam non dolor aliquam Aliquet lorem
                ac, vehicula lorem. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Sed ultricies quis mi id pharetra. Aenean
                tincidunt elit ac nisi vestibulum dignissim. Morbi interdum est
                in bibendum faucibus. Cras commodo semper facilisis. Sed vel
                erat in risus tincidunt dictum. Donec sed neque porttitor,
                ornare enim ut, euismod dolor. Vivamus sed fermentum tellus, a
                dapibus risus. Etiam vitae magna lectus. Praesent congue maximus
                hendrerit. Proin non tortor elementum, varius arcu quis, luctus
                risus. Vivamus elementum efficitur iaculis. In vitae blandit
                mauris. Curabitur fringilla risus eu tincidunt sollicitudin.
                Donec rutrum lorem magna, eget luctus mi interdum eget. Nunc
                eget felis at diam lobortis tempus. Donec aliquet vitae ex ut
                convallis. Nam fringilla lacinia placerat. Mauris in pulvinar
                ante. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Aliquam erat volutpat. [H6]
                Aliquam consequat eget erat eu ultrices. Suspendisse pharetra et
                risus vitae laoreet. Cras condimentum magna sed sodales
                volutpat. Quisque maximus rutrum libero in varius. Duis blandit
                tortor vitae sagittis iaculis. Proin luctus purus in condimentum
                ultricies.
            </Body>
            <PillarWrapper className="font-wt-bold">
                <PillarHeader>Pillar</PillarHeader>
                <Pillar>International Trade & Security</Pillar>
            </PillarWrapper>
        </ContentWrapper>
    );
}
