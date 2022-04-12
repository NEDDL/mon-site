import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import { Paragraph, Colors } from "../../globalStyles";

export const ExperienceContainer = styled.div`
  display: flex;

  column-gap: 100px;
  margin: 100px 0px;
  width: 100%;
  position: relative;
`;

export const ExperienceColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-start;
  max-width: ${({ width }) => (width ? width : null)};
  flex: ${({ width }) => (width ? null : "1 1 auto")};
`;

export const ExperienceHeader = styled.div`
  display: flex;
  column-gap: 20px;
  max-width: 400px;
`;

export const Box = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px 0 20px 70px;
  border-left: 5px solid ${Colors.dirtyWhite};

  &:first-child {
    margin-top: 0px;
    padding-left: 70px;
  }
  &:last-child {
    padding-left: 70px;
    margin-bottom: 0px;
  }
`;

export const FixedMenu = styled.div`
  position: sticky;
  position: -webkit-sticky;
  margin-top: 30px;
  top: 250px;

  align-self: flex-start;
  width: ${({ width }) => (width ? width : null)};
`;
