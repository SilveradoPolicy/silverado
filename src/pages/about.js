// todo: remove this once sanity is integrated
/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import AdvisoryBoard from '../components/advisoryBoard';
import StrategicCouncil from '../components/strategicCouncil';
import CopyWithCTA from '../components/copyWithCTA';
import SEO from '../components/SEO';

const content = {
    hero: {
        body: `Forging a path toward American prosperity and global competitiveness by accelerating bipartisan economic, strategic, and technological policy solutions.`,
        heading: 'Mission Imperative',
    },
    subheading: {
        heading: 'Why "Silverado"?',
        text:
            "Silverado's name is a nod to the Silverado Trail, a 29-mile route that passes through the heart of California's Napa Valley. When the trail was constructed in 1852, it created a new path toward prosperity for California's workers and merchants, connecting mineral mines in the northern valley to commercial shipping routes in the south. Today, the trail winds through the heart Napa Valley's wine country, offering a scenic view of world-class vineyards and the valley's magnificent mountains.",
        textTwo: `Like its namesake, Silverado is forging a new path toward American prosperity in the 21st century—and serving up plenty of wine along the way.`,
    },
    ctasection: {
        text:
            'Realizing a comprehensive American strategy in the twenty-first century will require creativity and collaboration. Silverado works with a bipartisan group of policymakers, stakeholders, and experts to challenge build support for actionable policy initiatives and ignite a 21c race to the top.',
    },
};

export default function AboutPage({ data }) {
    const { dmitri, maureen, sarah, ian, general, turnbull } = data;
    const advisoryBoard = [
        {
            image: general,
            fullName: 'Gen. David Petraeus (Army, Ret.)',
        },
        {
            image: turnbull,
            fullName: 'The Honorable Malcolm Turnbull',
        },
    ];
    const advisoryBio = [
        {
            image: dmitri,
            name: 'Dmitri Alperovitch',
            bio:
                "Dmitri Alperovitch is the Co-Founder and Chairman of Silverado Policy Accelerator, a non-profit focused on advancing American prosperity and global leadership in the 21st century and beyond. He is a Co-Founder and former CTO of CrowdStrike Inc., a leading cybersecurity company.  A renowned cybersecurity visionary and business executive, Alperovitch is a thought-leader on cybersecurity strategy and state tradecraft and has served as special advisor to the Department of Defense. He is a frequent strategic advisor to CEOs and Boards of Directors of public and private companies.  Alperovitch is also an active angel investor and board member of multiple high-growth technology companies. He has been named as one of Fortune Magazine's “40 Under 40” most influential young people in business and Politico Magazine has featured Alperovitch as one of “Politico 50” influential thinkers, doers and visionaries transforming American politics. In 2013, Alperovitch received the prestigious recognition of being selected as MIT Technology Review’s “Young Innovators under 35” (TR35).",
        },
        {
            image: maureen,
            name: 'Maureen Hinman',
            bio:
                'Maureen Hinman is the Co-Founder and Chairman of Silverado Policy Accelerator. Ms. Hinman, a leading policy expert on environmental industry, most recently served as Director for Environment and Natural Resources at the Office of the United States Trade Representative. At USTR she led a range of multilateral, regional, and bilateral trade policy initiatives focused on the environmental goods and services sector as well as natural resource conservation. Ms. Hinman previously served as the U.S. Department of Commerce’s senior industry trade specialist responsible for international policy development and interagency advocacy for the U.S. environmental technology industry. Prior to entering federal service Hinman consulted on regional integration and trade policy implementation at Nathan Associates, a Washington-based economic policy consultancy.',
        },
        {
            image: sarah,
            name: 'Sarah Stewart',
            bio:
                'Sarah V. Stewart is the Executive Director of Silverado Policy Accelerator. Ms. Stewart has nearly two decades of experience as an international trade lawyer, policy expert, and negotiator. Immediately prior to joining Silverado, Ms. Stewart led the public policy efforts at Amazon on U.S. trade policy and export controls matters. From 2013 to 2018, Ms. Stewart worked for the Office of the United States Trade Representative, with her most recent position being the Deputy Assistant United States Trade Representative for Environment and Natural Resources. During her time at USTR, Ms. Stewart was the lead environment chapter negotiator for the US-Mexico-Canada Agreement and the Transatlantic Trade and Investment Partnership (TTIP) negotiations with the European Union. Prior to joining USTR, Ms. Stewart served in different legal and policy roles at The Humane Society of the United States and Humane Society International, including spearheading a first ever international legal group. Ms. Stewart began her career as a trade lawyer at the Law Offices of Stewart and Stewart, where she worked for six years on behalf of U.S. manufacturing companies and workers.',
        },
        {
            image: ian,
            name: 'Ian Ward',
            bio:
                'Ian Ward is a Communications and Research Specialist at Silverado Policy Accelerator. Mr. Ward is a writer and researcher based in his hometown of Washington, D.C. In addition to his work at Silverado, he is a freelance writer and reporter, and his work has appeared in numerous publications, including POLITICO Magazine, Maine Trails Magazine, and The Portland Press Herald. He graduated magna cum laude with honors from Bowdoin College in 2020 with a B.A. in History.',
        },
    ];

    return (
        <Layout>
            <SEO
                title="About Silverado"
                description=" Silverado Policy Accelerator applies a venture model to policy implementation, setting in motion a paradigm shift in how policy is created and implemented."
            />
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <CopyWithCTA
                content={content.subheading}
                hasTopGradient
                hasHeading
            />
            <AdvisoryBoard team={advisoryBio} />
            <StrategicCouncil honoraryMembers={advisoryBoard} />
            <CopyWithCTA
                content={content.ctasection}
                hasBottomGradient
                hasTopTransition
            />
        </Layout>
    );
}

export const query = graphql`
    query AboutQuery {
        heroImage: file(relativePath: { regex: "/heroImage/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dmitri: file(relativePath: { regex: "/dmitriSq/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        maureen: file(relativePath: { regex: "./maureenSq/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        sarah: file(relativePath: { regex: "./sarahSq/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        jessica: file(relativePath: { regex: "/jessica/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        ian: file(relativePath: { regex: "/ianSq/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        general: file(relativePath: { regex: "/general/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        turnbull: file(relativePath: { regex: "/cropped/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
    }
`;

AboutPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        dmitri: PropTypes.object.isRequired,
        maureen: PropTypes.object.isRequired,
        sarah: PropTypes.object.isRequired,
        ian: PropTypes.object.isRequired,
        general: PropTypes.object.isRequired,
        turnbull: PropTypes.object.isRequired,
    }).isRequired,
};
