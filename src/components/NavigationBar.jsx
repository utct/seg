import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{ backgroundColor: '#372E2E' }}
      variant="dark"
      className="shadow-sm"
    >
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="fs-3">☕</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav" className="fs-5">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contactez-nous</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
