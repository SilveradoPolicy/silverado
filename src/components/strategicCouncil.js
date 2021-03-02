import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import HonoraryMembersSection from './honoraryMembers';
import StrategicAdvisorsSection from './strategicAdvisorsSection';

const StyledSection = styled.section`
    ${tw`container mb-40`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize mb-8 text-brand-1 text-ts-h2`}
`;

export default function StrategicCouncil({ honoraryMembers }) {
    const strategicAdvisors = [
        {
            advisorFullName: 'Heather Adkins',
            title: 'Senior Director of Information Security at Google',
            bio:
                'Heather Adkins is a 19-year Google veteran and founding member of the Google Security Team. As Sr Director of Information Security, she has built a global team responsible for maintaining the safety and security of Google’s networks, systems and applications. She has an extensive background in practical security, and has worked to build and secure some of the world’s largest infrastructure.  Adkins now focuses her time primarily on the defense of Google’s computing infrastructure and working with industry to tackle some of the greatest security challenges. She is co-author of Building Secure and Reliable Systems (O’Reilly, 2020) and has advised numerous organizations on how to adopt modern defendable systems architectures. She is passionate about the security of election systems, and has consulted as part of the Defending Digital Democracy project at the Belfer Center for Science and International Affairs at Harvard Kennedy School.',
        },
        {
            advisorFullName: 'Michael Allen',
            title: 'Managing Director, Beacon Global Strategies',
            bio:
                'Mr. Allen has spent his career in the national security arena working in the White House, Capitol Hill, and in the private sector advising on critical national security issues such as cybersecurity, non-proliferation, and intelligence matters.  Mr. Allen now advises clients on the intersection of business and national security and helps them develop targeted Washington strategies. Mr. Allen supports clients in understanding U.S.-China dynamics, foreign direct investment and CFIUS, national security critical technologies such as AI, as well as trade and challenges arising from geopolitical instability.  From 2011-2013, Mr. Allen served as the Majority Staff Director of the House Permanent Select Committee on Intelligence (HPSCI).  Prior to joining the HPSCI, Allen was director for the Bipartisan Policy Center’s successor to the 9/11 Commission, the National Security Preparedness Group. Previously, Mr. Allen served in the George W. Bush White House for seven years in a variety of national security policy and legislative roles. Mr. Allen was also the Intelligence Team Lead for the Romney for President Transition Team and is currently the Intelligence Chairman for the John Hay Initiative. Allen is a member of the Council on Foreign Relations, The Atlantic Council, the Institute for Strategic and International Studies, and is a Senior Fellow for Cyber Security for the National Defense Industry Association (NDIA). Mr. Allen has authored several books, and is a frequent contributor and commentator on national security and foreign policy issues on CNN, MSNBC, and Fox. Mr. Allen received his L.L.M. with distinction in International Law from the Georgetown University Law Center, his J.D. from the University of Alabama (cum laude), and his B.A. from Vanderbilt University.',
        },
        {
            advisorFullName: 'Robert D. Atkinson',
            title:
                'Founder and President, the Information Technology and Innovation Foundation',
            bio:
                'Robert D. Atkinson is the founder and president of the Information Technology and Innovation Foundation (ITIF), recognized as the world’s top think tank for science and technology policy.  Mr. Atkinson is an internationally recognized scholar and a widely published author. He also has conducted groundbreaking research projects and authored hundreds of articles and reports on technology and innovation-related topics. He has testified before the United States Congress more than 30 times. President Clinton appointed Mr. Atkinson to the Commission on Workers, Communities, and Economic Change in the New Economy; the Bush administration appointed him chair of the congressionally created National Surface Transportation Infrastructure Financing Commission; the Obama administration appointed him to the National Innovation and Competitiveness Strategy Advisory Board; and the Trump administration appointed him to the G7 Global Partnership on Artificial Intelligence. He is a founding member of the Polaris Council, a body of cross-sectoral, interdisciplinary science and technology policy experts who advise the U.S. Government Accountability Office’s Science, Technology Assessment, and Analytics (STAA) team on emergent and emerging issues facing the Congress and the nation.  Mr. Atkinson is a member of the Markle Foundation Task Force on National Security in the Information Age and serves on a variety of boards or advisory councils. Mr. Atkinson holds a Ph.D. in city and regional planning from the University of North Carolina, Chapel Hill, and a master’s degree in urban and regional planning from the University of Oregon.',
        },
        {
            advisorFullName: 'Jeremy Bash',
            title: 'Founder and Managing Director, Beacon Global Strategies',
            bio:
                'Mr. Bash has spent the past 20 years advising national leaders and chief executives on a range of strategic, management, legal, and policy issues. His clients include America’s leading companies in the areas of tech, defense, finance, security, and aerospace.  He served as Chief of Staff to the Director of the CIA (2009-2011) and as Chief of Staff to the Secretary of Defense (2011-2013). As a senior advisor to Leon E. Panetta in both roles, Mr. Bash worked on a number of key initiatives, including the creation of a new defense strategy, formation of two defense budgets, the drawdown of two wars, counterterrorism operations, a new cyber strategy, and a range of sensitive intelligence operations. From August 2010 to May 2011, he was a member of the CIA’s senior management team overseeing the operation that killed Osama Bin Laden. In 2008, Mr. Bash was a member of the Obama-Biden transition team. From 2004-2008, Mr. Bash served in a variety of roles on Capitol Hill, including Chief Counsel to the House Permanent Select Committee on Intelligence and as a senior national security advisor to Congresswoman Jane Harman. Prior to that, Mr. Bash practiced law at O’Melveny & Myers LLP.  Mr. Bash is the recipient of the Department of Defense’s Distinguished Public Service Medal, the CIA Director’s Award, the Distinguished Intelligence Medal, and the Donovan Award from the National Clandestine Service.  Mr. Bash graduated from Georgetown University, magna cum laude, and was elected to Phi Beta Kappa. He earned his law degree from Harvard Law School, where he graduated cum laude and was an editor of the Harvard Law Review.',
        },
        {
            advisorFullName: 'Thomas P. Bossert',
            title: 'President, TrinityCyber, Inc.',
            bio:
                'Thomas Bossert is the President of TrinityCyber, Inc. and an ABC News Homeland Security analyst. He served as the former Homeland Security Advisor to Presidents Trump and President Bush, serving as the nation’s chief risk officer and senior most advisor on cybersecurity, homeland security, counterterrorism, and global health security policy, and managing a range of domestic and transnational security issues and consequence management operations. Mr. Bossert has held positions in the Federal Emergency Management Agency, the Small Business Administration, the Office of the Independent Counsel, and the House of Representatives. He also was appointed as the Director of Infrastructure Protection under President Bush, overseeing the security of critical U.S. infrastructure. Mr. Bossert ​is also a distinguished fellow in the Scowcroft Center for Strategy and Security at the Atlantic Council.',
        },
        {
            advisorFullName: 'Julie Cerqueira',
            title: 'Executive Director, the U.S. Climate Alliance',
            bio:
                'Julie Cerqueira is the Executive Director of the U.S. Climate Alliance, where she helps to advance the climate and clean energy policy priorities of the Alliance’s Governors and their offices.  Ms. Cerqueira most recently served as a Senior Advisor to the Special Envoy for Climate Change with the U.S. Department of State.  In this role, she led U.S. engagement in strategic partnerships, such as the Climate and Clean Air Coalition, helped launch high profile climate deliverables for North America and the U.S. Chairmanship of the Arctic Council, and led the Department’s engagement with sub-national governments on climate change, amongst other priorities.  Prior to her work in the federal government, Ms. Cerqueira worked with developing countries on designing and implementing sectoral climate policies at the Center for Clean Air Policy.  She also spent four years in Southeast Asia working with local communities, governments and the private sector on environmental projects and promoting policy reforms with the American Chamber of Commerce in Indonesia and the U.S. Peace Corps Philippines.  Ms. Cerqueira has a master’s degree from Fordham University in International Political Economy and Development, and an undergraduate degree in Biotechnology from Worcester Polytechnic Institute.',
        },
        {
            advisorFullName: 'John Conger',
            title:
                'President, Conger Strategies and Solutions, LLC; Director, the Center for Climate and Security',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Nicholas Consonery',
            title:
                'Director of Global Markets Research and Strategy, The Eurasia Group',
            bio:
                "Nicholas Consonery is a strategist and advisor on international markets and policy risk. Mr. Consonery is the director of global markets research and strategy at Eurasia Group, where he drives strategic initiatives including helping to manage the firm's largest business units and relationships with key clients. Nick previously was a director of China analysis at Eurasia. He also was a Senior Director of Asia political and country risk at FTI Consulting and the director of Rhodium Group’s China Macro & Policy team. At Rhodium, Mr. Consonery oversaw the production of the China Reform Dashboard in coordination with the Asia Society Policy Institute.  Mr. Consonery's primary areas of focus are China’s political economy, economic reform outlook and business environment, and US-China relations.  Mr. Consonery holds a masters' degree in Asian studies from the Elliott School of International Affairs at the George Washington University and a bachelor's degree in political science and Asian studies from Furman University. He has done graduate and undergraduate work at three different universities in China including Fudan University in Shanghai. He is completing a masters' of business administration at Yale University. He is also a member of the National Committee on US-China Relations.",
        },
        {
            advisorFullName: 'Wendy Cutler',
            title: 'Vice President, the Asia Society Policy Institute',
            bio:
                "Wendy Cutler is Vice President at the Asia Society Policy Institute (ASPI) and the managing director of the Washington, D.C. office. In these roles, she focuses on building ASPI’s presence in the nation's capital and on leading initiatives that address challenges related to trade, investment and innovation, as well as women’s empowerment in Asia. Ms. Cutler joined ASPI following an illustrious career of nearly three decades as a diplomat and negotiator in the Office of the U.S. Trade Representative (USTR), where she also served as Acting Deputy U.S. Trade Representative. During her USTR career, she worked on a range of bilateral, regional and multilateral trade negotiations and initiatives, including the U.S.-Korea Free Trade Agreement, the Trans Pacific Partnership, U.S.-China negotiations and the WTO Financial Services negotiations. Ms. Cutler has published a series of ASPI papers on the Asian trade landscape, and serves as a regular media commentator on trade and investment developments in Asia and the world.",
        },
        {
            advisorFullName: 'Ivo Daalder',
            title: 'President, the Chicago Council on Global Affairs',
            bio:
                'Ivo H. Daalder is president of the Chicago Council on Global Affairs. Under his tenure as president, Mr. Daalder led the creation of the Pritzker Forum on Global Cities, an annual forum for global civic, corporate, cultural, and education leaders to discuss how cities can play a bigger role in addressing the world’s global challenges. Over the last decade, the annual Chicago Council Survey of public attitudes on foreign policy has become the go-to resource for understanding what Americans think about the U.S. role in the world. Prior to joining the Council in July 2013, Mr. Daalder served as the US Ambassador to the North Atlantic Treaty Organization.  For his services at NATO, Ambassador Daalder was awarded the U.S. Secretary of Defense Medal for Outstanding Public Service, the Order of Merit by the Federal Republic of Germany, the Order of the Cross of Terra Mariana of the Republic of Estonia, and the Order of the Three Star of the Republic of Latvia.  Mr. Daalder also served as director for European Affairs on the US National Security Council staff from 1995-97. Before his appointment as Ambassador to NATO by President Obama in 2009, Mr. Daalder was a senior fellow in foreign policy studies at the Brookings Institution (1998-2009) and Associate Professor at the University of Maryland’s School of Public Policy (1988-98). Mr. Daalder is also a widely-published author, and writes a biweekly foreign affairs column for the Chicago Tribune. He was educated at the Universities of Kent, Oxford, and Georgetown, received his PhD in political science from the Massachusetts Institute of Technology, and an honorary Doctor of Civil Law from the University of Kent. Daalder was born in the Netherlands in 1960.',
        },
        {
            advisorFullName: 'Richard Danzig',
            title:
                'Former Secretary of the Navy, Senior Intelligence and Defense Consultant',
            bio:
                'Richard Danzig’s primary activities in recent years have been as a consultant to U.S. Intelligence Agencies and the Department of Defense on national security issues. He is a Senior Advisor to the Johns Hopkins Applied Physics Laboratory, Chair of the Advisory Panel for Idaho National Laboratories’ Innovation Center, a Director of the Center for a New American Security and a Director of Saffron Hill Ventures (a European investment firm). In recent times, Dr. Danzig has been a director of National Semiconductor Corporation (NY Stock Exchange) and Human Genome Sciences Corporation (NASDAQ). He has served as The Chairman of the Board of The Center for a New American Security, Chairman of the Board of the Center for Strategic and Budgetary Assessments, and as a member of the RAND Corporation’s Board of Trustees. Dr. Danzig has also been a member of President’s Intelligence Advisory Board, the Secretary of Defense’s Defense Policy Board, the Homeland Security Secretary’s Advisory Council, the Aspen Strategy Group, the Toyota Research Institute Advisory Board, the Cyber Resilience Forum of the National Academies of Sciences, Engineering, and Medicine and the Reed College Board of Trustees. Dr. Danzig served as the 71st Secretary of the Navy from November 1998 to January 2001.  He was the Under Secretary of the Navy between 1993 and 1997.  From the spring of 2007 through the Presidential election of 2008, Dr. Danzig was a senior advisor to Senator Obama on national security issues. Dr. Danzig received a B.A. degree from Reed College, a J.D. degree from Yale Law School, and Bachelor of Philosophy and Doctor of Philosophy degrees from Oxford University, where he was a Rhodes Scholar.  Upon his graduation from Yale, Dr. Danzig served as a law clerk to U.S. Supreme Court Justice Byron White.  In addition to his service in the US Department of Defense, he was a Professor at Stanford Law School, a member of the Harvard Society of Fellows, a partner in the law firm Latham and Watkins, and a Rockefeller Foundation fellow. He is the author of two books and numerous articles.',
        },
        {
            advisorFullName: 'Mark Galeotti',
            title: 'Principal Director, Mayak Intelligence',
            bio:
                'Prof. Mark Galeotti is principal director of the consultancy Mayak Intelligence, as well as an Honorary Professor at University College London, Senior Associate Fellow of RUSI and a Senior Nonresident Fellow at both the Institute of International Relations Prague and Middle East Institute. He specialises in Russian security and political affairs, as well as the murky subjects of modern warfare, intelligence, and transnational and organised crime.  Prof. Galeotti has published widely, with more than 20 authored and edited books to his name. He read history at Robinson College, Cambridge University and then took his doctorate in politics at the London School of Economics. Formerly head of history at Keele University in the UK, Mr. Galeotti has also been attached to the UK Foreign & Commonwealth Office, as an adviser covering Russian security issues, chaired the Center for Global Affairs at New York University, headed the Centre for European Security at the Institute of International Relations Prague and been a visiting fellow at Rutgers-Newark, Charles University (Prague) and MGIMO (Moscow). He has also worked with a wide range of institutions, from NATO and Interpol, to national ministries and intelligence agencies, and commercial clients.',
        },
        {
            advisorFullName: 'Steve Glickman',
            title: 'Founder and CEO, Develop LLC',
            bio:
                'Steve Glickman is the Founder and CEO of Develop LLC, the first independent advisory firm exclusively dedicated to building and supporting Opportunity Zone Funds and the broader Opportunity Zones marketplace. Mr. Glickman is also the Co-Founder and former CEO of the Economic Innovation Group, the bipartisan public policy organization that developed the concept and legislation that launched the Opportunity Zones program. Mr. Glickman previously served in the Obama Administration as a senior economic advisor at the White House, where he managed international trade, foreign investment, manufacturing and small business issues for the National Security Council and National Economic Council. He was also Chief of Staff for the U.S. and Foreign Commercial Service.  Prior to the Administration, Mr. Glickman served in legal roles on Capitol Hill, the U.S. Department of Justice, the Democratic National Committee, and a private law firm. Steve received his B.A. and M.A. from Georgetown University, J.D. from Columbia Law School, and LL.M. from the London School of Economics. He is an Adjunct Professor at Georgetown University, and serves on the Board of The NewDEAL.',
        },
        {
            advisorFullName: 'Jason Healey',
            title:
                'Senior Research Scholar, Columbia University’s School for International and Public Affairs',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'John C. (Chris) Inglis',
            title:
                'Robert Looker Distinguished Chair for Cyber Operations, U.S. Naval Academy',
            bio:
                "Mr. Inglis currently serves as the current U. S. Naval Academy Looker Distinguished Visiting Professor for Cyber Studies.  He retired from the Department of Defense in January 2014 after 41 years of federal service, including 28 years at NSA and seven and a half years as its Deputy Director. He is a managing director at Paladin Capital, a trustee of the National Intelligence University, a member of the Boards of FedEx and Huntington Bank, and a Commissioner on the US Cyberspace Solarium Commission. Mr. Inglis holds advanced degrees in engineering and computer science from Columbia University, Johns Hopkins University, and the George Washington University. Mr. Inglis’ military career includes 30 years of service in the US Air Force and Air National Guard. He retired as a Brigadier General and holds the rating of Command Pilot.  Mr. Inglis is the recipient of numerous awards, including three Presidential Rank Awards, and the President’s National Security Medal. Mr. Inglis holds advanced degrees in engineering and computer science from Columbia University (MS), Johns Hopkins University (MS), and the George Washington University (Professional Degree). He is also a graduate of the Kellogg Business School executive development program, the USAF Air War College, Air Command and Staff College, and Squadron Officers' School.",
        },
        {
            advisorFullName: 'Jamil Jaffer',
            title:
                'Founder and Executive Director, the National Security Institute',
            bio:
                'Jamil Jaffer currently serves as Founder and Executive Director of the National Security Institute and as an Assistant Professor of Law and Director of the National Security Law & Policy Program at the Antonin Scalia Law School at George Mason University, where he teaches classes on counterterrorism, intelligence, surveillance, cybersecurity, and other national security matters.  Jaffer also currently serves as Vice President for Strategy, Partnerships & Corporate Development at IronNet Cybersecurity, a startup technology firm founded by former NSA Director Gen. (ret.) Keith B. Alexander. Jaffer serves in a number of advisory positions and on advisory boards, including as an advisor to Beacon Global Strategies, and as a member of the Center for a New American Security’s Task Force on Artificial Intelligence and National Security and the CNAS Digital Freedom Forum. Jaffer served as a law clerk to Justice Neil M. Gorsuch of the United States Supreme Court, and in various congressional positions including on the leadership team of the Senate Foreign Relations Committee as Chief Counsel and Senior Advisor under Chairman Bob Corker (R-TN). Prior to that, Jaffer served in the White House under President Bush as an Associate Counsel to the President, and in various roles at the Department of Justice focused on national security, counterterrorism, and intelligence matters.  Jaffer holds degrees with honors from UCLA, the University of Chicago Law School, and the United States Naval War College.',
        },
        {
            advisorFullName: 'Richard H. Ledgett, Jr. (Rick)',
            title: 'Former Deputy Director, National Security Agency',
            bio:
                'Mr. Ledgett has four decades of intelligence and cyber experience, including 29 years with the National Security Agency (NSA), where he served as Deputy Director from January 2014 until his retirement in April 2017. He was the Agency’s chief operating officer, responsible for providing foreign intelligence and protecting the nation’s most important national security-related networks and information.  Mr. Ledgett led NSA’s Media Leaks Task Force, responsible for the totality of the Agency’s efforts following the unauthorized disclosure of classified information in June 2013.  He previously helmed the NSA’s 24/7 Threat Operations Center (NTOC), responsible for identifying and countering cyber threats to our national security systems. He was the Intelligence Community’s first National Intelligence Manager for Cyber, serving as principal advisor to the Director of National Intelligence on all cyber matters. He was also the DNI’s Director for Collection, overseeing all of the U.S. Intelligence Community’s collection programs.  Mr. Ledgett’s previous jobs at NSA included leading global collection and cryptanalytic operations, global language and analytic operations, and all NSA activities in the Pacific area. He was an instructor and course developer at the National Cryptologic School and an adjunct instructor at the National Intelligence University.  Mr. Ledgett spent nearly 11 years in the U.S. Army as a cryptologist. Mr. Ledgett is a Senior Advisor for Hakluyt Cyber, a Senior Visiting Fellow at The MITRE Corporation, a Director on the Board of M&T Bank, a Trustee of the Institute for Defense Analyses, a Distinguished Visiting Professor of Cyber Studies at the US Naval Academy, a member of the National Academy of Sciences Intelligence Community Studies Board, a member of the National Infrastructure Advisory Council, and serves on several corporate and startup advisory boards.',
        },
        {
            advisorFullName: 'Mark Linscott',
            title:
                'Senior Advisor, The Asia Group; Senior Fellow, the Atlantic Council’s South Asia Center',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Jeanette Manfra',
            title: 'Director for Risk and Compliance, Google Cloud',
            bio:
                'Jeanette Manfra is the Director for Risk and Compliance for Google Cloud. Jeanette is focused on helping customers, particularly those in regulated industries, build and maintain the highest levels of security and trust into their technical infrastructure and services. Prior to joining Google, Jeanette was the Assistant Secretary for Cybersecurity and the Cyber and Infrastructure Agency within the US Federal Government.  In that role she was responsible for driving security modernization across Federal civilian agencies as well as enabling the security of critical infrastructure across the US.  Jeanette spent more than a decade serving in various roles at the Department of Homeland Security and the White House focused on establishing the nation’s first civilian cyber defense agency.   Jeanette is a proud veteran of the US Army and alumna of the University of Wisconsin and Johns Hopkins University.',
        },
        {
            advisorFullName: 'Evan Medeiros',
            title:
                'Penner Family Chair in Asian Studies at the Edmund A. Walsh School of Foreign Service, Georgetown University',
        },
        {
            advisorFullName: 'Keith Mularksi',
            title:
                'Managing Director, Advisory-Cybersecurity for Ernst & Young LLP',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Joseph S. Nye, Jr.',
            title:
                'University Distinguished Service Professor emeritus and former Dean of the Kennedy School of Government, Harvard University',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Scott N. Paul',
            title: 'President, the Alliance for American Manufacturing',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Matthew Reisman',
            title: 'Director, International Trade Policy, Microsoft',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Matthew Rojansky',
            title: 'Director, the Wilson Center’s Kennan Institute',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Nadia Schadlow',
            title: 'Founder, Scout Strategy Group LLC',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Marie O’Neill Sciarrone',
            title: 'Chief Executive Officer, Tribal Tech',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Matthew Spence',
            title: 'Managing Director, Guggenheim Partners',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Terence P. Stewart',
            title:
                'Former Managing Partner, Law Offices of Stewart and Stewart',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Dr. Jonathan Ward',
            title: 'Founder, Altas Organization',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Michael R. Wessel',
            title: 'President, The Wessel Group Incorporated',
            bio: 'Coming soon...',
        },
        {
            advisorFullName: 'Amy Zegart—Senior Fellow',
            title:
                'Freeman Spogli Institute for International Studies at Stanford University; Davies Family Senior Fellow at the Hoover Institution',
            bio: 'Coming soon...',
        },
    ];
    return (
        <StyledSection>
            <StyledHeading className="font-wt-bold">
                strategic council
            </StyledHeading>
            <HonoraryMembersSection honoraryMembers={honoraryMembers} />
            <StrategicAdvisorsSection advisors={strategicAdvisors} />
        </StyledSection>
    );
}

StrategicCouncil.propTypes = {
    honoraryMembers: PropTypes.array.isRequired,
};
