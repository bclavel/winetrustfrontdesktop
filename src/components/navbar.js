import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import '../style.css';


class NavBar extends React.Component {
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
          <Nav style={styles.nav} expand="md" navbar>
            <NavbarBrand href="/">
              <img style={{maxWidth:'200px', marginLeft:'200px'}} src="../images/WineTrust-H-logo-bordeaux.png" />
            </NavbarBrand>
            <NavItem >
              <NavLink  style={styles.myproduct}  href="/dashboard">MES PRODUITS</NavLink>
            </NavItem>
            <NavItem style={styles.iconUser}>
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            </NavItem>
            <NavItem style={styles.navBtndeconnect}>
                <Button href="/" style={styles.btnDeconnect}>Déconnexion</Button>
            </NavItem>
          </Nav> 
        </Navbar>
      </div>
    )
  }
};

var styles = {

  navbar: {
    backgroundColor: "#711A1A"

  },

  nav: {
    // textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100vw'
  },
  // logo: {
  //   marginLeft: '15em',
  //   maxWidth: '200'
  // },
  myproduct: {
    fontFamily: 'Roboto',
    fontSize:'1.2em',
    color: 'white',
    display: 'flex',
    paddingRight: '350px',
  },

  navItem: {
    // textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconUser: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '300px',
    fontSize: '35px'
  },

  navBtndeconnect: {
    display: 'flex',
    alignItems: 'center',
    width: '100px',
    justifyContent: 'center',
    marginRight: '200px'
  },

  btnDeconnect: {
    backgroundColor: '#22323F',
    display: 'flex',
    alignItems: 'center',
    width: '100px',
    justifyContent: 'center'
  }
}
function mapStateToProps(state) {
  return { user: state.userData }
}

export default connect(
    mapStateToProps,
    null
)(NavBar);