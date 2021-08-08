import {
  CardContainer,
  CardImage,
  CardTitle,
  CardBody,
  CardButton,
  Content,
  CardText,
} from "./Card.elements";

//? reemplazar ur con post o proyecto
const Card = ({ project, alt, type }) => {
  return (
    <CardContainer url={project?.posterImage?.formats?.small?.url}>
      {/* <CardImage src={project?.posterImage?.url} alt={alt ? alt : ""} /> */}
      {type === "post" ? (
        <>
          <CardBody>
            <Content>
              <CardTitle>{project?.title}</CardTitle>
              <CardText>{project?.description}</CardText>
              <CardButton href={project?.url} target="_blank" rel="noopener">
                Visitar
              </CardButton>
            </Content>
          </CardBody>
        </>
      ) : null}
    </CardContainer>
  );
};

export default Card;
