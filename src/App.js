import React, { Component } from 'react';
import {
  Row,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';

import Signin from './components/signin';
import Signup from './components/signup';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div>
        <Signup/>
      </div>
    )
  }
};

export default App;
