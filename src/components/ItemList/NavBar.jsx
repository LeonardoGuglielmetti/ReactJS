import React from "react";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import WidgetCart from "./WidgetCart";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to={"/"}>
        <img src="https://i.pinimg.com/originals/60/86/f3/6086f3ea789e1beaa1f948e060a28a2c.png" width={20} alt="" />
        <Navbar.Brand href="#home"> gar´s Room</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <WidgetCart />
          <Nav className="me-auto">
            <Nav.Link href="#all">All</Nav.Link>
            <Nav.Link href="#we">What is Egar´s Room?</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#t-shirts/3.1">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#Pants/3.2">
                Pants
              </NavDropdown.Item>
              <NavDropdown.Item href="#Jackets/3.3">Jackets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Shoes/3.4">
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#aid">Help me!</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

)};

export default NavBar; 