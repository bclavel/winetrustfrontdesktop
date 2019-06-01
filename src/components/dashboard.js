import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import NavBar from './navbar';
import { Link } from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateTest : null,
    };
}


 render() {
   var productData = {
     title : 'test'
   }
  return (
    <div style={styles.background}>
       <Container>
       <NavBar />
        <Row>
          <Col sm="12" md={{ size: 4, offset: 8 }} style={styles.headerTxt}>Vous êtes : Domaine Beauregard (producteur)</Col>
        </Row>
        <Row>
          <Col sm="12"><h1 style={styles.h1}>Dashboard - Mes produits</h1></Col>
        </Row>
        <Row>
          <Col md={{ size: 3, offset: 9 }}>
            <Button className='blueBigBtnHover' style={styles.blueBigBtn}><Link to='/createproduct/' className='blueBtnLink'>Créer un produit</Link></Button>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Table style={styles.tableTxt}>
              <thead>
                <tr>
                  <th>ID produit</th>
                  <th>Statut</th>
                  <th>Nom du produit</th>
                  <th>Appellation</th>
                  <th>Date de création</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>03948xjfe4417ty8ik63ee2</td>
                  <td>en stock</td>
                  <td>Chateau Beauregard 2014</td>
                  <td>Pomerol</td>
                  <td>03/11/2018</td>
                  <td>
                    <div>
                      <Button style={styles.lightSmallBtn}><Link to='/product/' className='lightBtnLink'>Détails</Link></Button>
                      <Button style={styles.blueSmallBtn}><Link to='/sellproduct/' className='blueBtnLink'>Vendre</Link></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03948xjfe4417ty8ik63ee2</td>
                  <td>en stock</td>
                  <td>Chateau Beauregard 2014</td>
                  <td>Pomerol</td>
                  <td>03/11/2018</td>
                  <td>
                    <div>
                      <Button style={styles.lightSmallBtn}><Link to='/product/' className='lightBtnLink'>Détails</Link></Button>
                      <Button style={styles.blueSmallBtn}><Link to='/sellproduct/' className='blueBtnLink'>Vendre</Link></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03948xjfe4417ty8ik63ee2</td>
                  <td>en stock</td>
                  <td>Chateau Beauregard 2014</td>
                  <td>Pomerol</td>
                  <td>03/11/2018</td>
                  <td>
                    <div>
                      <Button style={styles.lightSmallBtn}><Link to='/product/' className='lightBtnLink'>Détails</Link></Button>
                      <Button style={styles.blueSmallBtn}><Link to='/sellproduct/' className='blueBtnLink'>Vendre</Link></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

var styles = {
  background : {
    backgroundColor : 'white',
  },
  headerTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    marginBottom : '75px',
  },
  h1 : {
    fontFamily: 'Roboto',
    fontSize: '36px',
  },
  h4 : {
    fontFamily: 'Roboto',
    fontSize: '18px',
  },
  h2 : {
    fontFamily: 'Roboto',
    fontSize: '24px',
  },
  productImg : {
    display : 'flex',
    alignItems : 'center',
    flexDirection: 'column',
  },
  smallBtn : {
    backgroundColor : '#22323F',
    fontSize: '18px',
    paddingLeft : '40px',
    paddingRight : '40px',
  },
  smallTxt : {
    fontFamily: 'Roboto',
    fontSize: '12px',
  },
  textLink : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    color : '#711A1A',
    textDecoration : 'underline'
  },
  normalTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
  },
  tableTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    textAlign : 'center',
    marginTop : '20px'
  },
  textContact : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    display : 'flex',
    alignItems : 'center',
  },
  modalFormat : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'normal'
  },
  spinnerStyle : {
    marginRight : '10px'
  },
  blueBigBtn : {
    backgroundColor : '#22323F',
    fontSize: '18px',
    paddingLeft : '40px',
    paddingRight : '40px',
    marginLeft : '30px',
    borderColor : '#22323F'
  },
  blueSmallBtn : {
    backgroundColor : '#22323F',
    fontSize: '14px',
    paddingLeft : '5px',
    paddingRight : '5px',
    marginLeft : '10px',
    borderColor : '#22323F'
  },
  lightSmallBtn : {
    backgroundColor : '#E2DAD4',
    color : '#22323F',
    fontSize: '14px',
    paddingLeft : '5px',
    paddingRight : '5px',
    borderColor : '#E2DAD4'
  },
}
