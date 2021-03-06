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
    const {
        dmitri,
        maureen,
        sarah,
        ian,
        general,
        turnbull,
        haley,
        megan,
    } = data;
    const advisoryBoard = [
        {
            image: general,
            fullName: 'General David Petraeus (US Army, Ret.)',
            title: 'Partner, KKR and Chairman KKR Global Institute',
            bio:
                'General David H. Petraeus (US Army, Ret.) is a Partner with the global investment firm KKR and Chairman of the KKR Global Institute, which he established in May 2013.  He is also a member of the boards of directors of Optiv and FirstStream, a venture investor in more than 15 startups, and engaged in a variety of academic endeavors.  Prior to joining KKR, General Petraeus served over 37 years in the U.S. military, culminating his career with six consecutive commands, five of which were in combat. Following retirement from the military and after Senate confirmation by a vote of 94-0, he served as Director of the CIA during a period of significant achievements in the global war on terror, the establishment of important Agency digital initiatives, and significant investments in the Agency’s most important asset, its human capital. General Petraeus graduated with distinction from the U.S. Military Academy, and he is the only person in Army history to be the top graduate of both the demanding U.S. Army Ranger School and the U.S. Army’s Command and General Staff College.  He also earned a Ph.D. from Princeton University’s School of Public and International Affairs. He is currently a Visiting Fellow at Yale University’s Jackson Institute, Co-Chairman of the Global Advisory Council of the Woodrow Wilson Center for International Scholars, Senior Vice President of the Royal United Services Institute, and a Member of the Trilateral Commission, as well as a member of the boards of the Atlantic Council, the Institute for the Study of War, and over a dozen veterans service organizations.  General Petraeus has earned numerous honors, awards, and decorations, including four Defense Distinguished Service Medals, the Bronze Star Medal for Valor, two NATO Meritorious Service Medals, the Combat Action Badge, the Ranger Tab, and Master Parachutist and Air Assault Badges.  He has also been decorated by 13 foreign countries, and he is believed to be the only person who, while in uniform, threw out the first pitch of a World Series game and did the coin toss at a Super Bowl.',
        },
        {
            image: turnbull,
            fullName: 'The Hon. Malcolm Turnbull',
            title: 'Australia’s 29th Prime Minister',
            bio:
                'Australia’s 29th Prime Minister (2015-2018) had international careers in law, business and the  media before entering politics at the age of 50.  As Prime Minister, he reformed Australia’s personal income tax, education and childcare  systems, oversaw the legalisation of same sex marriage and announced the construction of  Snowy Hydro 2.0 the biggest pumped hydro scheme in the southern hemisphere. Mr Turnbull embarked on the largest peacetime investment in Australian defence capabilities and set out Australia’s first national cybersecurity strategy. Globally, Mr. Turnbull played a leading role in reviving the Trans Pacific Partnership (TPP-11 or  CPTPP) after the United States withdrew. He also struck deals with U.S. Presidents Obama and Trump to accept refugees who tried to arrive in Australia illegally by boat. As a young lawyer, Mr. Turnbull successfully defended former MI5 agent Peter Wright against  the British Government in the 1986 “Spycatcher” trial before entering business where he ran his  own investment banking firm for a decade before joining Goldman Sachs as a partner in 1997.  Both before and after his political career, Mr. Turnbull has been a successful venture capitalist.  He co-founded OzEmail Limited, the first Australian tech company to be listed on the NASDAQ. Since leaving politics, Mr. Turnbull has resumed his business career. He is a senior adviser to  KKT and an investor in, and adviser to, many Australian technology businesses. He is a director of the International Hydropower Association. Mr. Turnbull speaks and writes on a range of issues including cyber security, geopolitics and renewable energy.',
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
        {
            image: haley,
            name: 'Haley Dorval',
            bio:
                'Haley Dorval is a Policy Analyst at Silverado Policy Accelerator. Most recently, Ms. Dorval served as Senior Director for Policy under Ambassador Robert Lighthizer at the Office of the United States Trade Representative. In this capacity, she managed the development of U.S. trade policy initiatives and negotiations, with a particular focus on the United States-Mexico-Canada Agreement, the U.S.-China Phase One Agreement, and the U.S.-Japan Trade Agreement. Prior to her service in the executive branch, Ms. Dorval worked on Capitol Hill for Congressman Austin Scott (GA-08), a senior member on the House Armed Services and Agriculture Committees. Ms. Dorval earned a B.A. in International Affairs from Northeastern University and an M.A. in Defense and Strategic Studies from the United States Naval War College.',
        },
        {
            image: megan,
            name: 'Meagan Reid',
            bio:
                'Meagan Reid is a Junior Economist and Policy Analyst at Silverado Policy Accelerator. While Ms. Reid has focused her academic studies on Civil-Military Relations and Econometric Impact Evaluation, her professional experience includes criminal data analysis, the development of human rights monitoring mechanisms in the extractive industry, and studying disaster preparedness programming for the American Red Cross. Prior to joining Silverado, Ms. Reid earned a Master of Arts in Law and Diplomacy from the Fletcher School at Tufts University with concentrations in Development Economics and International Security.',
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
        haley: file(relativePath: { regex: "/haleySq/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }
        megan: file(relativePath: { regex: "/megan/" }) {
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
        haley: PropTypes.object.isRequired,
        megan: PropTypes.object.isRequired,
    }).isRequired,
};
