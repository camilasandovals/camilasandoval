import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";
import Home from "./Home/Home";
import About from "./About/About";
import Projets from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Certificates from "./Certificates/Certificates";
import Videos from "./Videos/Videos";
export default function Page() {
    return(
        <AppLayout>
            <Home />
            <About />
            <Projets />
            <Skills />
            <Videos />
            <Certificates />
        </AppLayout>
    )
}
