import styled from "styled-components";
import { Container, Colors, Fonts } from "../../globalStyles";
import Link from "next/link";

export const Nav = styled.nav`
  background-color: rgb(40, 41, 62, 0.6);
  box-shadow: 0px 4px 10px rgba(40, 41, 62, 0.6);
  height: 100px;
  position: unset;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(6px);
  z-index: 99;

  @media screen and (min-width: 761px) {
    padding: 0px 50px;
  }

  transition: background-color 0.3s ease-in;

  @media screen and (max-width: 760px) {
    padding: 0 10px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: clamp(1030px, 70vw, 1275px);
  margin-right: auto;
  margin-left: auto;
  height: 3em;
  padding: 0 15px;
  z-index: 999;

  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;

export const NavLogo = styled.span`
  margin-left: 0;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

export const NavIcon = styled.img`
  height: 50px;
  display: inline-block;
`;

export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 999;
  color: white;

  @media screen and (max-width: 960px) {
    display: block;
    margin-right: 0;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.6rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-right: 0;
  margin-left: auto;
  padding: 0;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    text-align: start;
    align-items: start;
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;

    width: 80%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;

    background-color: ${Colors.background};

    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;

    z-index: 998;
  }
`;

export const NavItem = styled.li`
  display: flex;

  cursor: pointer;
  margin-left: 20px;
  margin-right: ${({ separator }) => (separator ? separator : "8px")};
  padding: ${({ isButton }) => (isButton ? "0 15px" : "0")};
  padding-bottom: 3px;

  font-weight: ${({ isButton }) => (isButton ? "700" : "400")};

  background-color: transparent;
  border: ${({ isButton }) => (isButton ? "#267C99 2px solid" : "none")};
  border-radius: ${({ isButton }) => (isButton ? "4px" : "0")};

  @media screen and (max-width: 960px) {
    position: static;

    flex-direction: column;

    margin-bottom: ${({ separator }) => (separator ? separator : "8px")};
  }
`;

export const NavLinks = styled.span`
  color: ${({ isButton }) => (isButton ? Colors.teal : Colors.white)};
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 8px;

  &:before {
    counter-increment: navLink;
    content: ${({ isButton }) =>
      isButton ? "white" : '"0"counter(navLink)"."'};
    margin-right: 5px;
    color: ${Colors.teal};
    font-weight: 700;
    font-family: ${Fonts.monospace};
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
  }
`;

export const ClientIcon = styled.span`
  padding-top: 6px;
  margin-right: 5px;
  color: #267c99;
  display: ${({ showDropdown }) => (showDropdown ? "unset" : "none")};

  @media screen and (max-width: 960px) {
    margin-right: 5px;
  }
`;
