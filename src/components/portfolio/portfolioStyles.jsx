import styled, { createGlobalStyle } from "styled-components";
import {
  Colors,
  Fonts,
  FontSize,
  Paragraph,
  Title,
} from "../../../styles/globalStyles";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 330px;
  min-height: 390px;
  background-color: #32334e;
  padding: 40px 20px 20px 20px;
  border-radius: 5px;

  transition: all 200ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const CardTitle = styled(Title)`
  font-size: ${FontSize.normal};
  font-weight: 400;
  ${Title}
`;
export const CardSummary = styled(Paragraph)`
  font-size: ${FontSize.small};
  font-weight: 400;
  line-height: 1.4em;
  ${Paragraph}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Tags = styled.div`
  margin-top: auto;
  width: 100%;
`;
export const Tag = styled.span`
  display: inline-block;
  color: ${Colors.yellow};
  user-select: none;
  font-family: ${Fonts.monospace};
  margin-right: 10px;
  opacity: 0.6;

  &:after {
    content: ",";
  }
  &:last-child:after {
    content: "...";
  }
`;
