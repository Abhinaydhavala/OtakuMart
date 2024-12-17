import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => handleNavigation("/")}
              style={{ cursor: "pointer" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/#products")}
              style={{ cursor: "pointer" }}
            >
              Products
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/about")}
              style={{ cursor: "pointer" }}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
