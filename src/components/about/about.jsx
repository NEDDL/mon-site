import Image from "next/image";
import React from "react";
import {
  Container,
  H2,
  ImageFrame,
  Paragraph,
  Section,
  Separator,
} from "../../../styles/globalStyles";
import { AboutData } from "../../data/aboutData";

const About = () => {
  return (
    <Section id="about">
      <Container width={"1100px"}>
        <H2>Who am I?</H2>
        <Separator gap={"60px"} />
        <Container flex column>
          <ImageFrame>
            <Image
              src={AboutData.image}
              height={300}
              width={300}
              alt="Headshot"
            />
          </ImageFrame>
          <Paragraph>{AboutData.about}</Paragraph>
        </Container>
      </Container>
    </Section>
  );
};

export default About;
