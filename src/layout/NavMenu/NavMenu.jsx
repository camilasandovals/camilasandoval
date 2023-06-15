import { Navbar, Container, Nav } from "react-bootstrap"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"
export default function NavMenu() {
    return(
        <Navbar fixed="top" bg="danger" variant="dark" expand="md">
        <Container>
        <HashLink to="/#home">Camila</HashLink>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto"> 
              <HashLink to="/#about">About</HashLink>
              <HashLink to="/#projects">Projects</HashLink>
              <HashLink to="/#skills">Skills</HashLink>
              <HashLink to="/#certificates">Certificates</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}