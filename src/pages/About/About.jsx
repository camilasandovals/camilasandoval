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
                <h4>My Journey in Tech...</h4>
                    <p>
                    I was born in Colombia and later moved to Florida. My academic journey includes earning a bachelor's degree in Biomedical Engineering and receiving a scholarship to study Software Engineering at a bootcamp in Boca Raton, Florida.
                    </p>
                    <p>
                    Over the past three years, I’ve been developing robust web applications for startups, working on freelance projects, and delivering courses and presentations to students and professionals about the tech industry.
                    </p>
                    <p>
                    I thrive in collaborative environments, love learning new things, and enjoy giving back to my community 🙌🏻
                    </p>

                <div className="icons-container">
                    <a  href="https://github.com/camilasandovals" target="_blank" style={{ marginRight: "10%" }}>
                    <Github className="icon" size={38} color="#6b0080" />
                    </a>
                    <a  href="https://www.linkedin.com/in/camilasandovals/" target="_blank" style={{ marginRight: '10%' }}>
                    <Linkedin  className="icon" size={38} color="#6b0080" />
                    </a>
                    <a  href="mailto:csandoval.eng@gmail.com" target="_blank" style={{ marginRight: '10%' }}>
                    <EnvelopeFill className="icon" size={38} color="#6b0080"/>
                    </a>
                        {/* <Button style={{marginLeft:80 }} variant="primary">Hire me</Button> */}
                </div>
            </Col>
        </Row>
        </Container>
    )
}
