import {
  SectionContainer,
  TextWrapper,
  TagLine,
  Text,
} from "./InroSection.elements";
//import useTranslation from "next-translate/useTranslation";
import { useTranslation } from "next-i18next";
const IntroSection = () => {
  const { t } = useTranslation("common");

  return (
    <SectionContainer id="base">
      {/* <Fade left> */}
      <TextWrapper>
        <TagLine>{t("homePage.introSection.tagLine")}</TagLine>
        <Text>{t("homePage.introSection.headLine")}</Text>
      </TextWrapper>
      {/* </Fade> */}
    </SectionContainer>
  );
};

export default IntroSection;
