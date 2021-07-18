import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #140522;
  position: relative;
  min-height: 100vh;

  @media screen and (max-width: 960px) {
    min-height: 85vh;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: auto auto;
  display: flex;
  color: white;
  padding: 4rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 50%;
  margin-bottom: 4rem;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;
export const HeadWrapper = styled.div`
  max-width: 50%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;
export const Title = styled.p`
  width: 100%;
  font-weight: bolder;
  font-size: 48px;
  font-family: "nexaxbold";
  z-index: 2;
  position: relative;

  &::after {
    margin: auto auto;
    content: "Somos";
    font-weight: bolder;
    position: absolute;
    font-size: 84px;
    top: -45px;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: -1;
    color: #32253eb6;

    @media screen and (max-width: 340px) {
      font-size: 60px;
      top: -30px;
    }
  }
`;
export const HeadLine = styled.p`
  width: 100%;
  font-weight: lighter;
  font-size: 24px;
  font-family: "nexalight";
  z-index: 2;
`;
export const Text = styled.p`
  width: 100%;
  margin-top: 1rem;
`;

export const Clouds = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/img/Clouds.png");
  position: absolute;
  left: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 960px) {
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
  }
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;
