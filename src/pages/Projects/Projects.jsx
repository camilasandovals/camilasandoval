import { Container, Row } from "react-bootstrap";
import Panel from "./Panel"
import data from "../../data/portfolio.json"
import "./Projects.css"
export default function Projets() {
    return(
        <Container id="projects">
            <h1>Projects</h1>
            <Row className="m-4 justify-content-center" >
                {
                    data.map( 
                        (element) => (
                            element
                            ? <Panel data={element}/>
                            : <p>Loading...</p>
                        )
                    )
                }
            </Row>
        </Container>
            
    )
}