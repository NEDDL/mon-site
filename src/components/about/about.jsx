import Image from "next/image";
import React from "react";
import {
  Colors,
  Container,
  H2,
  ImageFrame,
  Paragraph,
  Section,
  Separator,
} from "../../../styles/globalStyles";
import { BiCertification } from "react-icons/bi";
import { AboutData } from "../../data/aboutData";

const About = () => {
  return (
    <Section id="about">
      <Container width={"960px"}>
        <H2>Who am I?</H2>
        <Separator gap={"60px"} />
        <Container flex column>
          <Container>
            {AboutData.about.map((p, i) => (
              <>
                <Paragraph key={i}>{p}</Paragraph>
                <Separator gap={"15px"} />
              </>
            ))}
          </Container>
          <ImageFrame>
            <Image
              src={AboutData.image}
              height={300}
              width={300}
              alt="Headshot"
            />
          </ImageFrame>
        </Container>
        <Separator gap={"100px"} />
        <Paragraph bold>Certificates</Paragraph>
        <Separator gap={"20px"} />
        {AboutData.certificates.map((el, index) => (
          <Container flex column key={index}>
            <BiCertification
              color={Colors.yellow}
              style={{ marginTop: 5, marginRight: -30 }}
              size={30}
            />
            <Container>
              <Paragraph bold>{el.title}</Paragraph>
              <Paragraph smaller>{`Issued by ${el.issuer}`}</Paragraph>
              <Paragraph smaller darker>
                {`Credential ID ${el.credential}`}
              </Paragraph>
              <Separator gap={"50px"} />
            </Container>
          </Container>
        ))}
      </Container>
    </Section>
  );
};

export default About;
