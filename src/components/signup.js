import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import web3 from '../ethereum/web3'
import backEndAddress from '../config';

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      modal: false,
      showSecuToast : false,
      formIsValid: false,
      errorOpen : false,
      errorMessage : '',
      formControls : {
        firstName : {
          value : '',
          valid: false,
          touched: false,
        },
        lastName : {
          value : '',
          valid: false,
          touched: false,
        },
        email : {
          value : '',
          valid: false,
          touched: false,
        },
        password : {
          value : '',
          valid: false,
          touched: false,
        },
        role : {
          value : '',
          valid: false,
          touched: false,
        },
        companyName : {
          value : '',
          valid: false,
          touched: false,
        },
        companyAddress : {
          value : '',
          valid: false,
          touched: false,
        },
      }
    };
     // this.toggle = this.toggle.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  userType = (event) => {
    this.setState({userType:event.target.value});
    console.log(this.state.userType)
  };

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
    const accounts = await web3.eth.getAccounts();
    console.log('accounts >>', accounts);
    var userAddresseEth = accounts[0]
    console.log('accounts at 0 >>', userAddresseEth);

    var ctx = this
    fetch(`${backEndAddress}/createuser`, {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `firstName=${ctx.state.formControls.firstName.value}&lastName=${ctx.state.formControls.lastName.value}&email=${ctx.state.formControls.email.value}&password=${ctx.state.formControls.password.value}&role=${ctx.state.formControls.role.value}&companyName=${ctx.state.formControls.companyName.value}&companyAddress=${ctx.state.formControls.companyAddress.value}&adress0x=${userAddresseEth}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(async function (data) {
      console.log('CREATE USER - fetching data >>', data);
      console.log('new user email - ', data.user.email);
      ctx.props.handleUserValid(data.user.email, data.user.password, data.user.adress0x, data.user.lastName, data.user.firstName, data.user.role, data.user.companyName, data.user.companyAddress)
      ctx.setState(prevState => ({
        showSecuToast: !prevState.showSecuToast,
      }));
      fetch(`${backEndAddress}/getproducts?userAddress=${data.user.adress0x}`)
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
            historiqueTransactions : product.historiqueTransactions,
          }
        })
        console.log('SIGNUP - DidMount productsFromDB', productsFromDB);
        ctx.props.handleProductsFromDB(productsFromDB)
      })
  })}

  render(){
    var display = 'block';
    if ( this.state.userType==="Consommateur" || this.state.userType==="Transporteur" || this.state.userType==="Vous êtes") {
      display = 'none'
    };

    return(
    <div className="homeDiv">
      <div>
        <img src="../../images/WineTrust-V-logo-bordeaux.png" alt=""/>
      </div>
      <div className="signupComp">
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" hidden>Prénom</Label>
            <Input style={styles.formInput} type="name" name="firstName" value={this.state.formControls.firstName.value} placeholder="Prénom" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" hidden>Nom</Label>
            <Input style={styles.formInput} type="name" name="lastName" value={this.state.formControls.lastName.value} placeholder="Nom" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input style={styles.formInput} type="email" name="email" value={this.state.formControls.email.value} placeholder="Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>Mot de passe</Label>
            <Input style={styles.formInput} type="password" name="password" value={this.state.formControls.password.value} placeholder="Mot de passe" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="typeUser" hidden>Vous êtes</Label>
            <Input style={styles.formInput} type="select" name="role" value={this.state.formControls.role.value} placeholder="Vous êtes" onChange={this.handleChange}>
              <option value="">Vous êtes</option>
              <option>Producteur</option>
              <option>Distributeur</option>
              <option>Consommateur</option>
              <option>Transporteur</option>
            </Input>
          </FormGroup>
          <FormGroup style={{display}}>
            <Label for="examplePassword" hidden>Nom de l'entreprise</Label>
            <Input style={styles.formInput} type="company" name="companyName" value={this.state.formControls.companyName.value} placeholder="Nom de l'entreprise" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup style={{display}}>
            <Label for="examplePassword" hidden>Adresse</Label>
            <Input style={styles.formInput} type="address" name="companyAddress" value={this.state.formControls.companyAddress.value} placeholder="Adresse" onChange={this.handleChange} />
          </FormGroup>
          <Button style={styles.btnValidate}  onClick={this.handleSubmit}><Link className="blueBtnLink" to='/dashboard/' >Créer votre compte</Link></Button>
          <p className="signup-link">Déjà inscrit ? <Link className="signup-link" to='/'>Cliquez ici pour vous connecter</Link></p>
        </Form>
      </div>
    </div>
    )}}


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
}

export default connect(null, mapDispatchToProps)(Signup);
