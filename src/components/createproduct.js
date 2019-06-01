import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import NavBar from './navbar';
import { Link } from "react-router-dom";
import '../style.css'

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      ligne1 : false,
      formIsValid: false,
      formControls : {
        productDomaine : {
          value : '',
          valid: false,
          touched: false,
        },
        productCuvee : {
          value : '',
          valid: false,
          touched: false,
        },
        productYoutube : {
          value : '',
          valid: false,
          touched: false,
        },
        productDeskImg : {
          value : '',
          valid: false,
          touched: false,
        },
        productMobImg : {
          value : '',
          valid: false,
          touched: false,
        },
        productMillesime : {
          value : '',
          valid: false,
          touched: false,
        },
        productCepages : {
          value : '',
          valid: false,
          touched: false,
        },
        productAppellation : {
          value : '',
          valid: false,
          touched: false,
        },
        productRegion : {
          value : '',
          valid: false,
          touched: false,
        },
        productCountry : {
          value : '',
          valid: false,
          touched: false,
        },
        productQuality : {
          value : '',
          valid: false,
          touched: false,
        },
        domainHistory : {
          value : '',
          valid: false,
          touched: false,
        },
        productAccords : {
          value : '',
          valid: false,
          touched: false,
        },
        domainPostalAddress : {
          value : '',
          valid: false,
          touched: false,
        },
        domainUrl : {
          value : '',
          valid: false,
          touched: false,
        },
        domainFacebook : {
          value : '',
          valid: false,
          touched: false,
        },
        domainEmail : {
          value : '',
          valid: false,
          touched: false,
        },
      }
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      ligne1 : true
    }));
  }

  // Met à jour le state à chaque changement dans un input de formulaire
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
    console.log(this.state);
    fetch('http://10.2.1.19:3000/createproduct', {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `productStatus=${'en stock'}&productDomaine=${ctx.state.formControls.productDomaine.value}&productCuvee=${ctx.state.formControls.productCuvee.value}&productDeskImg=${ctx.state.formControls.productDeskImg.value}&productYoutube=${ctx.state.formControls.productYoutube.value}&productMobImg=${ctx.state.formControls.productMobImg.value}&productMillesime=${ctx.state.formControls.productMillesime.value}&productCepages=${ctx.state.formControls.productCepages.value}&productAppellation=${ctx.state.formControls.productAppellation.value}&productRegion=${ctx.state.formControls.productRegion.value}&productCountry=${ctx.state.formControls.productCountry.value}&productQuality=${ctx.state.formControls.productQuality.value}&domainHistory=${ctx.state.formControls.domainHistory.value}&productAccords=${ctx.state.formControls.productAccords.value}&domainPostalAddress=${ctx.state.formControls.domainPostalAddress.value}&domainUrl=${ctx.state.formControls.domainUrl.value}&domainFacebook=${ctx.state.formControls.domainFacebook.value}&domainEmail=${ctx.state.formControls.domainEmail.value}`
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
   // var spinner = <Spinner style={styles.spinnerStyle} size="sm" color="secondary" />
   // var check = <img style={styles.spinnerStyle} src='/images/picto_check.png'/>
   // var ligne1 = this.state.ligne1 ? {spinner} + <p style={styles.normalTxt}>Création de la transaction</p> : {check} + <p style={styles.normalTxt}>Création de la transaction</p>
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
            <Form>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productDomaine" value={this.state.formControls.productDomaine.value} placeholder='Domaine' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productCuvee" value={this.state.formControls.productCuvee.value} placeholder='Cuvée' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productMillesime" value={this.state.formControls.productMillesime.value} placeholder='Millésime' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productAppellation" value={this.state.formControls.productAppellation.value} placeholder='Appellation' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productQuality" value={this.state.formControls.productQuality.value} placeholder='Normes qualité' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productCepages" value={this.state.formControls.productCepages.value} placeholder='Cépages' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productRegion" value={this.state.formControls.productRegion.value} placeholder='Région' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productCountry" value={this.state.formControls.productCountry.value} placeholder='Pays' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="domainPostalAddress" value={this.state.formControls.domainPostalAddress.value} placeholder='Adresse postale' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="domainUrl" value={this.state.formControls.domainUrl.value} placeholder='Site web' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="domainEmail" value={this.state.formControls.domainEmail.value} placeholder='Adresse email de contact' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="domainFacebook" value={this.state.formControls.domainFacebook.value} placeholder='Page Facebook' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="textarea" name="domainHistory" value={this.state.formControls.domainHistory.value} placeholder='Histoire du domaine' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productAccords" value={this.state.formControls.productAccords.value} placeholder='Accords mets & vins' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input style={styles.formInput} type="text" name="productYoutube" value={this.state.formControls.productYoutube.value} placeholder='Vidéo youtube' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="productDesktopImg">Photo desktop</Label>
                <Input type="file" name="productDeskImg" id="productDesktopImg" value={this.state.formControls.productDeskImg.value} placeholder='Appellation' onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="productMobileImg">Photo mobile</Label>
                <Input type="file" name="productMobImg" id="productMobileImg" value={this.state.formControls.productMobImg.value} placeholder='Appellation' onChange={this.handleChange} />
              </FormGroup>
              <Button style={styles.lightBigBtn} onClick={this.toggle}>Annuler</Button>
              <Button className='blueBigBtnHover' style={styles.blueBigBtn} onClick={this.handleSubmit}><Link to='/product/' className='blueBtnLink'>Valider</Link></Button>
            </Form>
          </Col>
          <Col sm={{ size: 4, offset: 1 }} style={styles.qrcode}>
            <h2 style={styles.h2}>Etape 2 : authentification</h2>
            <img src='/images/qrcode.jpg'/>
            <Button style={styles.smallBtn}>Télécharger le QR code</Button>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader style={styles.h2} toggle={this.toggle}>Merci de patienter, traitement en cours</ModalHeader>
        <ModalBody>
          <Container>
            <Row style={styles.modalFormat}>
              <Col sm="12">
                <div style={styles.modalFormat}>
                  <Spinner style={styles.spinnerStyle} size="sm" color="secondary" /><p style={styles.normalTxt}>Création de la transaction</p>
                </div>
                <div style={styles.modalFormat}>
                  <Spinner style={styles.spinnerStyle} size="sm" color="secondary" /><p style={styles.normalTxt}>En attente de minage</p>
                </div>
                <div style={styles.modalFormat}>
                  <Spinner style={styles.spinnerStyle} size="sm" color="secondary" /><p style={styles.normalTxt}>Transaction minée sur le bloc 0x4ab76fa90blas43p15v</p>
                </div>
                <div style={styles.modalFormat}>
                  <Spinner style={styles.spinnerStyle} size="sm" color="secondary" /><p style={styles.normalTxt}>Synchronisation sur les noeuds du réseau</p>
                </div>
                <div style={styles.modalFormat}>
                  <Spinner style={styles.spinnerStyle} size="sm" color="secondary" /><p style={styles.normalTxt}>Succès !</p>
                </div>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button className='blueBigBtnHover' style={styles.blueBigBtn} onClick={this.toggle}>Fermer</Button>
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
    justifyContent : 'flex-start',
    alignItems : 'normal'
  },
  spinnerStyle : {
    marginRight : '10px'
  }
}
