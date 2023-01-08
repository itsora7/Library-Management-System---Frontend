import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <NavLink to="/" className="mx-3">
              Login
            </NavLink>
            <NavLink to="/">Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
