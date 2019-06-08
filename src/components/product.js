import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import NavBar from './navbar';
import HistoriqueRow from './transactionHistoryRow';
import { connect } from 'react-redux';
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formIsValid: false,
      errorOpen : false,
      errorMessage : '',
      productAddress : props.match.params.productAddress,
      productName : '',
      formControls : '',
      ownerAddressEth : '',
      productStatus : '',
      producerHash : '',
      productCreationDate : '',
      productAddressEth : '',
      productDomaine : '',
      productCuvee : '',
      productYoutube : '',
      productDeskImg : '',
      productMobImg : '',
      productMillesime : '',
      productCepages : '',
      productAppellation : '',
      productRegion : '',
      productCountry : '',
      productQuality : '',
      domainHistory : '',
      productAccords : '',
      domainPostalAddress : '',
      domainUrl : '',
      domainFacebook : '',
      domainEmail : '',
      historiqueTransactions: []
    }
   this.toggle = this.toggle.bind(this);
  }

toggle() {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
}

componentWillMount() {
  var productList = this.props.products
  for (var i = 0; i < productList.length; i++) {
    if (this.state.productAddress === productList[i].productAddressEth) {
        this.setState({
        productName : productList[i].productCuvee + ' ' + productList[i].productMillesime,
        productCreationDate : productList[i].productCreationDate,
        ownerAddressEth : '',
        productStatus : productList[i].productStatus,
        producerHash : productList[i].producerHash,
        productAddressEth : productList[i].productAddressEth,
        productDomaine : productList[i].productDomaine,
        productCuvee : productList[i].productCuvee,
        productYoutube : productList[i].productYoutube,
        productDeskImg : productList[i].productDeskImg,
        productMobImg : productList[i].productMobImg,
        productMillesime : productList[i].productMillesime,
        productCepages : productList[i].productCepages,
        productAppellation : productList[i].productAppellation,
        productRegion : productList[i].productRegion,
        productCountry : productList[i].productCountry,
        productQuality : productList[i].productQuality,
        domainHistory : productList[i].domainHistory,
        productAccords : productList[i].productAccords,
        domainPostalAddress : productList[i].domainPostalAddress,
        domainUrl : productList[i].domainUrl,
        domainFacebook : productList[i].domainFacebook,
        domainEmail : productList[i].domainEmail,
        domainEmail : productList[i].domainEmail,
        historiqueTransactions : productList[i].historiqueTransactions
      })
    }
  }
}

 render() {
  var urlYt = this.state.productYoutube.replace('watch?v=' , 'embed/');
  var productHistory
  var transactCount = this.state.historiqueTransactions.length
  console.log("this.state.historiqueTransactions", this.state.historiqueTransactions);
  if (transactCount == 0) {
    console.log('aucune transact');
    productHistory = <div style={{marginTop : "10px"}}><p style={styles.tableTxt}>Aucune transaction</p></div>
  } else {
    console.log('transact found');
    productHistory = this.state.historiqueTransactions.map((element, i) => {
    var productName = element.productCuvee + ' ' + element.productMillesime
    if (element.transactStatus === "validée") {
      return (
          <HistoriqueRow
              key={i}
              index={i+1}
              buyerName={element.buyerName}
              sellerAddressEth={element.sellerAddressEth}
              sellerName={element.sellerName}
              sellerPostalAddress={element.sellerPostalAddress}
              transactCreationDate={element.transactCreationDate}
              transactStatus={element.transactStatus}
              transactValidationDate={element.transactValidationDate}
              transactAddressEth={element.transactAddressEth}
              buyerAddressEth={element.buyerAddressEth}
              buyerPostalAddress={element.buyerPostalAddress}/>
           )
         }
       }
     )
  }


  return (

    <div>
      <NavBar />
      <div style={styles.background}>
         <Container>
          <Row>
            <Col sm="12" md={{ size: 4, offset: 8 }} style={styles.headerTxt}>Vous êtes : {this.props.user.companyName} ({this.props.user.role})</Col>
          </Row>
          <Row>
            <Col sm="12" md='6' style={styles.productImg}><img src={this.state.productDeskImg} type="fetch" alt=""  style={{ height : '600px'}}/></Col>
            <Col sm="12" md='6'>
              <h1 style={styles.h1}>{this.state.productName}</h1>
              <h4 style={styles.h4}>{this.state.productAppellation} {this.state.productQuality}</h4>
              <h4 style={styles.h4}>{this.state.productDomaine}</h4>
              <h4 style={styles.h4}>{this.state.productRegion}, {this.state.productCountry}</h4>
              <div style={{marginTop : '25px', marginBottom : '15px'}}>
                <Button style={styles.smallBtn} onClick={this.toggle}>Acheter 49,96€</Button>
                <p style={styles.smallTxt}>Vendu par Ovinia.com</p>
              </div>
              <div style={{marginTop : '25px', marginBottom : '15px'}}>
              <h2 style={styles.h2}>Découvrez le {this.state.productDomaine}</h2>
                <a style={styles.textLink}  target='_blank'>{this.state.domainUrl}</a>
                <Row>
                  <Col sm="1"><a href={`mailto:${this.state.domainEmail}`}> <img  src='/images/picto_email.png'/></a></Col>
                  <Col sm="11" style={styles.textContact}>Par email</Col>
                </Row>
                <Row>
                  <Col sm="1"><a href={this.state.domainFacebook} target="_blank"><img src='/images/picto_facebook.png'/></a></Col>
                  <Col sm="11" style={styles.textContact}>Par Facebook</Col>
                </Row>
                <p style={styles.normalTxt}>{this.state.domainPostalAddress}</p>
              </div>
              <div style={{marginTop : '25px', marginBottom : '15px'}}>
                <h2 style={styles.h2}>Caractéristiques</h2>
                <p style={styles.normalTxt}><strong>Cépages : </strong>{this.state.productCepages}</p>
                <p style={styles.normalTxt}><strong>Accord mets & vin : </strong>{this.state.productAccords}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md='6'>
              <h2 style={styles.h2}>Histoire du domaine</h2>
              <p style={styles.normalTxt}>{this.state.domainHistory}</p>
            </Col>
            <Col sm="12" md='6'>
              <iframe width="560" height="315" src= {urlYt} frameBorder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <h2 style={styles.h2}>Historique des transactions</h2>
              <Table style={styles.tableTxt}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Lieu</th>
                    <th>Vendeur</th>
                    <th>Acheteur</th>
                    <th>Statut transaction</th>
                  </tr>
                </thead>
                <tbody>
                  {productHistory}
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
    backgroundColor : 'white',
  },
  headerTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    marginBottom : '75px',
    marginTop : '10px',
    textAlign : 'right',
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
    width: '100vw',
    overflow: 'hidden'
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
    textAlign : 'center'
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
    justifyContent : 'center',
    alignItems : 'center'
  },
  spinnerStyle : {
    marginRight : '10px'
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    user : state.userData
}}
export default connect(
  mapStateToProps,
  null
)(Product);
