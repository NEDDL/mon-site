import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { useRouter } from "next/router";
import { RiAccountCircleLine } from "react-icons/ri";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  ClientIcon,
} from "./navbarStyle";
import { data } from "../../data/navbarData";

function Navbar() {
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const router = useRouter();

  const closeMobileMenu = (to, id, index) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
      setShow(false);
    } else {
      router.push(to);
      setShow(false);
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo onClick={() => closeMobileMenu(null, "hero")} passHref>
          <a>
            <NavIcon src="/images/LOGO.svg" alt="logo" />
          </a>
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {show ? <CgClose /> : <CgMenu />}
        </MobileIcon>
        <NavMenu show={show}>
          {data.map((el, index) => (
            <NavItem
              key={index}
              separator={el.separator}
              isButton={el.isButton}
            >
              <NavLinks
                passHref
                isButton={el.isButton}
                onClick={() =>
                  closeMobileMenu(el.to, el.id, index, el.showDropdown)
                }
              >
                <ClientIcon showDropdown={el.icon}>
                  <RiAccountCircleLine size={26} />
                </ClientIcon>
                <a>{el.text}</a>
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
