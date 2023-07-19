import { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import { HashLink } from "react-router-hash-link";
import "./NavMenu.css"

export default function NavMenu() {
    const [activeLink, setActiveLink] = useState("/#home");

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return(
        <Navbar className="navmenu" fixed="top"  expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="m-auto"> 
              <HashLink onClick={() => handleClick("/#home")} className={`link ${activeLink === "/#home" ? "active" : ""}`} to="/#home">HOME</HashLink>
              <HashLink onClick={() => handleClick("/#about")} className={`link ${activeLink === "/#about" ? "active" : ""}`} to="/#about">ABOUT</HashLink>
              <HashLink onClick={() => handleClick("/#projects")} className={`link ${activeLink === "/#projects" ? "active" : ""}`} to="/#projects">PROJECTS</HashLink>
              <HashLink onClick={() => handleClick("/#skills")} className={`link ${activeLink === "/#skills" ? "active" : ""}`} to="/#skills">SKILLS</HashLink>
              <HashLink onClick={() => handleClick("/#certificates")} className={`link ${activeLink === "/#certificates" ? "active" : ""}`} to="/#certificates">CERTIFICATES</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
