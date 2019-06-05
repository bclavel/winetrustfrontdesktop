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

    // fetch(`http://10.2.1.7:3000/getproducts?userAddress=${this.props.user.adress0x}`)
    fetch("http://10.2.1.19:3000/getproducts?userAddress=0x3902313C53062d1FDa5BE4ACb9DA1b18418659C7")
    .then(function(response) {
      return response.json()
    })
    .then(function(products){
      console.log('Products back from back', products);
      var productsFromDB = products.map(product => {
        return {
          ownerAddressEth : product.ownerAddressEth,
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
        }
      })
      console.log('SIGNIN - DidMount productsFromDB', productsFromDB);
      ctx.props.handleProductsFromDB(productsFromDB)
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
 return {
  handleProductsFromDB : function(products) {
    console.log("Signin - Products ToProps", products)
    dispatch({
      type: 'getProductsFromDB',
      products
    })
  }
 }
}

export default connect(null, mapDispatchToProps)(Signin);
