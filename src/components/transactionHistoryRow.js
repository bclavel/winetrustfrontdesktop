import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
   function formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [day, month, year].join('/');
    }
     return (
        <tr>
            <td>{this.props.index}</td>
            <td>{formatDate(this.props.transactValidationDate)}</td>
            <td>{this.props.buyerPostalAddress}</td>
            <td>{this.props.sellerName}</td>
            <td>{this.props.buyerName}</td>
            <td>{this.props.transactStatus}</td>
        </tr>
       );
  }
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
