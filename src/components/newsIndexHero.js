// import React from 'react';
// import { graphql } from 'gatsby';

// import PropTypes from 'prop-types';

// import styled from 'styled-components';
// import tw from 'twin.macro';

// import NewsFeatureComponent from './newsFeatureComponent';

// const Section = styled.section`
//     ${tw`flex`}
// `;

// const StyledHeader = styled.h2`
//     ${tw`text-brand-1 text-ts-h2`}
// `;

// export default function NewsIndexHero({ data }) {
//     const { newsImage } = data;

//     const content = {
//         newsDetail: {
//             header: 'hello',
//             body: 'hello',
//             subheader: 'hello',
//         },
//     };

//     return (
//         <Section>
//             <StyledHeader className="font-wt-bold">News</StyledHeader>
//             <NewsFeatureComponent
//                 image={newsImage}
//                 body={content.newsDetail.body}
//                 header={content.newsDetail.header}
//                 subheader={content.newsDetail.subheader}
//             />
//         </Section>
//     );
// }

// export const query = graphql`
//     query NewsIndexHeroQuery {
//         newsImage: file(relativePath: { regex: "/eventimage/" }) {
//             childImageSharp {
//                 fluid(maxWidth: 1000) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `;

// NewsIndexHero.propTypes = {
//     data: PropTypes.shape({
//         newsImage: PropTypes.object.isRequired,
//     }).isRequired,
// };
