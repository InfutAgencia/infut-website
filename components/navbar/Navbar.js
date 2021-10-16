import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import {
  Nav,
  MobileIcon,
  NavbarContainer,
  NavBrand,
  NavLinkList,
  NavLinkItem,
  NavLinkText,
  NavLinkLocale,
} from "./Navbar.elements";
import Fade from "react-reveal/Fade";

const Navbar = ({ bg }) => {
  const { t } = useTranslation("common");
  const [click, setClick] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    if (window.innerWidth <= 960) {
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
                <NavLinkText>{t("navbar.links.0")}</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/#servicios">
                <NavLinkText>{t("navbar.links.1")}</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/">
                <NavLinkText>{t("navbar.links.2")}</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/#misiones">
                <NavLinkText>{t("navbar.links.3")}</NavLinkText>
              </Link>
            </NavLinkItem>
            {/* <NavLinkItem>
              <Link href="/#">
                <NavLinkText>{t("navbar.links.4")}</NavLinkText>
              </Link>
            </NavLinkItem> */}
            <NavLinkItem>
              <Link href="/#contacto">
                <NavLinkText>{t("navbar.links.5")}</NavLinkText>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link
                href={router.asPath}
                locale={router.locale === "es" ? "en" : "es"}
              >
                <NavLinkLocale>
                  {router.locale === "es" ? (
                    <Image src="/img/english.webp" width={128} height={67.5} />
                  ) : (
                    <Image src="/img/spanish.webp" width={128} height={67.5} />
                  )}
                </NavLinkLocale>
              </Link>
            </NavLinkItem>
          </NavLinkList>
        </Fade>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
