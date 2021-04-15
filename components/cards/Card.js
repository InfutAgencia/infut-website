import {
  CardContainer,
  CardImage,
  CardTitle,
  CardBody,
  CardButton,
  Content,
} from "./Card.elements";

//? reemplazar ur con post o proyecto
const Card = ({ post }) => {
  return (
    <CardContainer>
      <CardImage src={post.url} />
      <CardBody>
        <Content>
          <CardTitle>Title Here</CardTitle>
          <CardButton href="#link">Visitar</CardButton>
        </Content>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
