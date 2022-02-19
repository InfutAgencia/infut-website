import { Container, Row } from '../layout/Layout.elements';
import {
  ServicesContainer,
  ContentWrapper,
  ContentBlock,
  BlockImageContainer,
  BlockImage,
  BlockText,
  PinkColor,
  ServicesList,
  ServicesItem
} from './Services.elements';
import Fade from 'react-reveal/Fade';
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
                Custom design and development for companies, startups, business
                plans.
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
              <PinkColor>Digital and offline marketing strategies</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>
        <ContentWrapper>
          <ContentBlock>
            <BlockImageContainer>
              <BlockImage src="/img/astronaut.png" width="50" height="50%" />
            </BlockImageContainer>
            <BlockText>
              <PinkColor>Audiovisual design and assembly service</PinkColor>
            </BlockText>
          </ContentBlock>
        </ContentWrapper>

        <ContentWrapper>
          <ContentBlock>
            <Fade bottom>
              <ServicesList>
                <ServicesItem>
                  <BlockText>Mobile apps for android and IOS.</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>M-Commerce Apps</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>UI'UX design</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Digital events</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Cross-platform integration</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Applications For WordPress</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Product display apps</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Desktop Applications</BlockText>
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
                  <BlockText>Community manager</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Copywriting</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Advertising</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Brand creation</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Chats bots</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Shops in social networks</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Product display apps</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Desktop applications</BlockText>
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
                  <BlockText>Web apps</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Web design and development</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Progressive Web Applications - PWA</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>
                    Augmented reality, virtual reality and mixed reality apps
                  </BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Artificial intelligence</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Videogames</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Gamification</BlockText>
                </ServicesItem>
                <ServicesItem>
                  <BlockText>Machine learning</BlockText>
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
