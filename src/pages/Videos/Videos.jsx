import { Col, Container, Row } from "react-bootstrap";
import "./Videos.css"

export default function Videos() {
    return(
        <Container id="videos" className="videos">
            <h1>Presentations</h1>
            <Row className="videos-container">
                <Col className="video-container mt-3" lg={6} md={12} xs={12}>
                    <div className="video-wrapper">
                        <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/KX8_S2l27fg" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </Col>
                <Col className="video-container mt-3" lg={6} md={12} xs={12}>
                    <div className="video-wrapper">
                        <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/tOyhpQJP3TU" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
