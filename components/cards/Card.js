import {
  CardContainer,
  CardImage,
  CardTitle,
  CardBody,
  CardButton,
  Content,
} from "./Card.elements";

//? reemplazar ur con post o proyecto
const Card = ({ post, alt, type }) => {
  return (
    <CardContainer>
      <CardImage src={post.url} alt={alt ? alt : ""} />
      {type === "post" ? (
        <CardBody>
          <Content>
            <CardTitle>Title Here</CardTitle>
            <CardButton href="#link">Visitar</CardButton>
          </Content>
        </CardBody>
      ) : null}
    </CardContainer>
  );
};

export default Card;
