import React from "react";
import { FixedLeft, Github, Instagram, Line, LinkedIn } from "./elementStyles";

const SocialMenu = () => {
  return (
    <>
      <FixedLeft>
        <a href="https://github.com/neddl" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/mustafasaitonal/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://instagram.com/mustafasaitonal"
          aria-label="Instagram"
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
