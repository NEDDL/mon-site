import React, { useState } from "react";
import Link from "next/link";

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
} from "../experience/experienceStyles";
import { EducationData } from "../../data/educationData";

export const Education = () => {
  const [highlighted, setHighlighted] = useState("");

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Section id="education">
      <Container width={"1100px"}>
        <H2>Where I have studied</H2>
        <ExperienceContainer>
          <div style={{ position: "relative", display: "block" }}>
            <FixedMenu width={"200px"}>
              {EducationData.map((el, index) => (
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
            {EducationData.map((el, index) => (
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
