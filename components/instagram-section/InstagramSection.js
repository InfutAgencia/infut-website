import Card from "../cards/Card";
import { Container, Row } from "../layout/Layout.elements";
import {
  InstagramContainer,
  FollowButton,
  HeadTitle,
  InfoContainer,
  UserText,
} from "./InstagramSection.elements";
const InstagramSection = ({ instagramPosts }) => {
  return (
    <InstagramContainer>
      <Container mBot="0rem">
        <HeadTitle>Un dia en la base espacial</HeadTitle>
        <InfoContainer>
          <UserText>@infut</UserText>
          <FollowButton
            href={"https://www.instagram.com/infutgrowth/"}
            target={"blank"}
            rel={"noopener"}
          >
            Siguenos
          </FollowButton>
        </InfoContainer>
        <Row col={3}>
          {instagramPosts.map(({ node }, i) => (
            <Card
              post={{
                url: node.thumbnail_src,
              }}
              alt={node.edge_media_to_caption.edges[0].node.text
                .replace(/(#\w+)+/g, "")
                .trim()}
            />
          ))}
        </Row>
      </Container>
    </InstagramContainer>
  );
};

export default InstagramSection;
