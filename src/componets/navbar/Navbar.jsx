import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "./Navbar.css"; // Assuming you have custom styles in Navbar.css
import Logo from "../assets/63ffb38a8134bc601c530ccd_Disco-Wordmark-Primary_Blue-Black-removebg-preview.png";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="body-tertiary ps-lg-5 pe-lg-5 navbar-with-border sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="auto"
            height="30"
            className="d-inline-block align-top"
            alt="Navbar Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto me-auto mb-2 mb-lg-0 justify-content-center justify-content-spacebetween nav-items">
            <Nav.Link href="#" className="nav-link" aria-current="page"><div className="text-center">Our Why</div></Nav.Link>
            <Nav.Link href="#" className="nav-link"><div className="text-center">Use Cases</div></Nav.Link>
            <Nav.Link href="#" className="nav-link"><div className="text-center">Features</div></Nav.Link>
            <Nav.Link href="#" className="nav-link"><div className="text-center">Resources</div></Nav.Link>
            <Nav.Link href="#" className="nav-link"><div className="text-center">About</div></Nav.Link>
            <Nav.Link href="#" className="nav-link"><div className="text-center">Pricing</div></Nav.Link>
          </Nav>
          <Nav.Link href="#" className="nav-link"><div className="text-center signin me-3" >Sign In</div></Nav.Link>
          <Nav.Link href="#" className="nav-link">
          <div className="text-center signin me-3" ><Button variant="primary" className='nav-button'>Start free trial</Button></div>
          
          </Nav.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
