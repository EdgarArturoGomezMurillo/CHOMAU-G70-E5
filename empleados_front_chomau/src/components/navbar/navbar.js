<<<<<<< HEAD
import React from 'react';
import { Container, Nav, Navbar, Dropdown, DropdownButton, Row,  } from "react-bootstrap";  //La col de columna aun no se ha definido como variable
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Tienda Chomau Colombia<span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>

            <DropdownButton title="Usuario">
              <Dropdown.Header id='dropdown-header'>
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>
                  #USUARIO#
                </Row>

              </Dropdown.Header>
              <Dropdown.Divider />

              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
=======
import React from 'react';
import {Navbar, Container, NavDropdown, NavbarBrand, NavDropdownProps, Nav } from 'react-bootstrap';
class 

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

>>>>>>> 8229ae6241da991848afe1381969a4bfa306c0be
