import Image from "next/image";
import React from "react";
import {
  Container,
  H2,
  ImageFrame,
  Paragraph,
  Section,
  Separator,
} from "../../globalStyles";

const About = () => {
  return (
    <Section id="about">
      <Container width={"1100px"}>
        <H2>Who am I?</H2>
        <Separator gap={"60px"} />
        <Container flex column>
          <ImageFrame>
            <Image
              src="/images/me.jpg"
              height={300}
              width={300}
              alt="Headshot"
            />
          </ImageFrame>
          <Paragraph>
            Working towards common goals and KPIs as Project Manager with a
            digital-focus in International Marketing with the mentality of
            get-it-done, on-time, and high-quality work by centering the
            internal and external clients. Optimized digital solutions and
            enhanced the use of the tools for the users and reduced the cost.
            Delivered an internal digital tool by working with the company
            resources. Graduated from master-s degree in International Business
            Management at Paris-Dauphine University. Completed my master thesis
            on importance of putting the client at the center of the product.
            Recently, collaborated in the launch of a new company. Experience in
            Finance, ESG, Responsible Investment, Insurance and the Energy
            sector.
          </Paragraph>
        </Container>
      </Container>
    </Section>
  );
};

export default About;
