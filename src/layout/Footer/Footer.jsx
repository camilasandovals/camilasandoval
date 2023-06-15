import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return(
        <footer >
            <small>&copy; Camila Sandoval - {currentYear}</small>
        </footer>
    )
}