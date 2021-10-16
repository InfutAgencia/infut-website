import { Container, Row } from "../layout/Layout.elements";
import {
  ServicesContainer,
  ContentWrapper,
  ContentBlock,
  BlockImageContainer,
  BlockImage,
  BlockText,
  PinkColor,
  ServicesList,
  ServicesItem,
} from "./Services.elements";
import Fade from "react-reveal/Fade";
import { useTranslation } from "next-i18next";
const ServicesSection = () => {
  const { t } = useTranslation("common");
  return (
    <Container id="servicios">
      <Row col={3}>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/ship.png" width="50%" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>{t("homePage.servicesSection.col1.title")}</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/telescope.png" width="50%" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>{t("homePage.servicesSection.col2.title")}</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/astronaut.png" width="50" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>{t("homePage.servicesSection.col3.title")}</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>

        <ContentWrapper>
          <ContentBlock>
            <Fade bottom>
              <ServicesList>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.0")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.1")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.2")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.3")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.4")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.5")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.6")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col1.serviceItems.7")}
                  </BlockText>
                </ServicesItem>
              </ServicesList>
            </Fade>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <Fade bottom>
              <ServicesList>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.0")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.1")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.2")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.3")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.4")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.5")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.6")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col2.serviceItems.7")}
                  </BlockText>
                </ServicesItem>
              </ServicesList>
            </Fade>
          </ContentBlock>
        </ContentWrapper>

        <ContentWrapper>
          <ContentBlock>
            <Fade bottom>
              <ServicesList>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col3.serviceItems.0")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col3.serviceItems.1")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {" "}
                    {t("homePage.servicesSection.col3.serviceItems.2")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col3.serviceItems.3")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col3.serviceItems.4")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {" "}
                    {t("homePage.servicesSection.col3.serviceItems.5")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {" "}
                    {t("homePage.servicesSection.col3.serviceItems.6")}
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    {t("homePage.servicesSection.col3.serviceItems.7")}
                  </BlockText>
                </ServicesItem>
              </ServicesList>
            </Fade>
          </ContentBlock>
        </ContentWrapper>
      </Row>
    </Container>
  );
};

export default ServicesSection;
