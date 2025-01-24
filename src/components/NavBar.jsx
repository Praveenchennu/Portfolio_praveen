
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/img/letter-p.png"

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="navcontainer p-0 px-3">
        <Navbar.Brand href="#banner" className="head text-white">
          {/* <h2>My Profile</h2> */}
          <img src={logo} style={{width:'69px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#banner" className="navbar-link">
                Home
              </Nav.Link>
              <Nav.Link href="#education" className="navbar-link">
                Education
              </Nav.Link>
              <Nav.Link href="#skills" className="navbar-link">
                Skills
              </Nav.Link>
              <Nav.Link href="#experience" className="navbar-link">
                Experience
              </Nav.Link>
              <Nav.Link href="#projects" className="navbar-link">
                Projects
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
