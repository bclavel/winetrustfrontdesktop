import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';



export default class DashboardRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateTest : null,
      modal: false,
      productsData : {
        ProductId : '',
        status : '',
        name : '',
        appellation : '',
        creationDate : '',
      }
    };
}

 render() {
  return (
        <tr>
          <td>{this.props.productAddressEth}</td>
          <td>{this.props.productStatus}</td>
          <td>{this.props.productName}</td>
          <td>{this.props.productAppellation}</td>
          <td>{this.props.productCreationDate}</td>
          <td>
            <div>
                <Button style={styles.lightSmallBtn}><Link to={`/product/${this.props.productAddressEth}`} className='lightBtnLink'>Détails</Link></Button>
              <Button style={styles.blueSmallBtn}><Link to={`/sellproduct/${this.props.productAddressEth}`} className='blueBtnLink'>Vendre</Link></Button>
            </div>
          </td>
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
}
