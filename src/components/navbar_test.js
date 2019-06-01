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
  DropdownItem,
  Button
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
              <Nav expand="md" navbar>
                <NavItem style={styles.product}>
                  <NavLink  href="/product">MES PRODUITS</NavLink>
                </NavItem>
                <NavItem style={styles.product}>
                  <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                </NavItem>
                <NavItem>
                  <NavLink href="/">
                    <Button style={styles.btnDeconnect}>Déconnexion</Button>
                  </NavLink>
                </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
};

var styles = {
  navbar: {
    backgroundColor: "#711A1A",
    paddingLeft: "5%",
    display: 'flex',
    flexDirection: 'row',

    width: '100vw'
  },

  product: {
    marginLeft: '15vw',
    textAlign: 'left',

  },

  navitem: {
    backgroundColor: "#711A1A"

  },

  iconUser: {
    marginLeft: '10%'
  },

  btnDeconnect: {
    backgroundColor: '#22323F',
    marginTop: '35px',
    marginBottom: '10px',
    marginLeft: '50%'
  }
}
