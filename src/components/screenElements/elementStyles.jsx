import styled from "styled-components";
import {
  Colors,
  Fonts,
  FontSize,
  Paragraph,
} from "../../../styles/globalStyles";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

export const FixedLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  position: fixed;
  bottom: 0;
  left: 100px;
  z-index: 2000;

  @media only screen and (max-width: 1300px) {
    left: 30px;
  }
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const Github = styled(VscGithubAlt)`
  font-size: 24px;
  color: ${Colors.white};
  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;
    color: ${Colors.teal};
    transform: scale(1.05);
  }
`;
export const LinkedIn = styled(RiLinkedinLine)`
  font-size: 24px;
  color: ${Colors.white};
  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;
    color: ${Colors.teal};
    transform: scale(1.05);
  }
`;
export const Instagram = styled(IoLogoInstagram)`
  font-size: 24px;
  color: ${Colors.white};
  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;
    color: ${Colors.teal};
    transform: scale(1.05);
  }
`;

export const Line = styled.div`
  margin-top: 30px;
  height: 150px;
  border-left: 1px solid ${Colors.teal};
`;

export const FixedRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  position: fixed;
  bottom: 0;
  right: 90px;
  z-index: 2000;

  @media only screen and (max-width: 1300px) {
    right: 30px;
  }
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const MyEmail = styled(Paragraph)`
  font-family: ${Fonts.monospace};
  color: ${Colors.dirtyWhite};
  font-size: ${FontSize.small};
  letter-spacing: 2px;
  writing-mode: vertical-rl;

  &:hover {
    transition: all 300ms ease-in-out;
    color: ${Colors.teal};
    transform: scale(1.05);
  }
`;
