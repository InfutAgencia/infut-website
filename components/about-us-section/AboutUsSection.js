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
const AboutUsSection = () => {
  return (
    <Container>
      <Wrapper>
        <HeadWrapper>
          <Title>Infut</Title>
          <HeadLine>agencia digital</HeadLine>
        </HeadWrapper>
        <TextWrapper>
          <Text>
            Infut es un cosmódromo digital, un espacio creado para el
            lanzamiento, asistencia técnica y aterrizaje de cohetes en el nuevo
            mundo de la digitalización.
          </Text>
          <Text>
            Todas las naves espaciales necesitan soporte, para ello, Infut
            cuenta con un equipo capacitado que te respaldará monitoreando y
            construyendo estrategias para superar cualquier obstáculo que se
            presentente en el camino. No estarás solo, emprenderemos contigo
            esta aventura de digitalizar y transformar tu modelo de negocio.
          </Text>
          <Text>
            <strong>
              Pd: Es un viaje sin retorno, pero no te preocupes, estamos seguros
              de que no querrás volver atrás.
            </strong>
          </Text>
        </TextWrapper>
      </Wrapper>
      {/* <Clouds /> */}

      <Img src="/img/Clouds.webp" alt="Clouds" />
    </Container>
  );
};

export default AboutUsSection;
