import React from 'react';
import {
  Container,
  Row,
  Col
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <div style={{backgroundColor : 'red'}}>
      <Container>
          <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
    </Container>
    </div>
    );
  }
}
