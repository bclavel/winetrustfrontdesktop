import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import '../style.css';
import { Link } from "react-router-dom";


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
              <Link style={styles.myproduct} className='whiteBtnLink' to='/dashboard/'>Mes produits</Link>
            </NavItem>
            <NavItem style={styles.iconUser}>
              <img style={{width : "35px"}} src="../images/profil.png" />
            </NavItem>
            <NavItem style={styles.navBtndeconnect}>
                <Button href="/" style={styles.blueSmallBtn}>Déconnexion</Button>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100vw'
  },
  myproduct: {
    fontFamily: 'Roboto',
    fontWeight : 'bold',
    textTransform : 'uppercase',
    fontSize:'18px',
    color: 'white',
    display: 'flex',
    marginRight: '270px',
    marginTop : '7px',
    marginLeft : '20px'
  },

  navItem: {
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
  blueSmallBtn : {
    backgroundColor : '#22323F',
    fontSize: '14px',
    paddingLeft : '5px',
    paddingRight : '5px',
    marginLeft : '10px',
    borderColor : '#22323F'
  }
}
function mapStateToProps(state) {
  return { user: state.userData }
}

export default connect(
    mapStateToProps,
    null
)(NavBar);
