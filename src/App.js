import React, { Component } from 'react';
import { Row, Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Signin from './components/signin';
import Signup from './components/signup';
import Product from './components/product';
import CreateProduct from './components/createproduct';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/signup/" component={Signup} />
          <Route path="/product/" component={Product} />
          <Route path="/createproduct/" component={CreateProduct} />
        </Switch>
      </Router>
    )
  }
};

export default App;
