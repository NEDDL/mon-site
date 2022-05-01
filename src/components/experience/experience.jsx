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
} from "../../../styles/globalStyles";
import {
  ExperienceColumn,
  ExperienceContainer,
  Box,
  FixedMenu,
} from "./experienceStyles";
import { ExperienceData } from "../../data/experienceData";

export const Experience = () => {
  const [highlighted, setHighlighted] = useState("");

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Section id="experience">
      <Container width={"960px"}>
        <H2>Where I have worked</H2>
        <ExperienceContainer>
          <div style={{ position: "relative", display: "block" }}>
            <FixedMenu>
              {ExperienceData.map((el, index) => (
                <div key={index}>
                  <Numbering
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollTo(el.id)}
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
              <Box key={index} id={el.id}>
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
