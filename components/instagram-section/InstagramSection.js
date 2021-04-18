import Card from "../cards/Card";
import { Container, Row } from "../layout/Layout.elements";
import {
  InstagramContainer,
  FollowButton,
  HeadTitle,
  InfoContainer,
  UserText,
} from "./InstagramSection.elements";
const InstagramSection = () => {
  return (
    <InstagramContainer>
      <Container mBot="0rem">
        <HeadTitle>Un dia en la base espacial</HeadTitle>
        <InfoContainer>
          <UserText>@infut</UserText>
          <FollowButton>Siguenos</FollowButton>
        </InfoContainer>
        <Row col={3}>
          <Card
            post={{
              url:
                "https://images.unsplash.com/photo-1510022151265-1bb84d406531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
          />
          <Card
            post={{
              url:
                "https://images.unsplash.com/photo-1510022151265-1bb84d406531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
          />
          <Card
            post={{
              url:
                "https://images.unsplash.com/photo-1510022151265-1bb84d406531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
          />
        </Row>
      </Container>
    </InstagramContainer>
  );
};

export default InstagramSection;
