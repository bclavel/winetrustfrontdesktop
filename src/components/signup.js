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
    <div style={styles.homeDiv}>
      <div className="logoSignin">
        <img src="../../images/WineTrust-V-logo-bordeaux.png" />
      </div>
      <div style={styles.signupComp}>
      <Form >
        <FormGroup>
          <Label for="exampleEmail" hidden>Votre Nom</Label>
          <Input type="name" name="name" id="" placeholder="Votre Nom" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>Mot de passe</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Mot de passe" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleConfpassword" hidden>Confirmez mot de passe</Label>
          <Input type="password" name="confpassword" id="exampleConfpassword" placeholder="Confirmez mot de passe" />
        </FormGroup>
        <FormGroup>
          <Label for="typeUser" hidden>Vous êtes</Label>
          <Input type="select" placeholder="Vous êtes" onChange={this.userType}>
            <option value="">Vous êtes</option>
            <option>Producteur</option>
            <option>Distributeur</option>
            <option>Consommateur</option>
            <option>Transporteur</option>
          </Input>
        </FormGroup>
        <FormGroup style={{display}}>
          <Label for="examplePassword" hidden>Nom de l'entreprise</Label>
          <Input type="company" name="company" id="company" placeholder="Nom de l'entreprise" />
        </FormGroup>
        <FormGroup style={{display}}>
          <Label for="examplePassword" hidden>Adresse</Label>
          <Input type="address" name="address" id="address" placeholder="Adresse" />
        </FormGroup>
        <Button style={styles.btnValidate}><Link to='/createproduct/'>Validez</Link></Button>
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
    backgroundColor: '#22323F'
  }
}
