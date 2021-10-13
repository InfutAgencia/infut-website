import Card from "../cards/Card";
import { Container, Row } from "../layout/Layout.elements";
import Fade from "react-reveal/fade";
const MisionsSection = ({ projects }) => {
  return (
    <Container id="misiones">
      <Fade bottom>
        <Row col={3}>
          {projects?.map((project) => (
            <Card project={project} type={"post"} key={project._id} />
          ))}
        </Row>
      </Fade>
    </Container>
  );
};

export default MisionsSection;
