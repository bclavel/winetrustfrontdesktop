import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Container, Row, Col, Input, Form, FormGroup } from 'reactstrap';
import { Link } from "react-router-dom";
import NavBar from './navbar';
import { connect } from 'react-redux';
import backEndAddress from '../config';


class VenteProduit extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      formIsValid: false,
      errorOpen : false,
      errorMessage : '',
      productAddress : props.match.params.productAddress,
      productName : '',
      productCreationDate : '',
      formControls : {
        distributeur : {
          value : '',
          valid: false,
          touched: false,
        },
      }
    };
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillMount() {
    var productList = this.props.products
    for (var i = 0; i < productList.length; i++) {
      if (this.state.productAddress == productList[i].productAddressEth) {
          this.setState({
          productName : productList[i].productCuvee + ' ' + productList[i].productMillesime,
          productCreationDate : productList[i].productCreationDate
        })
      }
    }
  }


  handleChange = event => {

    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    // updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    // for (let inputIdentifier in updatedControls) {
    //   formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    // }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }

  handleSubmit() {

    var ctx = this
    fetch(`${backEndAddress}/createtransact`, {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `sellerAddressEth=${this.props.user.adress0x}&sellerName=${this.props.user.companyName}&sellerPostalAddress=${this.props.user.companyAddress}&buyerName=${this.state.formControls.distributeur.value}&productAddressEth=${this.state.productAddress}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(async function (data) {
      console.log('SELL PRODUCT - fetching data >>', data);
        // Todo > envoyer les données des transactions dans le reducer
    })

  }

  render() {


    return (
    <div>
      <NavBar />
      <div style={styles.background}>
        <Container>
            <Row>
                <Col sm="12" md={{size: 4, offset: 8}} style={styles.headerTxt}>Vous êtes : {this.props.user.companyName} ({this.props.user.role})</Col>
            </Row>
            <Row>
              <Col sm="12">
                <h1 style={styles.h1}>Vendre un produit</h1>
              </Col>
            </Row>
            <Row>
              <Col sm="2" style={styles.productImg}><img style={styles.bottleImg} src="/images/bouteille.png" alt="bouteille"></img></Col>
              <Col sm="5">
                <h2 style={styles.h2}>{this.state.productName}</h2>
                <p style={styles.normalTxt}><strong>ID produit : </strong>{this.state.productAddress}</p>
                <p style={styles.normalTxt}><strong>Date de création : </strong>{this.state.productCreationDate}</p>
              </Col>
              <Col sm="5">
                <h2 style={styles.h2}>Sélectionner un distributeur</h2>
                <Form>
                  <FormGroup>
                    <Input style={styles.formInput} type="select" name="distributeur" value={this.state.formControls.distributeur.value} onChange={this.handleChange}>
                      <option selected disabled>Mes distributeurs</option>
                      <option>Carrefour</option>
                      <option>Intermarché</option>
                      <option>Nicolas</option>
                    </Input>
                    <Button style={styles.smallBtnDistri}>Ajouter un distributeur</Button>
                  </FormGroup>
                  <Row>
                    <Col sm={{size : 7, offset : 5}} style={styles.validBtn}>
                      <Button style={styles.lightBigBtn}><Link to='/dashboard/' className='lightBtnLink'>Annuler</Link></Button>
                      <Button style={styles.blueBigBtn} onClick={this.handleSubmit}><Link to='/dashboard/' className='blueBtnLink'>Valider</Link></Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
        </Container>
      </div>
    </div>
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

var styles = {
    headerTxt : {
      fontFamily: 'Roboto',
      fontSize: '14px',
      marginBottom : '25px',
    },
    h1 : {
      fontFamily: 'Roboto',
      fontSize: '36px',
      marginBottom : '60px'
    },
    td : {
      fontFamily: 'Roboto',
      fontSize: '18px',
    },
    formInput : {
      borderTop : '0px',
      borderLeft : '0px',
      borderRight : '0px',
      borderBottom : '1px solid',
      borderColor : '#999999',
      borderRadius : 0,
      paddingLeft: 0
    },
    h2 : {
      fontFamily: 'Roboto',
      fontSize: '24px',
      textAlign: 'left'
    },
    h5 : {
        fontFamily: 'Roboto',
        fontSize: '18px',
      },
    productImg : {
      display : 'flex',
      alignItems : 'center',
      flexDirection: 'column',
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
    smallBtnDistri : {
      backgroundColor : '#22323F',
      fontSize: '16px',
      paddingLeft : '40px',
      paddingRight : '40px',
      marginTop: '20px',
      marginBottom : '100px'
    },
    smallTxt : {
      fontFamily: 'Roboto',
      fontSize: '12px',
    },
    textLink : {
      fontFamily: 'Roboto',
      fontSize: '14px',
      color : '#711A1A',
      textDecoration : 'underline'
    },
    normalTxt : {
      fontFamily: 'Roboto',
      fontSize: '14px',
    },
    textContact : {
      fontFamily: 'Roboto',
      fontSize: '14px',
      display : 'flex',
      alignItems : 'center',
    },
    bottleImg : {
      width : '100%'
    },
    validBtn : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'flex-end',
      marginBottom : '100px'
    },
  }

export default connect(mapStateToProps, null)(VenteProduit);
