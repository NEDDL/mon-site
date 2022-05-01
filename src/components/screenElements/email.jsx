import React from "react";
import {
  FixedRight,
  Github,
  Instagram,
  Line,
  LinkedIn,
  MyEmail,
} from "./elementStyles";

const Email = () => {
  return (
    <>
      <FixedRight>
        <a
          href="mailto:mustafasaitonal@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <MyEmail>mustafasaitonal@outlook.com</MyEmail>
        </a>
        <Line />
      </FixedRight>
    </>
  );
};

export default Email;
