import React from "react";
import Link from "next/link";
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
        <H1 darker uppercase>
          {HeroData.title}
        </H1>
        <Separator gap={"30px"} />
        <Paragraph
          maxWidth="800px"
          dangerouslySetInnerHTML={{ __html: HeroData.shortText }}
        />
        <Separator gap={"80px"} />
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
        <Separator gap={"60px"} />
        <a
          href="mailto:mustafasaitonal@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <PrimaryButton>Want to talk to me?</PrimaryButton>
        </a>
      </Container>
    </Section>
  );
};

export default Hero;
