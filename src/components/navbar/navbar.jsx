import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./navbarStyle";
import { data } from "../../data/navbarData";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <Nav aria-label="Main navigation">
      <NavbarContainer>
        <NavLogo as="a" href="/#hero" onClick={() => setShow(false)} aria-label="Mustafa Onal, home">
          <NavIcon src="/images/LOGO.svg" alt="" />
        </NavLogo>
        <MobileIcon
          as="button"
          type="button"
          aria-label={show ? "Close navigation" : "Open navigation"}
          aria-expanded={show}
          aria-controls="main-navigation"
          onClick={() => setShow(!show)}
        >
          {show ? <CgClose /> : <CgMenu />}
        </MobileIcon>
        <NavMenu as="ul" id="main-navigation" show={show} onKeyDown={(event) => {
          if (event.key === "Escape") setShow(false);
        }}>
          {data.map((el) => (
            <NavItem key={el.id}>
              <NavLinks as="a" href={el.to} onClick={() => setShow(false)}>
                {el.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
