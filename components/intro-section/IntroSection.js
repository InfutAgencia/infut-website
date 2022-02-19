import {
  SectionContainer,
  TextWrapper,
  TagLine,
  Text
} from './InroSection.elements';
//import useTranslation from "next-translate/useTranslation";

const IntroSection = () => {
  return (
    <SectionContainer id="base">
      {/* <Fade left> */}
      <TextWrapper>
        <TagLine>Your brand is a rocket</TagLine>
        <Text>Driving it to the digital universe is our mission.</Text>
      </TextWrapper>
      {/* </Fade> */}
    </SectionContainer>
  );
};

export default IntroSection;
