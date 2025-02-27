import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/Asset 16@4x.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import { useState } from 'react';

export default function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  }

  return (
<Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary" fixed="top" expanded={expanded} expand="lg">
<Container fluid>
  <Navbar.Brand href="#"><img src = {logo} style={{ height: '50px', width: 'auto' }}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav
      className="ms-auto"
      style={{ maxHeight: '100px' }}
      navbarScroll >
      <Nav.Link href="#menu">Menu</Nav.Link>
      <Nav.Link href="">Restaurants</Nav.Link>
      <Nav.Link href="">Gallery</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#footer">Contact Us</Nav.Link>

 
    </Nav>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-warning">Search</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}
