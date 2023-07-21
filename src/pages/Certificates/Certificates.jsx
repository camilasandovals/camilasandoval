import { Container, Row } from "react-bootstrap";
import Panel from "./Panel";
import data from "../../data/certificates.json"
import "./Certificates.css"

export default function Certificates() {
    return(
        <Container id="certificates">
            <h1>Certificates</h1>
            <Row className="mt-4 justify-content-center" >
            <h4 className="mb-4">Discover more by clicking on each</h4>
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