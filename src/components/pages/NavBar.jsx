import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../styles/NavBar.css';

function NavBar() {
  return (
    <>
      {/* Bloque azul que va encima del navbar */}
      <div className="top-bar"></div>

      {/* Navbar */}
      <Navbar bg="light" expand="lg" fixed="top" className="navbar-custom">
        <Navbar.Brand href="#home">
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
            <Nav.Link className="nav-link-custom" as={Link} to="/">HOME</Nav.Link>
            <Nav.Link className="nav-link-custom" as={Link} to="/areas-de-practica">ÁREAS DE PRÁCTICA</Nav.Link>
            <Nav.Link className="nav-link-custom" as={Link} to="/sobre-mi">SOBRE MI</Nav.Link>
            <Nav.Link className="nav-link-custom" as={Link} to="/blog">BLOG</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#contacto">
  CONTACTO
</Nav.Link>
          </Nav>
          <Button 
            variant="custom" 
            className="consulta-button" 
            style={{ marginLeft: '20px', marginTop: '20px' }} // Aumenta este valor para probar
          >
            Agendar Cita
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
