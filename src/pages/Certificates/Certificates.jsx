import { Container, Row } from "react-bootstrap";
import Panel from "./Panel";
import data from "../../data/certificates.json"
import "./Certificates.css"

export default function Certificates() {
    return(
        <Container id="projects">
            <h1>Certificates</h1>
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