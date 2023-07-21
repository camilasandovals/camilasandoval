import { Button, Col, Container, Row } from "react-bootstrap";
import AppLayout from "../../layout/AppLayout";
import { ArrowLeft, EnvelopeFill, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "./About.css"
export default function About() {
    return(
        <Container id="about" >
        <h1>About Me</h1>
        <Row className="about-container">
            <Col className="about-image-container mt-3" lg={5} md={7} xs={8}>
                <img className="img-fluid " src="/images/cs23.png" alt="Camila Sandoval photograpy" />
            </Col>
            
            <Col  className="about-text-container" lg={5} md={12}  xs={11}>
                <h3 style={{ color: "#FF479A" }}>Breaking Code, Building Success</h3>
                 {/* <h3 style={{ color: "#FF479A" }}>A Web Developer based in the US</h3> */}
                 <h4>A Transnational Journey in Tech</h4> 
                 <p>Born in Colombia, later moved to Florida in pursuit of a better life and opportunities. My academic background includes a bachelor's degree in Engineering and a scholarship-awarded in Software Engineering at a bootcamp in Boca Raton. This educational journey ignited my passion for web development.</p>
                <p>The past two years have seen me involved in the development of robust web applications for startups, with the most recent year spent thriving as a Front-End Developer. The work I've done has not only enhanced my skills but has also significantly boosted the businesses I've worked with, leading to notable increases in monthly income.</p>
                <p>Collaboration, learning, and project creation with others are activities I thrive in and thoroughly enjoy. 🚀</p>
                <div className="icons-container">
                    <a  href="https://github.com/camilasandovals" target="_blank" style={{ marginRight: "10%" }}>
                    <Github className="icon" size={38} color="#6b0080" />
                    </a>
                    <a  href="https://www.linkedin.com/in/camilasandovals/" target="_blank" style={{ marginRight: '10%' }}>
                    <Linkedin  className="icon" size={38} color="#6b0080" />
                    </a>
                    <a  href="https://www.instagram.com/foreigncoders/" target="_blank" style={{ marginRight: '10%' }}>
                    <EnvelopeFill className="icon" size={38} color="#6b0080"/>
                    </a>
                        {/* <Button style={{marginLeft:80 }} variant="primary">Hire me</Button> */}
                </div>
            </Col>
        </Row>
        </Container>
    )
}