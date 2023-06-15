import { Navbar, Container, Nav } from "react-bootstrap"
import { HashLink } from "react-router-hash-link";
import "./NavMenu.css"
export default function NavMenu() {
    return(
        <Navbar className="navmenu" fixed="top"  expand="md">
        <Container>
        <HashLink to="/#home"><img src="images/CS.png" alt="camila sandoval logo" height={40}/></HashLink>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="m-auto"> 
              <HashLink className="link" to="/#about">ABOUT</HashLink>
              <HashLink className="link" to="/#projects">PROJECTS</HashLink>
              <HashLink className="link" to="/#skills">SKILLS</HashLink>
              <HashLink className="link" to="/#certificates">CERTIFICATES</HashLink>
              {/* <button className="dark-mode-button">Dark Mode</button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}