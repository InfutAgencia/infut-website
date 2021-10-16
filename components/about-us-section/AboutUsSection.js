import {
  Container,
  Wrapper,
  HeadWrapper,
  Title,
  HeadLine,
  Text,
  Clouds,
  TextWrapper,
  Img,
} from "./AboutUsSection.elements";
import Fade from "react-reveal";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
  const { t } = useTranslation("common");
  return (
    <Container>
      <Wrapper>
        <HeadWrapper>
          <Title>{t("homePage.aboutUsSection.title.headLine")}</Title>
          <Fade bottom>
            <HeadLine>{t("homePage.aboutUsSection.title.tagLine")}</HeadLine>
          </Fade>
        </HeadWrapper>

        <TextWrapper>
          <Fade bottom cascade>
            <Text>{t("homePage.aboutUsSection.description.0")}</Text>
            <Text>{t("homePage.aboutUsSection.description.1")}</Text>
            <Text>
              <strong>{t("homePage.aboutUsSection.description.2")}</strong>
            </Text>
          </Fade>
        </TextWrapper>
      </Wrapper>
      {/* <Clouds /> */}

      <Img src="/img/Clouds.webp" alt="Clouds" />
    </Container>
  );
};

export default AboutUsSection;
