import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from './navbar';
import { Link } from "react-router-dom";
import '../style.css'

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      productDomaine : '',
      productCuvee : '',
      productDeskImg : '',
      productMobImg : '',
      productMillesime : '',
      productCepages : '',
      productAppellation : '',
      productRegion : '',
      productCountry : '',
      domainHistory : '',
      productAccords : '',
      domainPostalAddress : '',
      domainUrl : '',
      domainFacebook : '',
      domainEmail : '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSubmit() {
    var ctx = this
    fetch('http://10.2.1.57:3000/createproduct', {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `
     productDomaine=${this.state.productDomaine}
     &productCuvee=${this.state.productCuvee}
     &productDeskImg=${this.state.productDeskImg}
     &productMobImg=${this.state.productMobImg}
     &productMillesime=${this.state.productMillesime}
     &productCepages=${this.state.productCepages}
     &productAppellation=${this.state.productAppellation}
     &productRegion=${this.state.productRegion}
     &productCountry=${this.state.productCountry}
     &domainHistory=${this.state.domainHistory}
     &productAccords=${this.state.productAccords}
     &domainPostalAddress=${this.state.domainPostalAddress}
     &domainUrl=${this.state.domainUrl}
     &domainFacebook=${this.state.domainFacebook}
     &domainEmail=${this.state.domainEmail}
     `
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log('fetch data de sign up >>', data);
    })
    .catch(function(error) {
    console.log('There has been a problem with your fetch operation mec ! ' + error.message);
      throw error;
    });
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
          <Col sm="7">
            <h2 style={styles.h2}>Etape 1 : informations produit</h2>
            // ToDo >> add States & Error Managemeent
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
          <Col sm={{ size: 4, offset: 1 }} style={styles.qrcode}>
            <h2 style={styles.h2}>Etape 2 : authentification</h2>
            <img src='/images/qrcode.jpg'/>
            <Button style={styles.smallBtn}>Télécharger le QR code</Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 6 }}>
            <Button style={styles.lightBigBtn} onClick={this.toggle}>Annuler</Button>
            <Button className='blueBigBtnHover' style={styles.blueBigBtn} onClick={this.handleSubmit}><Link to='/product/' className='blueBtnLink'>Valider</Link></Button>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader style={styles.h2} toggle={this.toggle}>Validation de la vente</ModalHeader>
        <ModalBody>
          <Container>
            <Row style={styles.modalFormat}>
              <Col sm="4">
                <img style={styles.imageModal} src='/images/bouteille.png'/>
              </Col>
              <Col sm="8">
                <h4 style={styles.h4}>Chateau Beauregard 2014</h4>
                <p style={styles.normalTxt}><strong>ID Produit</strong><br />0x45fb56gt21av987atj89</p>
                <p style={styles.normalTxt}><strong>Vendeur</strong><br />Domaine Beauregard<br />73 Rue de Catusseau, 33500 Pomerol<br />contact@chateau-beauregard.com</p>
                <p style={styles.normalTxt}><strong>Date de la vente</strong><br />27/04/2019</p>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button style={styles.lightBigBtn} onClick={this.toggle}>Annuler</Button>
          <Button className='blueBigBtnHover' style={styles.blueBigBtn} onClick={this.toggle}>Valider</Button>
        </ModalFooter>
      </Modal>
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
    fontSize: '16px',
    paddingLeft : '40px',
    paddingRight : '40px',
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
  },
  imageModal : {
    width : '100%'
  },
  modalFormat : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  }
}
