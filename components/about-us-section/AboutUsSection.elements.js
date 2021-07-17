import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #140522;
  position: relative;
  min-height: 50vh;
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


export const Clouds = styled.div`
width: 100%;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 50;
background: url("/img/clouds.png");
background-repeat: no-repeat;
background-position: bottom;
background-size: contain;
`