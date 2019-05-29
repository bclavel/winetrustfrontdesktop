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



  render() {
    var display = null;
    if ( this.state.userType==="Producteur" || this.state.userType==="Distributeur") {
      display = 'none'
    };

    return(
    <div className="homeDiv">
      <div className="logoSignin">
        <img src="../../images/WineTrust-V-logo-bordeaux.png" />
      </div>
      <div className="signinComp">
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
          <Input type="select" placeholder="Vous êtes" onChange={this.state.userType}>
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
        <Button className="btn-validate"><Link to='/createproduct/'>Validez</Link></Button>
      </Form>
      </div>
    </div>
    );
  }
};
