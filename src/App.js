import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import products from './reducers/product.reducer';
import userData from './reducers/users.reducer';

import Signin from './components/signin';
import Signup from './components/signup';
import Product from './components/product';
import CreateProduct from './components/createproduct';
import Dashboard from './components/dashboard';
import SellProduct from './components/sellproduct';

import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({products, userData}));

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/signup/" component={Signup} />
            <Route path="/product/:productAddress" component={Product} />
            <Route path="/createproduct/" component={CreateProduct} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/sellproduct/:productAddress" component={SellProduct} />
          </Switch>
        </Router>
      </Provider>
    )
  }
};

export default App;
