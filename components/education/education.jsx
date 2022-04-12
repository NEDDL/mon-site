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
} from "../experience/experienceStyles";

export const Education = () => {
  const dauphine = useRef(null);
  const cfi = useRef(null);
  const marmara = useRef(null);
  const iae = useRef(null);
  const ExperienceData = [
    {
      ref: dauphine,
      menuName: "Paris Dauphine",
      companyName: "Université Paris Dauphine - PSL",
      title:
        "Master of International Business Management and New Communication Technologies",
      startDate: "2019",
      endDate: "2020",
      location: "Paris Area, France",

      highlights: [
        "Related courses include Project Management, Change Management, Information Technologies.",
        "A master program with strong focus on new digital technologies and implementations.",
        "Full English track courses in an international environment.",
      ],
      tags: [
        "Scrum",
        "Project Management",
        "API Management",
        "E-commerce",
        "Google Analytics",
        "Google Ads",
        "Facebook Business Manager",
      ],
      relevantProjects: [],
    },
    {
      ref: iae,
      menuName: "IAE Gustave Eiffel",
      companyName: "IAE Gustave Eiffel",
      title: "Master of Business Administration - MBA",
      startDate: "2018",
      endDate: "2019",
      location: "Paris Area, France",

      highlights: [
        "Related courses include Corporate Finance, International Negotiation and Leadership.",
        "Participated in negotiation simulations and real business case scenarios.",
        "Full English track courses in an international environment.",
      ],
      tags: [
        "Marketing",
        "International Negotiation",
        "Project Management",
        "Finance",
      ],
      relevantProjects: [],
    },
    {
      ref: cfi,
      menuName: "CFI ®",
      companyName: "Corporate Finance Institute ®",
      title: "FMVA™ Financial Analyst Certification",
      startDate: "2018",
      endDate: "2018",
      location: "Vancouver, Canada",
      highlights: [
        "Improved data organizing skills for Financial Modelling, Forecasting, and Sensitivity Analysis ",
        "Acquired knowledge of building complex dynamic sheets with advanced excel formulas.",
        "Advanced proficiency with Excel tools such as Solver, Goal Seek, and What-if analysis.",
        "Learned how to build intuitive and dynamic visual dashboards and results by using PowerPoint and Excel charts.",
      ],
      tags: [
        "Financial Analysis",
        "Forecasting",
        "Financial Modeling",
        "Financial Markets",
      ],
      relevantProjects: [],
    },
    {
      ref: marmara,
      menuName: "Marmara University",
      companyName: "Marmara University",
      title: "Bachelor of Business Administration - BBA, Decision Sciences",
      startDate: "2014",
      endDate: "2018",
      location: "Istanbul, Turkey",
      highlights: [
        "Obtained business-related skills on Finance, Accounting, Statistics, Human Resources, Business Law.",
        "Improved mathematical methods for managerial decisions with my major degree Decision Sciences.",
        "The BBA program of Marmara University places its graduates to top companies in Turkey.",
        "Full English track courses.",
      ],
      tags: ["Business", "Statistics", "Math", "Finance", "Human Resources"],
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
    <Section id="education">
      <Container width={"1100px"}>
        <H2>Where I have studied</H2>
        <ExperienceContainer>
          <div style={{ position: "relative", display: "block" }}>
            <FixedMenu width={"200px"}>
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
                  {el.tags.length >= 1 ? "Key learning topics" : null}
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

export default Education;
