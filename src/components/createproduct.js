import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from './navbar';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateTest : null,
    };
  }

 render() {
   var productData = {
     title : 'test'
   }
  return (
    <div style={styles.background}>
      <NavBar />
       <Container>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 8 }} style={styles.headerTxt}>Vous êtes : Domaine Beauregard (producteur)</Col>
        </Row>
        <Row>
          <Col sm="12">
            <h1 style={styles.h1}>Enregistrer un nouveau produit</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md='6'>
            <h2 style={styles.h2}>Etape 1 : informations produit</h2>
            <Form>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="domaine" placeholder='Domaine' />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="cuvee" placeholder='Cuvée' />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="millesime" placeholder='Millésime' />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="appellation" placeholder='Appellation' />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="qualite" placeholder='Normes qualité' />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="cepages" placeholder='Cépages'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="region" placeholder='Région'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="pays" placeholder='Pays'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="adresse" placeholder='Adresse postale'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="website" placeholder='Site web'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="email" placeholder='Adresse email de contact'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="facebook" placeholder='Page Facebook'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="textarea" name="histoire" placeholder='Histoire du domaine'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="accords" placeholder='Accords mets & vins'/>
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="youtube" placeholder='Vidéo youtube'/>
              </FormGroup>
              <FormGroup>
                <Label for="productDesktopImg">Photo desktop</Label>
                <Input type="file" name="desktopImg" id="productDesktopImg" placeholder='Appellation'/>
              </FormGroup>
              <FormGroup>
                <Label for="productMobileImg">Photo mobile</Label>
                <Input type="file" name="mobileImg" id="productMobileImg" placeholder='Appellation'/>
              </FormGroup>
            </Form>
          </Col>
          <Col sm="12" md='6' style={styles.qrcode}>
            <h2 style={styles.h2}>Etape 2 : authentification</h2>
            <img src='/images/qrcode.jpg'/>
            <Button style={styles.smallBtn}>Télécharger le QR code</Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 6 }}>
            <Button style={styles.lightBigBtn}>Annuler</Button>
            <Button style={styles.blueBigBtn}>Valider</Button>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

var styles = {
  background : {
    backgroundColor : 'white',
  },
  headerTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    marginBottom : '75px',
  },
  h1 : {
    fontFamily: 'Roboto',
    fontSize: '36px',
    marginBottom : '60px'
  },
  h4 : {
    fontFamily: 'Roboto',
    fontSize: '18px',
  },
  h2 : {
    fontFamily: 'Roboto',
    fontSize: '24px',
  },
  productImg : {
    display : 'flex',
    alignItems : 'center',
    flexDirection: 'column',
  },
  smallBtn : {
    backgroundColor : '#22323F',
    fontSize: '18px',
    paddingLeft : '40px',
    paddingRight : '40px',
  },
  blueBigBtn : {
    backgroundColor : '#22323F',
    fontSize: '20px',
    paddingLeft : '40px',
    paddingRight : '40px',
    marginLeft : '30px'
  },
  lightBigBtn : {
    backgroundColor : '#E2DAD4',
    color : '#22323F',
    fontSize: '20px',
    paddingLeft : '40px',
    paddingRight : '40px',
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
  qrcode : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'flex-start'
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
}
