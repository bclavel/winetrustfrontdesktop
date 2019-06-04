import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../style.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  };

  componentDidMount() {
    var ctx = this

    fetch(`http://10.2.1.7:3000/getproducts?userAddress=${this.props.user.adress0x}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(products){
      console.log('SIGNIN - DidMount data', products);
      products.map((product) => (
        ctx.props.handleProductsFromDB(
          product.ownerAddress,
          product.status,
          product.producerHash,
          product.creationDate,
          product.productAddress,
          product.domaine,
          product.cuvee,
          product.youtube,
          product.desktopImg,
          product.mobileImg,
          product.millesime,
          product.cepages,
          product.appellation,
          product.region,
          product.country,
          product.quality,
          product.history,
          product.accords,
          product.domainAddress,
          product.url,
          product.facebook,
          product.email)
      ))
    })
  }



  render() {

    return(
    <div className="homeDiv">
      <div>
        <img src="../images/WineTrust-V-logo-bordeaux.png" />
      </div>
      <div className="signinComp">
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input style={styles.formInput} type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input style={styles.formInput} type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          <Button style={styles.btnValidate}><Link className="blueBtnLink" to='/dashboard/'>Validez</Link></Button>
          <p className="signup-link"><Link className="signup-link" to='/signup/'>Vous n'avez pas encore de compte, crééz en un !</Link></p>
        </Form>
      </div>
    </div>
    )
  }
};

var styles = {
  homeDiv: {
    backgroundColor: '#711A1A',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    alignItems: 'center'
  },

  signupComp: {
    width: '100vw',
    marginTop: '100px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  btnValidate: {
    backgroundColor: '#22323F',
    marginTop: '35px',
    marginBottom: '10px'
  },

  formInput : {
    borderTop : '0px',
    borderLeft : '0px',
    borderRight : '0px',
    borderBottom : '1px solid',
    borderColor : '#999999',
    borderRadius : 0,
    paddingLeft: 0
  }

};

function mapDispatchToProps(dispatch) {
  console.log('SignIn - Dispatch >>', dispatch);
 return {
  handleProductsFromDB : function(
    ownerAddressEth,
    productStatus,
    producerHash,
    productCreationDate,
    productAddressEth,
    producerAddressEth,
    productDomaine,
    productCuvee,
    productYoutube,
    productDeskImg,
    productMobImg,
    productMillesime,
    productCepages,
    productAppellation,
    productRegion,
    productCountry,
    productQuality,
    domainHistory,
    productAccords,
    domainPostalAddress,
    domainUrl,
    domainFacebook,
    domainEmail,
  ) {
    dispatch( {
      type: 'getProductsFromDB',
      ownerAddress : ownerAddressEth,
      status : productStatus,
      producerHash : producerHash,
      creationDate : productCreationDate,
      productAddress : productAddressEth,
      domaine : productDomaine,
      cuvee : productCuvee,
      youtube : productYoutube,
      desktopImg : productDeskImg,
      mobileImg : productMobImg,
      millesime : productMillesime,
      cepages : productCepages,
      appellation : productAppellation,
      region : productRegion,
      country : productCountry,
      quality : productQuality,
      history : domainHistory,
      accords : productAccords,
      domainAddress : domainPostalAddress,
      url : domainUrl,
      facebook : domainFacebook,
      email : domainEmail
    })
  }
 }
}

export default connect(null, mapDispatchToProps)(Signin);
