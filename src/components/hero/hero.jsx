import React from "react";
import {
  Container,
  H1,
  Highlighted,
  Paragraph,
  Section,
  Separator,
  Tags,
  Tag,
  Colors,
  PrimaryButton,
} from "../../../styles/globalStyles";
import { HeroData } from "../../data/heroData";

export const Hero = () => {
  return (
    <Section id="hero" fullHeight>
      <Container>
        <Separator gap={"50px"} />
        <Paragraph>
          <Highlighted inconsolata>{HeroData.starter}</Highlighted>
        </Paragraph>
        <Separator gap={"20px"} />
        <H1>{HeroData.name}</H1>
        <H1 as="p" darker>
          {HeroData.title}
        </H1>
        <Separator gap={"30px"} />
        <Paragraph
          maxWidth="800px"
          dangerouslySetInnerHTML={{ __html: HeroData.shortText }}
        />
        <Separator gap={"40px"} />
        <Tags>
          {HeroData.tags.map((el, index) => (
            <a
              style={{ textDecoration: "none" }}
              target={el.link === "#" ? "" : "_blank"}
              href={el.link}
              rel="noopener noreferrer"
              key={index}
            >
              <Tag color={Colors.purple}>{el.tag}</Tag>
            </a>
          ))}
        </Tags>
        <Separator gap={"40px"} />
        <PrimaryButton
          as="a"
          href="mailto:mustafasaitonal@outlook.com"
        >
          Get in touch
        </PrimaryButton>
        <Separator gap={"20px"} />
        <Paragraph smaller>
          <a href="https://github.com/NEDDL" target="_blank" rel="noreferrer">GitHub</a>
          {" · "}
          <a href="https://www.linkedin.com/in/mustafasaitonal/" target="_blank" rel="noreferrer">LinkedIn</a>
        </Paragraph>
      </Container>
    </Section>
  );
};

export default Hero;
