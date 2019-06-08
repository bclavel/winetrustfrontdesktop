import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';
import backEndAddress from '../config';
import web3 from '../ethereum/web3'
import product from '../ethereum/product'
import { connect } from 'react-redux';

class HistoriqueRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
        productAddressEth : this.props.productAddressEth,
        transactValidationDate: '',
        buyerPostalAddress: '',
        sellerName: '',
        buyerName: '',
        transactStatus: ''
      }
    };


 render() {
     return (
        <tr>
            <td>{this.props.index}</td>
            <td>{this.props.transactValidationDate}</td>
            <td>{this.props.buyerPostalAddress}</td>
            <td>{this.props.sellerName}</td>
            <td>{this.props.buyerName}</td>
            <td>{this.props.transactStatus}</td>
        </tr>
       );
  }
}

var styles = {
  blueSmallBtn : {
    backgroundColor : '#22323F',
    fontSize: '14px',
    paddingLeft : '5px',
    paddingRight : '5px',
    marginLeft : '10px',
    borderColor : '#22323F'
  },
  lightSmallBtn : {
    backgroundColor : '#E2DAD4',
    color : '#22323F',
    fontSize: '14px',
    paddingLeft : '5px',
    paddingRight : '5px',
    borderColor : '#E2DAD4'
  },
  modalFormat : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'normal'
  },
  normalTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
  },
  imageModal : {
    width : '100%'
  },
  blueBigBtn : {
    backgroundColor : '#22323F',
    fontSize: '18px',
    paddingLeft : '40px',
    paddingRight : '40px',
    marginLeft : '30px',
    borderColor : '#22323F'
  },
  lightBigBtn : {
    backgroundColor : '#E2DAD4',
    color : '#22323F',
    fontSize: '18px',
    paddingLeft : '40px',
    paddingRight : '40px',
    borderColor : '#E2DAD4'
  },
}


function mapStateToProps(state) {
  console.log('Dashboard : state products >>', state.products);
  console.log('Dashboard : state userData >>', state.userData);
 return {
   products: state.products,
   user : state.userData
 }
}

export default connect(mapStateToProps, null)(HistoriqueRow);
