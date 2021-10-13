import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  MobileIcon,
  NavbarContainer,
  NavBrand,
  NavLinkList,
  NavLinkItem,
  NavLinkText,
} from "./Navbar.elements";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";

const Navbar = ({ bg }) => {
  const [click, setClick] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setClick(!click);
    }
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      // browser code
      if (window.scrollY >= 100) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    }
  };

  const closeMobileMenu = () => setClick(false);
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <Nav color={bg ? bg : navColor} bg={bg}>
      <NavbarContainer>
        <Link href="#base" scroll={true}>
          <NavBrand
            src="/img/infut-logo.webp"
            width="75%"
            height="75%"
            onClick={closeMobileMenu}
          />
        </Link>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Fade top cascade>
          <NavLinkList onClick={handleClick} click={click}>
            <NavLinkItem>
              <Link href="/#base">
                <NavLinkText>Base espacial</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/#servicios">
                <NavLinkText>Servicios</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/">
                <NavLinkText>Tripulación</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/#misiones">
                <NavLinkText>Misiones</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/#">
                <NavLinkText>Blog</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/#contacto">
                <NavLinkText>Contacto</NavLinkText>
              </Link>
            </NavLinkItem>
          </NavLinkList>
        </Fade>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
