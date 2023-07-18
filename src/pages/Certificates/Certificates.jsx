import { Container, Row } from "react-bootstrap";
import Panel from "./Panel";
import data from "../../data/certificates.json"
import "./Certificates.css"

export default function Certificates() {
    return(
        <Container id="certificates">
            <h1>Certificates</h1>
            {/* <h3 className="mb-4">Click to unfold</h3> */}
            <Row className="m-3 justify-content-center" >
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