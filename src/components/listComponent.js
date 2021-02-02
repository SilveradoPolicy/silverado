import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`relative py-32`}
    background: ${(props) =>
        props.gradient
            ? `linear-gradient(180deg, #EDF8F8 0%, rgba(237, 248, 248, 0) 100%);`
            : ''};
`;

const GridWrapper = styled.div`
    ${tw`container px-5 xl:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-wt-bold mb-4 text-center text-brand-1 text-center text-ts-h2`}
`;

const StyledBody = styled.p`
    ${tw`mb-10 mx-auto text-center text-ts-h6`}

    max-width: 85ch;
`;

const StyledList = styled.ul`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-12`}
`;

const StyledListItem = styled.li`
    ${tw`font-wt-reg relative text-black text-ts-h6`}

    line-height: 38.4px;
`;

const StyledListBold = styled(StyledListItem)`
    ${tw`font-wt-bold inline`}
`;

export default function ListComponent({
    body,
    hasTopGradient,
    heading,
    listItems,
}) {
    return (
        <StyledSection gradient={hasTopGradient}>
            <GridWrapper>
                <StyledHeading>{heading}</StyledHeading>
                <StyledBody>{body}</StyledBody>
                <StyledList>
                    {listItems.map((item) => {
                        return (
                            <StyledListItem>
                                <StyledListBold>
                                    {`${item.heading}: `}
                                </StyledListBold>
                                {item.text}
                            </StyledListItem>
                        );
                    })}
                </StyledList>
            </GridWrapper>
        </StyledSection>
    );
}

ListComponent.defaultProps = {
    hasTopGradient: false,
};

ListComponent.propTypes = {
    body: PropTypes.string.isRequired,
    hasTopGradient: PropTypes.bool,
    heading: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
};
