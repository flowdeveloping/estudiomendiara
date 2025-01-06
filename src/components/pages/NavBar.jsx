import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (sectionId === "home") {
      // Desplazar a la parte superior
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
    } else {
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  return (
    <>
      <div className="top-bar"></div>
      <Navbar bg="light" expand="lg" fixed="top" className="navbar-custom">
        <Navbar.Brand onClick={() => handleScrollToSection("home")} className="navbar-logo" style={{ cursor: "pointer" }}>
          <img 
            src="/src/assets/img/logo verdad justicia orden.png" 
            alt="Logo"
            width="100"  
            height="auto"
            style={{ marginTop: '20px' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="nav-link-custom" onClick={() => handleScrollToSection("home")}>
              HOME
            </Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={() => handleScrollToSection("areas-de-practica")}>
              ÁREAS DE PRÁCTICA
            </Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={() => handleScrollToSection("sobre-mi")}>
              SOBRE MI
            </Nav.Link>
            <Nav.Link className="nav-link-custom" as={Link} to="/blog">BLOG</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={() => handleScrollToSection("contacto")}>
              CONTACTO
            </Nav.Link>
          </Nav>
          <Button 
            variant="custom" 
            className="consulta-button" 
            style={{ marginLeft: '20px', marginTop: '20px' }} 
          >
            Agendar Cita
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
