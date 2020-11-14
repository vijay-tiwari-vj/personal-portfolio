import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light" style={{ paddingTop: 3, paddingBottom: 3 }}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/logo192.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="VJ logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: 'none', color: '#333', padding: 0 }}>
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
