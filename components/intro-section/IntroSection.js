import {
  SectionContainer,
  TextWrapper,
  TagLine,
  Text,
} from "./InroSection.elements";
import Fade from "react-reveal";
const IntroSection = () => {
  return (
    <SectionContainer id="base">
      <Fade left>
        <TextWrapper>
          <TagLine>Tu marca es un cohete</TagLine>
          <Text>Impulsarla al universo digital es nuestra misión</Text>
        </TextWrapper>
      </Fade>
    </SectionContainer>
  );
};

export default IntroSection;
