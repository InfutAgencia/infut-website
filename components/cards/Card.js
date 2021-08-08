import * as gtag from "../../lib/gtag";
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
  const handleView = ({ project_viewed }) => {
    gtag.event({
      action: "viewed_project",
      category: "projects",
      label: project_viewed,
    });
  };

  return (
    <CardContainer url={project?.posterImage?.formats?.small?.url}>
      {/* <CardImage src={project?.posterImage?.url} alt={alt ? alt : ""} /> */}
      {type === "post" ? (
        <>
          <CardBody>
            <Content>
              <CardTitle>{project?.title}</CardTitle>
              <CardText>{project?.description}</CardText>
              <CardButton
                href={project?.url}
                target="_blank"
                rel="noopener"
                onClick={handleView({ project_viewed: project?.title })}
              >
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
