import styled from "styled-components";

export const StarredPost = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  border-bottom: 1px solid #bababa;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StarredImage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const StarredDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  @media screen and(max-width: 960px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  cursor: pointer;
  max-width: 380px;
  padding: 0.5rem;
  &:hover {
    border-radius: 5px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardHead = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  /* &:hover {
    transform: scale(1.2);
    transition: ease 0.5s;
  } */
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

export const ReadButton = styled.a`
  width: 100%;
  height: 35px;
  padding: 1rem;
  color: black;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem;
  border: 1px solid #0d0504;
  border-radius: 3px;

  &:hover {
    background-color: #0d0504;
    color: white;
    transition: ease 0.5s;
  }
`;

export const PostTitle = styled.h2`
  padding: 1rem 0rem;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
`;
export const PostDescription = styled.p`
  padding: 1rem 0rem;
  font-size: 18px;
  @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
`;

export const Caption = styled.caption`
  text-align: left;
  font-size: 18px;
`;

export const Separator = styled.h2`
  width: 100%;
  font-size: 3rem;
  padding-top: 4rem;
  margin: 4rem 0rem;
  border-top: 1px solid #bababa;
`;
