import Card from "../cards/Card";
import { Container, Row } from "../layout/Layout.elements";
import {
  InstagramContainer,
  FollowButton,
  HeadTitle,
  InfoContainer,
  UserText,
} from "./InstagramSection.elements";

import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
const InstagramSection = ({ instagramPosts }) => {
  const { t } = useTranslation("common");
  return (
    <InstagramContainer>
      <Container mBot="0rem">
        <Fade>
          <HeadTitle>
            {t("homePage.contactSection.instagram.headLine")}
          </HeadTitle>
        </Fade>
        <InfoContainer>
          <UserText>@infut</UserText>
          <Jump>
            <FollowButton
              href={"https://www.instagram.com/infutgrowth/"}
              target={"blank"}
              rel={"noopener"}
            >
              {t("homePage.contactSection.instagram.buttonText")}
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
