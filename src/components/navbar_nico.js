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
      <div style={styles.background}>
          <Container>
              <Row display="inline-block">
                <Col sm={{size: 2}}><img src="../images/WineTrust-H-logo-bordeaux.png" href ="/" alt="winetrust-logo"></img></Col>
                <Col sm="7" style={styles.headerTxt}> <NavLink href="/">MES PRODUITS</NavLink></Col>
                <Col sm={{size: 1}}>
                  <div style={styles.accountDeco}>
                      <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                      <Button href ="/" style={styles.blueBigBtn}>Déconnexion</Button>
                  </div>
                </Col>
              </Row>
          </Container>
          </div>
          );
        }
      }
      var styles = {
          background : {
            backgroundColor : '#711A1A'
          },
          accountDeco : {
              display: '-webkit-flex',
              webkitAlignItems: 'center',
              marginLeft : '20px',
              marginRight : '20px'
          },
          headerTxt : {
            fontFamily: 'Roboto',
            fontSize: '1.5em'
          },
          h1 : {
            fontFamily: 'Roboto',
            fontSize: '36px',
            marginBottom : '0px',
            textAlign: 'left'
          },
          blueBigBtn : {
              marginTop: '15px',
              marginBottom : '15px',
              backgroundColor : '#1C0C35',
              fontFamily: 'Roboto',
              fontSize: '18px',
              textAlign: 'center',
              outlineColor: '#1C0C35'
          },
          lightBigBtn : {
              backgroundColor : '#1C0C35',
              fontSize: '20px',
              paddingLeft : '20px',
              paddingRight : '20px',
              marginBottom : '15px',
              textAlign: 'center',
              marginTop: '15px'
          },
          img : {
              width: '30px',
              height: '30px'
          }
        }
