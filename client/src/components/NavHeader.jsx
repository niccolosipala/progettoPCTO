import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router";

function NavHeader() {
  return (
    <Navbar
      variant="dark"
      bg="primary"
      className="shadow-sm"
    >
      <Container fluid>
        {/* Brand (sinistra) */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-light fs-4"
        >
          StageLink
        </Navbar.Brand>

        {/* Link (destra) */}
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="/login"
            className="btn btn-primary text-light fw-semibold me-3"
          >
           
            Accedi/Regitrati 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
