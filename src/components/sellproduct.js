import React from 'react';
import { Button, ButtonGroup, Container, Row, Col, Input, Form, FormGroup } from 'reactstrap';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

class VenteProduit extends React.Component {
  render() {
    return (
    <Container width ="80%">
        <Row>
            <Col sm="12" md={{size: 4, offset: 8}} style={styles.headerTxt}>Vous êtes : Domaine Beauregard (producteur)</Col>
        </Row>
        <Row>
          <Col sm="12">
            <h1 style={styles.h1}>Vendre un produit</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="2" style={styles.productImg}><img style={styles.bottleImg} src="/images/bouteille.png" alt="bouteille"></img></Col>
          <Col sm="5">
            <h2 style={styles.h2}>Chateau Beauregard 2014</h2>
            <p style={styles.normalTxt}><strong>ID produit : </strong>0x45fb56gt21av987</p>
            <p style={styles.normalTxt}><strong>Date de création : </strong>01/04/2019</p>
          </Col>
          <Col sm="5">
            <h2 style={styles.h2}>Sélectionner un distributeur</h2>
            <Form>
              <FormGroup>
                <Input style={styles.formInput} type="select" >
                  <option selected disabled>Mes distributeurs</option>
                  <option>Carrefour - Aix-en-Provence</option>
                  <option>Intermarché - Dinard</option>
                  <option>Caviste Nicolas - Bordeaux</option>
                </Input>
                <Button style={styles.smallBtnDistri}>Ajouter un distributeur</Button>
              </FormGroup>
              <Row>
                <Col sm={{size : 7, offset : 5}} style={styles.validBtn}>
                  <Button style={styles.lightBigBtn}><Link to='/dashboard/' className='lightBtnLink'>Annuler</Link></Button>
                  <Button style={styles.blueBigBtn}><Link to='/dashboard/' className='blueBtnLink'>Valider</Link></Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
    </Container>
    );
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
export default VenteProduit;
