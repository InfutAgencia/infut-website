import {
  Container,
  Wrapper,
  HeadWrapper,
  Title,
  HeadLine,
  Text,
  Clouds,
  TextWrapper,
  Img
} from './AboutUsSection.elements';
import Fade from 'react-reveal';

const AboutUsSection = () => {
  return (
    <Container>
      <Wrapper>
        <HeadWrapper>
          <Title>Infut</Title>
          <Fade bottom>
            <HeadLine>digital agency</HeadLine>
          </Fade>
        </HeadWrapper>

        <TextWrapper>
          <Fade bottom cascade>
            <Text>
              Infut is a digital cosmodrome, a space created for the launch,
              technical assistance and landing of rockets in the new world of
              digitization.
            </Text>
            <Text>
              All spaceships need support, for this, Infut has a trained team
              that will support you by monitoring and building strategies to
              overcome any obstacle that appears along the way. You won't be
              alone, we will undertake with you this adventure of digitizing and
              transforming your business model.
            </Text>
            <Text>
              <strong>
                Ps: It's a one-way trip, but don't worry, we're sure you won't
                want to go back.
              </strong>
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
