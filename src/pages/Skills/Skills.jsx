import { Col, Container, Row } from "react-bootstrap";
import skillDev from "../../data/skill-dev.json"
import Panel from "./Panel";
import "./Skills.css"

export default function Skills() {
    return(
        <Container id="skills">
            <h1>Skills</h1>
            <Row className="mt-5 justify-content-center">
              <Col md={7} className="text-center">
              <h3 className="mb-4">Just the ones that I practice everyday</h3>

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