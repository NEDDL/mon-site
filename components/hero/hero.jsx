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
} from "../../globalStyles";

const HeroData = {
  starter: "Hi, my name is",
  name: "Mustafa ONAL.",
  title: "I build things for the web",
  shortText:
    "I'am a <Highlighted>web developer</Highlighted> specialized in building <Highlighted>exceptional digital experiences.</Highlighted> I help with developing solutions with my <Highlighted>business background</Highlighted> and software development abilities.",
  tags: [
    {
      tag: "HTML",
      link: "#",
    },
    {
      tag: "CSS",
      link: "#",
    },
    {
      tag: "SASS",
      link: "https://sass-lang.com/",
    },
    {
      tag: "JavaScript",
      link: "https://www.javascript.com/",
    },
    {
      tag: "React.Js",
      link: "https://reactjs.org/",
    },
    {
      tag: "Next.Js",
      link: "https://nextjs.org/",
    },
    {
      tag: "Redux",
      link: "https://redux.js.org/",
    },
    {
      tag: "Styled-components",
      link: "https://styled-components.com/",
    },
    // {
    //   tag: "Axios",
    //   link: "",

    // },
    // {
    //   tag: "MongoDB",
    //   link: "",
    // },
    {
      tag: "Firebase",
      link: "https://firebase.google.com/",
    },
    {
      tag: "Quill",
      link: "https://quilljs.com/",
    },
    {
      tag: "Formik",
      link: "https://formik.org/",
    },
    {
      tag: "Yup",
      link: "https://github.com/jquense/yup",
      target: "_blank",
    },
    {
      tag: "Material UI",
      link: "https://mui.com/",
    },
    {
      tag: "Vercel",
      link: "https://vercel.com/dashboard",
    },
    // {
    //   tag: "AWS",
    //   link: "",
    // },
    // {
    //   tag: "Docker",
    //   link: "",
    // },
    {
      tag: "GitHub",
      link: "https://github.com/",
    },
    {
      tag: "GitLab",
      link: "https://about.gitlab.com/",
    },
    {
      tag: "SendGrid",
      link: "https://sendgrid.com/",
    },
  ],
};

export const Hero = () => {
  return (
    <Section id="hero" fullHeight>
      <Container>
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
        <PrimaryButton>Want to talk to me?</PrimaryButton>
      </Container>
    </Section>
  );
};

export default Hero;
