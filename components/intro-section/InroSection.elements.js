import styled from "styled-components";

export const SectionContainer = styled.div`
  background-image: url("/images/img_section_1.jpeg");
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  max-height: 800px;
  color: white;
  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
    min-height: 400px;
    max-height: 400px;
  }
`;

export const TextWrapper = styled.div`
  width: 1400px;
  height: auto;
`;
export const TagLine = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;
export const Text = styled.p`
  font-size: 3rem;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }
`;
