import React from "react";
import {
  Container,
  H2,
  Section,
  Separator,
} from "../../../styles/globalStyles";
import { PortfolioCard } from "./portfolioCard";
import { PortfolioContainer } from "./portfolioStyles";
import { PortfolioData } from "../../data/portfolioData";

export const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container width="1030px">
        <H2>{"Some projects I have built"}</H2>
        <Separator gap={"60px"} />
        <PortfolioContainer>
          {PortfolioData.map((el, index) => (
            <PortfolioCard key={index} data={el} />
          ))}
        </PortfolioContainer>
      </Container>
    </Section>
  );
};
