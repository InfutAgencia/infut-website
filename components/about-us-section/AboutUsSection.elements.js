import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #140522;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: auto auto;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
export const HeadWrapper = styled.div`
  margin: 2rem auto;
  width: 100%;
`;
export const Title = styled.p`
  width: 100%;
`;
export const HeadLine = styled.p`
  width: 100%;
`;
export const Text = styled.p`
  width: 100%;
`;
