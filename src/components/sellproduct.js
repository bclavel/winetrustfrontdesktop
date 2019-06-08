import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Row, Col, Input, Form, FormGroup } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import NavBar from './navbar';
import { connect } from 'react-redux';
import backEndAddress from '../config';


class SellProduct extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      formIsValid: false,
      errorOpen : false,
      errorMessage : '',
      productAddress : props.match.params.productAddress,
      productName : '',
      productCreationDate : '',
      productDeskImg : '',
      toDashboard : false,
      formControls : {
        distributeur : {
          value : '',
          valid: false,
          touched: false,
        },
      }
    };
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    var productList = this.props.products
    for (var i = 0; i < productList.length; i++) {
      if (this.state.productAddress == productList[i].productAddressEth) {
          this.setState({
          productName : productList[i].productCuvee + ' ' + productList[i].productMillesime,
          productCreationDate : productList[i].productCreationDate,
          productDeskImg : productList[i].productDeskImg
        })
      }
    }
  }

  handleChange = event => {

    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    // updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    // for (let inputIdentifier in updatedControls) {
    //   formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    // }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }

  handleSubmit() {
    var ctx = this
    fetch(`${backEndAddress}/createtransact`, {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `sellerAddressEth=${this.props.user.adress0x}&sellerName=${this.props.user.companyName}&buyerName=${this.state.formControls.distributeur.value}&productAddressEth=${this.state.productAddress}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(async function (data) {
      console.log('SELL PRODUCT - fetching data >>', data);
      fetch(`${backEndAddress}/getproducts?userAddress=${ctx.props.user.adress0x}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(products){
        console.log('Products back from back', products);
        var productsFromDB = products.map(product => {
          return {
            ownerAddressEth : product.ownerAddressEth,
            lastBuyerAddressEth : product.lastBuyerAddressEth,
            lastTransactCreationDate : product.lastTransactCreationDate,
            productStatus : product.productStatus,
            producerHash : product.producerHash,
            productCreationDate : product.productCreationDate,
            productAddressEth : product.productAddressEth,
            productDomaine : product.productDomaine,
            productCuvee : product.productCuvee,
            productYoutube : product.productYoutube,
            productDeskImg : product.productDeskImg,
            productMobImg : product.productMobImg,
            productMillesime : product.productMillesime,
            productCepages : product.productCepages,
            productAppellation : product.productAppellation,
            productRegion : product.productRegion,
            productCountry : product.productCountry,
            productQuality : product.productQuality,
            domainHistory : product.domainHistory,
            productAccords : product.productAccords,
            domainPostalAddress : product.domainPostalAddress,
            domainUrl : product.domainUrl,
            domainFacebook : product.domainFacebook,
            domainEmail : product.domainEmail,
            historiqueTransactions : product.historiqueTransactions,
          }
        })
        console.log('DashboardRow - productsFromDB', productsFromDB);
        ctx.props.handleProductsFromDB(productsFromDB)
        ctx.setState({toDashboard : true})
      })
    })

  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to='/dashboard/' />
    }
    function formatDate(date) {
       var d = new Date(date),
           month = '' + (d.getMonth() + 1),
           day = '' + d.getDate(),
           year = d.getFullYear();

       if (month.length < 2) month = '0' + month;
       if (day.length < 2) day = '0' + day;

       return [day, month, year].join('/');
     }
    return (
    <div>
      <NavBar />
      <div style={styles.background}>
        <Container>
            <Row>
                <Col sm="12" md={{size: 4, offset: 8}} style={styles.headerTxt}>Vous êtes : {this.props.user.companyName} ({this.props.user.role})</Col>
            </Row>
            <Row>
              <Col sm="12">
                <h1 style={styles.h1}>Vendre un produit</h1>
              </Col>
            </Row>
            <Row>
              <Col sm="2" style={styles.productImg}><img style={styles.bottleImg} src={this.state.productDeskImg} alt="bouteille"></img></Col>
              <Col sm="5">
                <h2 style={styles.h2}>{this.state.productName}</h2>
                <p style={styles.normalTxt}><strong>ID produit : </strong>{this.state.productAddress}</p>
                <p style={styles.normalTxt}><strong>Date de création : </strong>{formatDate(this.state.productCreationDate)}</p>
              </Col>
              <Col sm="5">
                <h2 style={styles.h2}>Sélectionner un distributeur</h2>
                <Form>
                  <FormGroup>
                    <Input style={styles.formInput} type="select" name="distributeur" value={this.state.formControls.distributeur.value} onChange={this.handleChange}>
                      <option defaultValue disabled>Mes distributeurs</option>
                      <option>Carrefour</option>
                      <option>Intermarché</option>
                      <option>Nicolas</option>
                      <option>PapierCorp</option>
                    </Input>
                    <Button style={styles.smallBtnDistri}>Ajouter un distributeur</Button>
                  </FormGroup>
                  <Row>
                    <Col sm={{size : 7, offset : 5}} style={styles.validBtn}>
                      <Button style={styles.lightBigBtn}><Link to='/dashboard/' className='lightBtnLink'>Annuler</Link></Button>
                      <Button style={styles.blueBigBtn} onClick={this.handleSubmit}>Valider</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
        </Container>
      </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleProductsFromDB : function(products) {
      dispatch({
        type: 'updateProducts',
        products
      })
    }
  }
}

function mapStateToProps(state) {
  console.log('SellProduct : state products >>', state.products);
  console.log('SellProduct : state userData >>', state.userData);
 return {
   products: state.products,
   user : state.userData
 }
}

var styles = {
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
      marginBottom : '60px'
    },
    td : {
      fontFamily: 'Roboto',
      fontSize: '18px',
    },
    formInput : {
      borderTop : '0px',
      borderLeft : '0px',
      borderRight : '0px',
      borderBottom : '1px solid',
      borderColor : '#999999',
      borderRadius : 0,
      paddingLeft: 0
    },
    h2 : {
      fontFamily: 'Roboto',
      fontSize: '24px',
      textAlign: 'left'
    },
    h5 : {
        fontFamily: 'Roboto',
        fontSize: '18px',
      },
    productImg : {
      display : 'flex',
      alignItems : 'center',
      flexDirection: 'column',
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
    smallBtnDistri : {
      backgroundColor : '#22323F',
      fontSize: '16px',
      paddingLeft : '40px',
      paddingRight : '40px',
      marginTop: '20px',
      marginBottom : '100px'
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
    textContact : {
      fontFamily: 'Roboto',
      fontSize: '14px',
      display : 'flex',
      alignItems : 'center',
    },
    bottleImg : {
      width : '100%'
    },
    validBtn : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'flex-end',
      marginBottom : '100px'
    },
  }

export default connect(mapStateToProps, mapDispatchToProps)(SellProduct);
