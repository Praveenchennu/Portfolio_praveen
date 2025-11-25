import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/img/letter-p.png";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Detect scroll for navbar shrink
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
      const scrollPos = window.scrollY + 200;

      const sections = [
        { id: "banner", name: "home" },
        { id: "education", name: "education" },
        { id: "skills", name: "skills" },
        { id: "experience", name: "experience" },
        { id: "projects", name: "projects" },
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(section.name);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActive = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled navbar-glow" : "navbar-glow"}>
        <Container className="navcontainer p-0 px-3">

          <Navbar.Brand href="#banner" className="head text-white">
            <img src={logo} style={{ width: "69px" }} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link
                href="#banner"
                className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => onUpdateActive("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#education"
                className={`navbar-link ${activeLink === "education" ? "active" : ""}`}
                onClick={() => onUpdateActive("education")}
              >
                Education
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={`navbar-link ${activeLink === "skills" ? "active" : ""}`}
                onClick={() => onUpdateActive("skills")}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                href="#experience"
                className={`navbar-link ${activeLink === "experience" ? "active" : ""}`}
                onClick={() => onUpdateActive("experience")}
              >
                Experience
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={`navbar-link ${activeLink === "projects" ? "active" : ""}`}
                onClick={() => onUpdateActive("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
