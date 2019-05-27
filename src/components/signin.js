import React, { Component } from 'react';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import '../style.css';

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
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          {' '}
          <Button className="btn-validate">Validez</Button>
        </Form>
      </div>
    </div>
    );
  }
};
