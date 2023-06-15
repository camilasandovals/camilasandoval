import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";
import Home from "./Home";
import About from "./About";
import Projets from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
export default function Page() {
    return(
        <AppLayout>
            <Home />
            <About />
            <Projets />
            <Skills />
            <Certificates />
        </AppLayout>
    )
}