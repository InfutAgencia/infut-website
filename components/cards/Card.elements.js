import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const CardTitle = styled.h2`
  color: white;
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 1rem;

  border-bottom: 1px solid white;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`;

export const CardBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0);
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  &:hover {
    background-color: rgba(1, 1, 1, 0.5);
    backdrop-filter: blur(5px);
    transition: ease 0.5s;
  }
  &:hover > div {
    display: block;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: none;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardButton = styled.a`
  display: block;
  color: white;
  position: absolute;
  text-align: center;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 5px;
  &:hover {
    color: black;
    background-color: white;
    transition: ease 0.5s;
  }
`;
//background-image: url(${({ url }) => (url ? url : null)});
