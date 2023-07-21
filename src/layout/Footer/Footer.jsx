import { EnvelopeFill, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return(
        <footer style={{color: "grey", paddingTop: 10}}>
            <small >&copy; {currentYear} - Camila Sandoval </small>
            <div style={{ padding: 10}}>
                    <a href="https://github.com/camilasandovals" target="_blank" style={{ marginRight: "2%" }}>
                    <Github size={18} color="grey" />
                    </a>
                    <a href="https://www.linkedin.com/in/camilasandovals/" target="_blank" style={{ marginRight: '2%' }}>
                    <Linkedin size={18} color="grey" />
                    </a>
                    <a href="https://www.instagram.com/foreigncoders/" target="_blank">
                    <EnvelopeFill size={18} color="grey"/>
                    </a>
                        
                </div>
        </footer>
    )
}