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
      <Container $width={"960px"}>
        <H2>About me</H2>
        <Separator $gap={"60px"} />
        <Container $flex $column>
          <Container>
            {AboutData.about.map((p, i) => (
              <React.Fragment key={i}>
                <Paragraph>{p}</Paragraph>
                <Separator $gap={"15px"} />
              </React.Fragment>
            ))}
          </Container>
          <ImageFrame>
            <Image
              src={AboutData.image}
              height={300}
              width={300}
              alt="Mustafa Onal"
            />
          </ImageFrame>
        </Container>
      </Container>
    </Section>
  );
};

export default About;
