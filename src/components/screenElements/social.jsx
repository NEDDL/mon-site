import React from "react";
import { FixedLeft, Github, Instagram, Line, LinkedIn } from "./elementStyles";

const SocialMenu = () => {
  return (
    <>
      <FixedLeft>
        <a href="https://github.com/neddl" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/mustafasaitonal/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://instagram.com/mustafasaitonal"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <Line />
      </FixedLeft>
    </>
  );
};

export default SocialMenu;
