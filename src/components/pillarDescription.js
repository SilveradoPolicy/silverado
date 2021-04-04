import React from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
    ${tw`pb-12 pt-6`}

    background: linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%)
`;

const DescriptionWrapper = styled.div`
    ${tw`container w-9/12`}
`;

const PillarTitle = styled.h3`
    ${tw`text-brand-1 text-ts-h3 mb-6`}
`;

const PillarDescriptionText = styled.p`
    ${tw`text-ts-body`}
`;

export default function PillarDescription() {
    return (
        <Section>
            <DescriptionWrapper>
                <PillarTitle className="text-wt-thin">
                    Pillar Explanation
                </PillarTitle>
                <PillarDescriptionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas lobortis orci vitae ligula tristique porttitor.
                    Nullam velit nisl, tempus eget consequat ut, luctus a nunc.
                    Mauris justo enim, semper ut tortor vitae, vestibulum tempus
                    enim. Integer eleifend sapien nec dolor pharetra, nec
                    rhoncus diam varius. Phasellus vestibulum vestibulum massa
                    non convallis. Mauris at lectus sit amet diam vulputate
                    dignissim nec ac tortor. Nulla vehicula tristique imperdiet.
                    Quisque efficitur pulvinar egestas. Etiam aliquet hendrerit
                    odio ut blandit. Cras a ipsum sodales enim malesuada
                    scelerisque eget vel justo. Donec urna odio, ornare sit amet
                    turpis nec, tempus placerat arcu. Sed vel pharetra diam.
                    Integer interdum felis at sollicitudin sagittis. Ut quis
                    scelerisque mi, et faucibus mi. Sed egestas suscipit
                    dignissim. Etiam condimentum porttitor porttitor.
                    Suspendisse convallis sem leo, ut mollis nulla egestas ac.
                    Suspendisse mi diam, efficitur quis velit quis, faucibus
                    mattis dolor. Aenean luctus, sapien vitae laoreet tempor,
                    augue nisi euismod nunc, vitae dignissim ex nunc sed elit.
                    Nullam ac tellus tincidunt, dapibus nisl nec, tristique
                    ante. Maecenas ut erat nisl. Pellentesque interdum dolor ut
                    libero rutrum gravida. Phasellus non lectus id urna congue
                    euismod in quis enim. Nulla leo mauris, mattis a porta ac,
                    rutrum eget erat.
                </PillarDescriptionText>
            </DescriptionWrapper>
        </Section>
    );
}
