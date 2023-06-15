import { Col, Container, Row } from "react-bootstrap";
import skillDev from "../../data/skill-dev.json"
import Panel from "./Panel";

export default function Skills() {
    return(
        <Container id="skills">
            <h1>Skills</h1>
            <Row className="mt-5 justify-content-center">
              <Col md={6} className="text-center">
              {skillDev.map(
                (element) => (
                  <Panel                 
                    key={element.id} 
                    name={element.name} />
                )
              )}
            </Col>
            </Row>
        </Container>
    )
}