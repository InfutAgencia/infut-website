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

const ServicesSection = () => {
  return (
    <Container id="servicios">
      <Row col={3}>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/ship.png" width="50%" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>
                Diseño y desarrollo a medida para empresas, startups, planes de
                negocio.
              </PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/telescope.png" width="50%" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>Estrategias de marketing digital y offline.</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/astronaut.png" width="50" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>Servicio de diseño y montaje audiovisual</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>

        <ContentWrapper>
          <ContentBlock>
            <ServicesList>
              <ServicesItem>
                <BlockText>Apps móviles para android y IOS</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Apps de M-Commerce</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Diseño UI-UX</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Eventos digitales</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Integración multiplataforma</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Aplicaciones Para WordPress</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Apps de visualización de productos</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Aplicaciones de escritorio</BlockText>
              </ServicesItem>
            </ServicesList>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <ServicesList>
              <ServicesItem>
                <BlockText>Community manager</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Copywriting</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Publicidad</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Creación de marca</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Chats bots</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Shops en redes sociales</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Omnicanalidad</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Filtro para redes sociales</BlockText>
              </ServicesItem>
            </ServicesList>
          </ContentBlock>
        </ContentWrapper>

        <ContentWrapper>
          <ContentBlock>
            <ServicesList>
              <ServicesItem>
                <BlockText>Apps Web</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>
                  Diseño y desarrollo de sitios web corporativas/E-Commerce
                </BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Progressive Web Applications - PWA</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>
                  Apps de realidad aumentada,realidad virtual y realidad mixta
                </BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Inteligencia artificial</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Videojuegos</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>Gamificación</BlockText>
              </ServicesItem>
              <ServicesItem>
                <BlockText>
                  Automatización de procesos (machine learning)
                </BlockText>
              </ServicesItem>
            </ServicesList>
          </ContentBlock>
        </ContentWrapper>
      </Row>
    </Container>
  );
};

export default ServicesSection;
