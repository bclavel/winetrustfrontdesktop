import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import NavBar from './navbar';
import DashboardRow from './dashboardrow';
import { Link } from "react-router-dom";
import factory from '../ethereum/factory'
import product from '../ethereum/product'
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateTest : null,
      }
    };

 render() {
   var userProducts = this.props.products.map((element, i) => {
     var productName = element.productCuvee + ' ' + element.productMillesime
     return (
       <DashboardRow
          key={i}
          productAddressEth={element.productAddressEth}
          productStatus={element.productStatus}
          productName={productName}
          productAppellation={element.productAppellation}
          productCreationDate={element.productCreationDate}
          productDomaine={element.productDomaine}
          domainPostalAddress={element.domainPostalAddress}
          domainEmail={element.domainEmail}
          ownerAddressEth={element.ownerAddressEth}
          lastBuyer={element.lastBuyerAddressEth}
          transactCreationDate={element.lastTransactCreationDate}/>
        )
      })

  return (
    <div>
      <NavBar />
      <div style={styles.background}>
         <Container>
          <Row>
            <Col sm="12" md={{ size: 4, offset: 8 }} style={styles.headerTxt}>Vous êtes : {this.props.user.companyName} ({this.props.user.role})</Col>
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
                  {userProducts}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
  }
}

var styles = {
  background : {
    backgroundColor : 'white'
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
  lightBigBtn : {
    backgroundColor : '#E2DAD4',
    color : '#22323F',
    fontSize: '18px',
    paddingLeft : '40px',
    paddingRight : '40px',
    borderColor : '#E2DAD4'
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
  imageModal : {
    width : '100%'
  },
}


function mapStateToProps(state) {
  console.log('Dashboard : state products >>', state.products);
  console.log('Dashboard : state userData >>', state.userData);
 return {
   products: state.products,
   user : state.userData
 }
}

export default connect(mapStateToProps, null)(Dashboard);
