import styled from "styled-components";
import Image from "next/image";

export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ color }) => (color ? "#140522" : "transparent")};
  display: flex;
  justify-content: center;
  color: white;
  position: ${({ bg }) => (bg ? "relative" : "fixed")};
  top: 0;
  z-index: 999;
  padding: 1rem;
  transition: ease 0.3s;
  @media screen and (max-width: 1400px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 960px) {
    position: sticky;
    background-color: #140522;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  pointer-events: none;
  @media screen and (max-width: 960px) {
    pointer-events: all;
    display: block;
    position: absolute;
    top: 20px;
    right: -0px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavbarContainer = styled.div`
  height: 60px;
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    padding: 0rem 0rem;
  }
`;

export const NavBrand = styled(Image)`
  cursor: pointer;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 90px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #140522;
  }
`;
export const NavLinkItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
  margin-left: 2rem;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid white;
    transition: ease 0.5s;
  }

  @media screen and (max-width: 960px) {
    margin: 0px;
    height: 60px;
  }
`;

export const NavLinkText = styled.p`
  font-size: 18px;
`;

export const NavLinkLocale = styled.div`
  max-width: 75px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`;

export const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
`;
