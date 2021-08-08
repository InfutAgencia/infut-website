import Card from "../cards/Card";
import { Container, Row } from "../layout/Layout.elements";

const MisionsSection = ({ projects }) => {
  return (
    <Container id="misiones">
      <Row col={3}>
        {projects?.map((project) => (
          <Card project={project} type={"post"} key={project._id} />
        ))}
      </Row>
    </Container>
  );
};

export default MisionsSection;
