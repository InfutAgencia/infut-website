import styled from "styled-components";
import image from "next/image";

export const ServicesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const BlockImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;
export const BlockImage = styled(image)`
  min-width: 60px;
  max-width: 80px;
`;
export const BlockText = styled.p``;

export const PinkColor = styled.span`
  color: #ec117b;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`;

export const ServicesList = styled.ul`
  width: 60%;
  margin: 0rem 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
    margin: 0;
  }
`;

export const ServicesItem = styled.li``;
