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
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input style={styles.formInput} type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input style={styles.formInput} type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          <Button style={styles.btnValidate}><Link className="blueBtnLink" to='/createproduct/'>Validez</Link></Button>
          <p><Link className="signup-link" to='/signup/'>Vous n'avez pas encore de compte, crééz en un !</Link></p>
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
