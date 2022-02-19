import Card from '../cards/Card';
import { Container, Row } from '../layout/Layout.elements';
import {
  InstagramContainer,
  FollowButton,
  HeadTitle,
  InfoContainer,
  UserText
} from './InstagramSection.elements';

import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

const InstagramSection = ({ instagramPosts }) => {
  return (
    <InstagramContainer>
      <Container mBot="0rem">
        <Fade>
          <HeadTitle>A day at the space base</HeadTitle>
        </Fade>
        <InfoContainer>
          <UserText>@infut</UserText>
          <Jump>
            <FollowButton
              href={'https://www.instagram.com/infutgrowth/'}
              target={'blank'}
              rel={'noopener'}
            >
              Follow us
            </FollowButton>
          </Jump>
        </InfoContainer>
        {/* <Row col={3}>
          {instagramPosts.map(({ node }, i) => (
            <Card
              post={{
                url: node.thumbnail_src,
              }}
              alt={node.edge_media_to_caption.edges[0].node.text
                .replace(/(#\w+)+/g, "")
                .trim()}
              key={i}
            />
          ))}
        </Row> */}
      </Container>
    </InstagramContainer>
  );
};

export default InstagramSection;
