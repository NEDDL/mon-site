import React, { useRef, useState } from "react";
import Link from "next/link";
import { Waypoint } from "react-waypoint";
import {
  Container,
  H1,
  H2,
  Highlighted,
  Paragraph,
  Section,
  Separator,
  Tags,
  Tag,
  LittleTag,
  Colors,
  PrimaryButton,
  List,
  Numbering,
} from "../../globalStyles";
import {
  ExperienceColumn,
  ExperienceContainer,
  Box,
  FixedMenu,
} from "./experienceStyles";

export const Experience = () => {
  const soleilex = useRef(null);
  const lseg = useRef(null);
  const yeniasya = useRef(null);
  const sg = useRef(null);
  const ExperienceData = [
    {
      ref: soleilex,
      menuName: "Soleilex",
      companyName: "Soleilex",
      title: "Managing Partner & Co-Founder",
      startDate: "Feb 2021",
      endDate: "Present",
      location: "Paris Area, France",
      companyLogo: "/images/soleilex.jpg",
      companyLink: "https://soleilex.com/",
      highlights: [
        "Co-Founded Soleilex and developed the process infrastructure and technological requirements of Sales, Marketing, Accounting & Finance, Procurement and Operations.",
        "Designed and optimized Lead Generation funnel with a WordPress website through online advertisements and built an automated business flow with HubSpot for Marketing & Sales.",
        "Launched targeted ads through Google Ads, Facebook Business Manager for lead generation.",
        "Answering the strategical needs of the business and defining the direction in the market.",
      ],
      tags: [
        "Next.Js",
        "React.Js",
        "Redux",
        "Material UI",
        "Styled-components",
        "Firebase",
      ],
      relevantProjects: [],
    },
    {
      ref: sg,
      menuName: "Societe Generale",
      companyName: "Societe Generale Insurance",
      title: "Product Owner, International Marketing Project Manager",
      startDate: "Sep 2019",
      endDate: "Nov 2020",
      location: "Paris Area, France",
      companyLogo: "/images/sg.jpg",
      companyLink:
        "https://www.assurances.societegenerale.com/en/individual/about/",
      highlights: [
        "Delivered an internal web application for 200 international users as a Product Owner in Agile Software Development after leading the UX/UI Design, Prototyping and User Research with 10 countries, saving 250-300K€.",
        "Managed over 30 workshops with Customer Centricity and Collective Intelligence tools to deliver more user-friendly solutions.",
        "Worked directly with system engineers, program managers, security and compliance specialists, developers and testers to define features and technical user stories as Product Owner in Agile Software Development.",
        "Supported SG Insurance entities in Germany, Italy, Poland, Czech Republic, Romania, Morocco, Luxembourg, Russia for various projects.",
        "Found the correct provider and optimized Market Intelligence solution for the international team by saving 20K€ per year in the team budget and integrating 100 users successfully.",
      ],
      tags: [
        "Agile Software Development",
        "Scrum",
        "Backlog Management",
        "User Stories",
        "Design Thinking",
        "Strapi",
        "UX/UI Design",
        "User Research",
      ],
      relevantProjects: [],
    },
    {
      ref: lseg,
      menuName: "LSEG",
      companyName:
        "Beyond Ratings, FTSE Russel, London Stock Exchange Group (LSEG)",
      title: "Marketing Assistant",
      startDate: "Mar 2019",
      endDate: "Aug 2019",
      location: "Paris Area, France",
      companyLogo: "/images/lseg.jpg",
      companyLink: "https://www.ftserussell.com/beyond-ratings-data",
      highlights: [
        "Managed the relations with the developers for UX and SEO improvements after designing.",
        "Designed the publications (blog articles, printed media) to introduce it to the subscribers.",
        "Created analytical reports after processing the statistical data of the digital products.",
        "Worked on market research, competitive analysis and business intelligence of ESG products.",
      ],
      tags: ["HTML", "CSS", "SendGrid", "GitLab", "Email Marketing"],
      relevantProjects: [],
    },
    {
      ref: yeniasya,
      menuName: "Yeni Asya",
      companyName: "Yeni Asya (National Daily Newspaper)",
      title: "Journalist",
      startDate: "Sep 2015",
      endDate: "Jul 2017",
      location: "Istanbul, Turkey",
      companyLogo: "/images/yeniasya.jpg",
      companyLink:
        "https://www.assurances.societegenerale.com/en/individual/about/",
      highlights: [
        "Wrote over 130 news articles in mostly economical, political and social subjects.",
        "Learned to follow worldwide news in economy, politics and finance. ",
        "Obtained research skills during his 2 years in the daily national newspaper.",
        "Published more than 10 column about the Turkish Economy in the section Finance & Economy.",
      ],
      tags: [],
      relevantProjects: [],
    },
  ];

  const [highlighted, setHighlighted] = useState("");
  //   const highlighted = useRef("");

  const handleHighlight = (index) => {
    setHighlighted(index);
    // highlighted.current = index;
    console.log(highlighted);
  };

  return (
    <Section id="experience">
      <Container width={"1100px"}>
        <H2>Where I have worked</H2>
        <ExperienceContainer>
          <div style={{ position: "relative", display: "block" }}>
            <FixedMenu>
              {ExperienceData.map((el, index) => (
                <div key={index}>
                  <Numbering
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      el.ref.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                    smaller
                  >
                    {el.menuName}
                  </Numbering>
                  <Separator gap={"15px"} />
                </div>
              ))}
            </FixedMenu>
          </div>
          <ExperienceColumn>
            {ExperienceData.map((el, index) => (
              <Box key={index} ref={el.ref}>
                <Paragraph bold>{el.title}</Paragraph>
                <Paragraph>{el.companyName}</Paragraph>
                <Paragraph darker smaller>
                  {el.startDate} - {el.endDate}
                </Paragraph>
                <Paragraph darker smaller>
                  {el.location}
                </Paragraph>
                <Separator gap={"20px"} />
                <Container width={"80%"}>
                  {el.highlights.map((el, index) => (
                    <List key={index}>{el}</List>
                  ))}
                </Container>
                <Separator gap={"20px"} />
                <Paragraph smaller darker>
                  {el.tags.length >= 1 ? "Relevant skills" : null}
                </Paragraph>
                <Separator gap={"5px"} />
                <Tags width={"90%"}>
                  {el.tags.map((el, index) => (
                    <LittleTag key={index}>{el}</LittleTag>
                  ))}
                </Tags>
              </Box>
            ))}
          </ExperienceColumn>
        </ExperienceContainer>
      </Container>
    </Section>
  );
};

export default Experience;
