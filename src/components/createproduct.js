import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Toast, ToastBody, ToastHeader, Alert  } from 'reactstrap';
import NavBar from './navbar';
import { Link } from "react-router-dom";
import '../style.css'
import factory from '../ethereum/factory'
import product from '../ethereum/product'
import web3 from '../ethereum/web3'
import { connect } from 'react-redux';
import backEndAddress from '../config';

class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      showSecuToast : false,
      formIsValid: false,
      errorOpen : false,
      errorMessage : '',
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
          selectedFile : null,
          valid: false,
          touched: false,
        },
        productMobImg : {
          selectedFile : null,
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

    // this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleselectedFile = event => {
    const name = event.target.name;
    const file = event.target.files[0];

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.selectedFile = file;
    updatedFormElement.touched = true;

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    })
  }

  async handleSubmit() {
    this.setState(prevState => ({
      showSecuToast: !prevState.showSecuToast,
    }));

    const accounts = await web3.eth.getAccounts();
    console.log('accounts >>', accounts);
    var userAddresseEth = accounts[0]
    console.log('accounts at 0 >>', userAddresseEth);

    var ctx = this
    fetch(`${backEndAddress}/createproduct`, {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `productStatus=${'en stock'}&productDomaine=${ctx.state.formControls.productDomaine.value}&productCuvee=${ctx.state.formControls.productCuvee.value}&productYoutube=${ctx.state.formControls.productYoutube.value}&productMillesime=${ctx.state.formControls.productMillesime.value}&productCepages=${ctx.state.formControls.productCepages.value}&productAppellation=${ctx.state.formControls.productAppellation.value}&productRegion=${ctx.state.formControls.productRegion.value}&productCountry=${ctx.state.formControls.productCountry.value}&productQuality=${ctx.state.formControls.productQuality.value}&domainHistory=${ctx.state.formControls.domainHistory.value}&productAccords=${ctx.state.formControls.productAccords.value}&domainPostalAddress=${ctx.state.formControls.domainPostalAddress.value}&domainUrl=${ctx.state.formControls.domainUrl.value}&domainFacebook=${ctx.state.formControls.domainFacebook.value}&domainEmail=${ctx.state.formControls.domainEmail.value}&producerAddressEth=${userAddresseEth}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(async function (data) {
      console.log('CREATE PRODUCT - fetch data >>', data);
      try {
        await factory.methods.createProduct(data.producerHash).send({
          from : accounts[0]
        })
      } catch(err) {
        ctx.setState({errorMessage : err.message, errorOpen : true})
      }

      ctx.setState(prevState => ({
        showSecuToast: !prevState.showSecuToast,
      }));

      var productList = await factory.methods.getDeployedProducts().call()
      var lastProductAddress = productList[productList.length-1]
      var lastProductContract = await product(lastProductAddress)
      var lastProductOwner = lastProductContract.methods.owner().call()
      lastProductOwner.then((value) => {
        console.log('Last product owner then value >>', value);
        // todo : vérif si l'addresseEth du user connecté est identique à celle du owner en BDD
        fetch(`${backEndAddress}/updateproduct?productId=${data._id}&ownerAddressEth=${value}&productAddressEth=${lastProductAddress}`);
      })

      const dataImg = new FormData();
      dataImg.append('productDeskImg', ctx.state.formControls.productDeskImg.selectedFile, data._id);
      dataImg.append('productMobImg', ctx.state.formControls.productMobImg.selectedFile, data._id);

      fetch(`${backEndAddress}/uploadpictures`, {
       method: 'POST',
       body : dataImg,
      })
      .then(function(response) {
        return response.json()
      })
      .then(function(product){
        console.log('CREATE PRODUCT - Data into handleNewProduct', product);
        ctx.props.handleNewProduct(
          product.ownerAddressEth,
          product.productStatus,
          product.producerHash,
          product.productCreationDate,
          product.productAddressEth,
          product.productDomaine,
          product.productCuvee,
          product.productYoutube,
          product.productDeskImg,
          product.productMobImg,
          product.productMillesime,
          product.productCepages,
          product.productAppellation,
          product.productRegion,
          product.productCountry,
          product.productQuality,
          product.domainHistory,
          product.productAccords,
          product.domainPostalAddress,
          product.domainUrl,
          product.domainFacebook,
          product.domainEmail)
      })


    })
    .catch(function(error) {
    console.log('There has been a problem with your fetch operation mec ! ' + error.message);
      throw error;
    });

  }

 render() {
  return (
    <div>
      <NavBar />
      <div style={styles.background}>
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
                    <Input type="file" name="productDeskImg" id="productDesktopImg" ref={(ref) => { this.uploadInput = ref; }} value={this.state.formControls.productDeskImg.value} onChange={this.handleselectedFile} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="productMobileImg">Photo mobile</Label>
                    <Input type="file" name="productMobImg" id="productMobileImg" value={this.state.formControls.productMobImg.value} onChange={this.handleselectedFile} />
                  </FormGroup>
                  <Row>
                    <Col sm="12">
                      <Toast style={{maxWidth : '650px', marginBottom : '15px'}} isOpen={this.state.showSecuToast}>
                        <ToastHeader icon={<Spinner size="sm" />}>
                          WineTrust sécurise vos données
                        </ToastHeader>
                        <ToastBody>
                          Merci de patienter, traitement en cours
                        </ToastBody>
                      </Toast>
                      <Alert isOpen={this.state.errorOpen} color="danger">{this.state.errorMessage}</Alert>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={{size : 7, offset : 5}} style={styles.validBtn}>
                      <Button style={styles.lightBigBtn}><Link to='/dashboard/' className='lightBtnLink'>Annuler</Link></Button>
                      <Button className='blueBigBtnHover' style={styles.blueBigBtn} onClick={this.handleSubmit}>Valider</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col sm={{ size: 4, offset: 1 }} style={styles.qrcode}>
                <h2 style={styles.h2}>Etape 2 : authentification</h2>
                <img src='/images/chart.png'/>
                <Button style={styles.smallBtn} onClick={this.toggle}>Télécharger le QR code</Button>
              </Col>
            </Row>
          </Container>
        </div>
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
  validBtn : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    marginBottom : '100px'
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

function mapDispatchToProps(dispatch) {
 return {
  handleNewProduct : function(ownerAddressEth, productStatus, producerHash, productCreationDate, productAddressEth, producerAddressEth, productDomaine, productCuvee, productYoutube, productDeskImg, productMobImg, productMillesime, productCepages, productAppellation, productRegion,productCountry, productQuality, domainHistory, productAccords, domainPostalAddress, domainUrl, domainFacebook, domainEmail) {
    dispatch({
      type: 'createProduct',
      ownerAddressEth,
      productStatus,
      producerHash,
      productCreationDate,
      productAddressEth,
      productDomaine,
      productCuvee,
      productYoutube,
      productDeskImg,
      productMobImg,
      productMillesime,
      productCepages,
      productAppellation,
      productRegion,
      productCountry,
      productQuality,
      domainHistory,
      productAccords,
      domainPostalAddress,
      domainUrl,
      domainFacebook,
      domainEmail,
    })
  }
 }
}

export default connect(null, mapDispatchToProps)(CreateProduct);
