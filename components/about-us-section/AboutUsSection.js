import {
  Container,
  Wrapper,
  HeadWrapper,
  Title,
  HeadLine,
  Text,
  Clouds
} from "./AboutUsSection.elements";
const AboutUsSection = () => {
  return (
    <Container>
      <Clouds/>
      <Wrapper>
        <HeadWrapper>
          <Title>Infut</Title>
          <HeadLine>agencia digital</HeadLine>
        </HeadWrapper>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          rerum esse nihil sint repudiandae veniam eos accusantium, numquam
          eveniet sunt ratione? Debitis nisi aperiam quod quisquam laudantium!
          Quas eos, ipsam perspiciatis, vero possimus aspernatur modi veniam
          quod eligendi nostrum quibusdam excepturi ipsum fugit libero est
          molestias id maxime perferendis dolorum in aut unde, consequatur
          exercitationem provident! Expedita harum minus laboriosam corporis
          iure nam unde dolorem, vel facilis fugit corrupti ullam alias voluptas
          ratione ducimus error voluptatum vitae assumenda nisi fugiat veritatis
          ad. Beatae corporis ducimus error repellat, dolores amet dolorem ab,
          doloremque eius nesciunt adipisci consequuntur ipsum. Pariatur, qui
          quidem?
        </Text>
      </Wrapper>
    </Container>
  );
};

export default AboutUsSection;
