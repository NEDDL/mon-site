import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    counter-reset: section;
}
  body {
    padding: 0;
    margin: 0;
    
    counter-reset: navLink;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
  }
  
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  }
`;

export const Colors = {
  background: "#28293E",
  white: "#EBEAEF",
  dirtyWhite: "#9090A7",
  red: "#F73A3B",
  green: "#29C270",
  blue: "#3B63F8",
  orange: "#F88801",
  yellow: "#F9CC02",
  teal: "#3FCFDD",
  purple: "#6500CD",
};

export const FontSize = {
  big: "clamp(2.2em, 8vw, 4em)",
  medium: "clamp(1.5em, 7vw, 2em)",
  normal: "clamp(1em, 1.1vw, 1.2em)",
  smaller: "clamp(0.95em, 1.1vw, 1.1em)",
  small: "clamp(0.9em, 1.1vw, 1em)",
  tag: "clamp(0.8em, 1.1vw, 1.05em)",
};

export const Fonts = {
  sansSerif: "Lato",
  monospace: "Inconsolata",
};

export const Section = styled.section`
  background-color: ${Colors.background};
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : null)};
  width: 100%;
  padding: 150px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1300px) {
    padding: 90px 100px;
  }
  @media only screen and (max-width: 760px) {
    padding: 150px 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 75px 20px;
  }
`;
export const Container = styled.div`
  max-width: ${({ width }) => (width ? width : "1200px")};
  display: ${({ flex }) => (flex ? "flex" : null)};
  flex-direction: ${({ column }) => (column ? "row" : "column")};

  column-gap: 50px;

  @media screen and (max-width: 1200px) {
    max-width: 1100px;
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

export const H1 = styled.h1`
  color: ${({ darker }) => (darker ? Colors.dirtyWhite : Colors.white)};
  font-size: ${FontSize.big};
  font-family: ${({ inconsolata }) =>
    inconsolata ? Fonts.monospace : Fonts.sansSerif};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : null)};
  font-weight: 700;
  margin: 0 0 5px 0;
`;
export const H2 = styled.h2`
  color: ${({ darker }) => (darker ? Colors.dirtyWhite : Colors.white)};
  font-family: ${({ inconsolata }) =>
    inconsolata ? Fonts.monospace : Fonts.sansSerif};
  font-size: ${FontSize.medium};
  font-weight: 700;
  margin: 0 0 5px 0;

  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  counter-reset: submenu;

  &:before {
    counter-increment: section;
    content: "0" counter(section) ". ";

    margin-right: 10px;
    color: ${Colors.teal};
    font-weight: 300;
    font-family: ${Fonts.monospace};
  }

  &:after {
    content: "";
    flex: 1 1 auto;
    border-bottom: solid 1px ${Colors.teal};
    margin-left: 20px;
    margin-top: 10px;
  }
`;
export const H3 = styled.h3``;

export const Separator = styled.div`
  height: ${({ gap }) => (gap ? gap : "5px")};
`;

export const Paragraph = styled.p`
  color: ${({ darker }) => (darker ? Colors.dirtyWhite : Colors.white)};
  font-family: ${({ inconsolata }) =>
    inconsolata ? Fonts.monospace : Fonts.sansSerif};
  font-size: ${({ smaller }) => (smaller ? FontSize.smaller : FontSize.normal)};
  font-weight: ${({ bold }) => (bold ? 900 : 400)};
  transition: all 200ms ease-in-out;

  line-height: 1.7em;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};

  Highlighted {
    color: ${Colors.teal};
    font-family: ${Fonts.monospace};
    margin: 0 5px;
  }
`;
export const Title = styled.p`
  color: ${({ darker }) => (darker ? Colors.dirtyWhite : Colors.teal)};
  font-family: ${({ inconsolata }) =>
    inconsolata ? Fonts.monospace : Fonts.sansSerif};
  font-size: ${({ smaller }) => (smaller ? FontSize.smaller : FontSize.normal)};
  font-weight: 900;
  transition: all 200ms ease-in-out;

  line-height: 1.7em;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
`;

export const Highlighted = styled.span`
  color: ${Colors.yellow};
  font-family: ${({ inconsolata }) =>
    inconsolata ? Fonts.monospace : Fonts.sansSerif};
`;

export const List = styled(Paragraph)`
  font-size: ${FontSize.small};
  margin-bottom: 10px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};

  &:before {
    content: "";
    width: 10px;
    display: inline-block;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid ${Colors.green};
  }

  ${Paragraph}
`;

export const Numbering = styled(Paragraph)`
  font-size: ${FontSize.small};
  margin-bottom: 5px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  font-size: ${({ smaller }) => (smaller ? FontSize.smaller : FontSize.normal)};

  &:before {
    counter-increment: submenu;
    content: "0" counter(submenu) ". ";
    margin-right: 5px;
    color: ${Colors.teal};
    font-weight: 300;
    font-family: ${Fonts.monospace};
  }

  ${Paragraph}
`;

const Button = {
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "transparent",
};

export const PrimaryButton = styled.button`
  ${Button};
  border: 1px solid ${Colors.teal};
  color: ${Colors.teal};

  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.05);
  }
`;
export const SecondaryButton = styled.button`
  ${Button}
  border: 1px solid ${Colors.red};
  color: ${Colors.red};
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: ${({ width }) => (width ? width : "850px")};
  column-gap: 10px;
  row-gap: 10px;
`;

export const Tag = styled.div`
  margin: 0;
  font-family: ${Fonts.monospace};
  font-size: ${FontSize.tag};
  font-weight: 600;
  color: ${Colors.white};
  background-color: ${({ color }) => color && color};
  padding: 6px 15px;

  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.05);
  }
`;

export const LittleTag = styled.div`
  margin: 0;
  font-family: ${Fonts.monospace};
  font-weight: 700;
  color: ${Colors.yellow};
  /* background-color: ${({ color }) => color && color}; */
  /* padding: 8px 20px; */
  /* outline: 1px ${Colors.background} solid; */
  /* outline-offset: -3px; */
  /* border: none; */
  /* border-radius: 15px; */
  cursor: pointer;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.05);
  }

  &:after {
    content: ",";
  }
  &:last-child:after {
    content: "...";
  }
`;

export const ImageFrame = styled.div`
  position: relative;
  max-width: 350px;
  min-width: 200px;
  filter: grayscale(80%);
  transition: filter 100ms ease-in-out;

  &:hover {
    filter: none;
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    filter: none;
  }
`;
