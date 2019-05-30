import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      userType: "Vous êtes"
    }
  };

  userType = (event) => {
    this.setState({userType:event.target.value});
    console.log(this.state.userType)
  };

  render() {
    var display = 'block';
    if ( this.state.userType==="Consommateur" || this.state.userType==="Transporteur" || this.state.userType==="Vous êtes") {
      display = 'none'
    };

    return(
    <div className="homeDiv">
      <div className="logoSignup">
        <img src="../../images/WineTrust-V-logo-bordeaux.png" />
      </div>
      <div className="signupComp">
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" hidden>Votre Nom</Label>
            <Input style={styles.formInput} type="name" name="name" id="" placeholder="Votre Nom" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input style={styles.formInput} type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>Mot de passe</Label>
            <Input style={styles.formInput} type="password" name="password" id="examplePassword" placeholder="Mot de passe" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleConfpassword" hidden>Confirmez mot de passe</Label>
            <Input style={styles.formInput} type="password" name="confpassword" id="exampleConfpassword" placeholder="Confirmez mot de passe" />
          </FormGroup>
          <FormGroup>
            <Label for="typeUser" hidden>Vous êtes</Label>
            <Input style={styles.formInput} type="select" placeholder="Vous êtes" onChange={this.userType}>
              <option value="">Vous êtes</option>
              <option>Producteur</option>
              <option>Distributeur</option>
              <option>Consommateur</option>
              <option>Transporteur</option>
            </Input>
          </FormGroup>
          <FormGroup style={{display}}>
            <Label for="examplePassword" hidden>Nom de l'entreprise</Label>
            <Input style={styles.formInput} type="company" name="company" id="company" placeholder="Nom de l'entreprise" />
          </FormGroup>
          <FormGroup style={{display}}>
            <Label for="examplePassword" hidden>Adresse</Label>
            <Input style={styles.formInput} type="address" name="address" id="address" placeholder="Adresse" />
          </FormGroup>
          <Button style={styles.btnValidate}><Link className="blueBtnLink" to='/createproduct/'>Créer votre compte</Link></Button>
        <p>Déjà inscrit ? <Link className="signup-link" to='/signup/'>Cliquez ici pour vous connecter</Link></p>
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

  // style on "validate" button is put in the jsx because the color on the button cannot be stylized via the css file
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
