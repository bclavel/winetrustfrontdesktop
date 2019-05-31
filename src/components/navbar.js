import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
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


import '../App.css';
import '../style.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" style={styles.navbar}>
          <NavbarBrand href="/">
            <img style={{maxWidth: 200}} src="../images/WineTrust-H-logo-bordeaux.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav expand="md" navbar>
              <NavItem>
                <NavLink href="/">GitHub</NavLink>
                <Button href="/">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
};

var styles = {
  navbar: {
    backgroundColor: "#711A1A",
    paddingLeft: "5%"
  },

  navitem: {
    backgroundColor: "#711A1A",
    marginLeft: "10rem"
  }
}
