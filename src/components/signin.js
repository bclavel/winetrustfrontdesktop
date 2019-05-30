import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../style.css';
import { Link } from "react-router-dom";

export default class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  };

  render() {

    return(
    <div className="homeDiv">
      <div className="logoSignin">
        <img src="../images/WineTrust-V-logo-bordeaux.png" />
      </div>
      <div className="signinComp">
        <Form >
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          <Button style={styles.btnValidate}><Link to='/createproduct/'>Validez</Link></Button>
          <p><Link to='/signup/'>Vous n'avez pas encore de compte, crééz en un !</Link></p>
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
};
