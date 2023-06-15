import { Button, Col, Container, Row } from "react-bootstrap";
import AppLayout from "../../layout/AppLayout";
import { ArrowLeft, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "./About.css"
export default function About() {
    return(
        <Container id="about" >
        <h1>About Me</h1>
        <Row className="about-container">
            <Col className="about-image-container" md={5}>
                <img className="img-fluid" src="/images/cs23.png" alt="Camila Sandoval photograpy" />
            </Col>
            
            <Col  className="about-text-container" md={5}>
                <h3 style={{ color: "#FF479A" }}>A little bit about me</h3>
                <h2>I am Camila Sandoval</h2>
                <h3 style={{ color: "gray" }}>An Engineer based in the United States</h3>
                <p>I specialize in designing and developing modern websites, with a focus on backend development for clients of all sizes. My passion is to solve complex problems in an efficient manner while creating bold and meaningful interfaces for digital user experiences. Collaborating with new people is one of my favorite things to do. ✨</p>
                <p>I love learning from and working with others while creating amazing projects. 🚀</p>
                <div className="icons-container">
                    <a className="icon" href="https://github.com/camilasandovals" target="_blank" style={{ marginRight: '50px' }}>
                    <Github size={40} color="#6b0080" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/camilasandovals/" target="_blank" style={{ marginRight: '50px' }}>
                    <Linkedin size={40} color="#6b0080" />
                    </a>
                    <a className="icon" href="https://www.instagram.com/foreigncoders/" target="_blank">
                    <Instagram size={40} color="#6b0080" />
                    </a>
                        {/* <Button style={{marginLeft:80 }} variant="primary">Hire me</Button> */}
                </div>
            </Col>
        </Row>
        </Container>
    )
}