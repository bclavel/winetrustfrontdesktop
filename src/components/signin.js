import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../style.css';
import { Link } from "react-router-dom";
import web3 from '../ethereum/web3'
import { connect } from 'react-redux';
import backEndAddress from '../config';


class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      showSecuToast : false,
      formIsValid: false,
      errorOpen : false,
      errorMessage : '',
      formControls : {
        email : {
          value : '',
          valid: false,
          touched: false,
        },
        password : {
          value : '',
          valid: false,
          touched: false,
        }}
      }
      // this.toggle = this.toggle.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
// Met à jour le state à chaque changement dans un input de formulaire
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

async handleSubmit() {
  this.setState(prevState => ({
    showSecuToast: !prevState.showSecuToast,
  }));

  var ctx = this
  fetch(`${backEndAddress}/signin`, {
   method: 'POST',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: `email=${ctx.state.formControls.email.value}&password=${ctx.state.formControls.password.value}`
  })
  .then(function(response) {
    return response.json()
  })
  .then(async function (data) {
    console.log('SIGNING IN - fetching data >>', data);
    console.log( data.data.email);
    ctx.props.handleUserValid(data.data.email, data.data.password, data.data.adress0x, data.data.lastName, data.data.firstName, data.data.role, data.data.companyName, data.data.companyAddress)
    ctx.setState(prevState => ({
      showSecuToast: !prevState.showSecuToast,
    }));
    fetch(`${backEndAddress}/getproducts?userAddress=${data.data.adress0x}`)
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
          historiqueTransactions : product.historiqueTransactions
        }
      })
      console.log('SIGNIN - DidMount productsFromDB', productsFromDB);
      ctx.props.handleProductsFromDB(productsFromDB)
    })
})}

  render() {

    return(
    <div className="homeDiv">
      <div>
        <img src="../images/WineTrust-V-logo-bordeaux.png" alt=""/>
      </div>
      <div className="signinComp">
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input style={styles.formInput} type="email" name="email" value={this.state.formControls.email.value} placeholder="Email" onChange={this.handleChange}  placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input style={styles.formInput} type="password" name="password" value={this.state.formControls.password.value} placeholder="Mot de passe" onChange={this.handleChange} placeholder="Password" />
          </FormGroup>
          <Button style={styles.btnValidate}  onClick={this.handleSubmit}><Link className="blueBtnLink" to='/dashboard/'>Validez</Link></Button>
          <p className="signup-link"><Link className="signup-link" to='/signup/'>Vous n'avez pas encore de compte, crééz en un !</Link></p>
        </Form>
      </div>
    </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(email, password, adress0x, lastName, firstName, role, companyName, companyAddress) {
        dispatch({
          type: 'SIGNUP',
          email: email,
          password: password,
          adress0x: adress0x,
          lastName: lastName,
          firstName: firstName,
          role: role,
          companyName: companyName,
          companyAddress: companyAddress
        })
    },
    handleProductsFromDB : function(products) {
      console.log("Signin - Products ToProps", products)
      dispatch({
        type: 'getProductsFromDB',
        products
      })
    }
  }
}

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

export default connect(null, mapDispatchToProps)(Signin);
