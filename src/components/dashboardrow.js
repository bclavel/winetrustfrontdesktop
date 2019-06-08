import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';
import backEndAddress from '../config';
import web3 from '../ethereum/web3'
import product from '../ethereum/product'
import { connect } from 'react-redux';

class DashboardRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      showSecuToast : false,
      errorOpen : false,
      productAddressEth : this.props.productAddressEth,
      errorMessage : '',
      buyerAddressEth : ''
      }
      this.toggle = this.toggle.bind(this);
      // this.jjmmaaaa = this.jjmmaaaa.bind(this);

    };

toggle() {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));

  console.log("this.props.productAddressEth", this.props.productAddressEth);
}

handleSubmit = async () => {
  this.setState(prevState => ({
    showSecuToast: !prevState.showSecuToast,
  }));

  const accounts = await web3.eth.getAccounts();

  var ctx = this
  fetch(`${backEndAddress}/productHash?productAddressEth=${this.state.productAddressEth}`)
  .then(function(response) {
    return response.json()
  })
  .then(async function (data) {
    console.log('DashboardRow Acheter Submit - fetching data >>', data);
    var productContract = await product(ctx.state.productAddressEth)
    var historiqueTransactions = data.product.historiqueTransactions
    var sellerAddress = data.product.historiqueTransactions[historiqueTransactions.length-1].sellerAddressEth
    var buyerAddress = data.product.historiqueTransactions[historiqueTransactions.length-1].buyerAddressEth
    try {
      await productContract.methods.createTransact(data.productHash, sellerAddress).send({
        from : accounts[0]
      })
    } catch(err) {
      ctx.setState({errorMessage : err.message, errorOpen : true})
    }
    ctx.setState(prevState => ({
      showSecuToast: !prevState.showSecuToast,
    }));

    // var transactID = data.product.historiqueTransactions[historiqueTransactions.length-1]._id
    var transactCount = await productContract.methods.getTransactCount().call()
    var transactions = await Promise.all(
      Array(parseInt(transactCount)).fill().map((element, i) => {
        return productContract.methods.transactions(i).call()
      })
    )
    console.log('transactions >>', transactions);
    console.log('transactCount >>', transactCount);

    fetch(`${backEndAddress}/validtransact`, {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `productAddressEth=${ctx.state.productAddressEth}&transactCount=${transactCount}&transactProductHash=${data.productHash}&buyerAddress=${buyerAddress}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log('Valid transact - fetch data >>', data);
      ctx.setState(prevState => ({modal: !prevState.modal}));
      fetch(`${backEndAddress}/getproducts?userAddress=${ctx.props.user.adress0x}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(products){
        console.log('Products back from back', products);
        var productsFromDB = products.map(product => {
          return {
            ownerAddressEth : product.ownerAddressEth,
            lastBuyerAddressEth : product.lastBuyerAddressEth,
            productStatus : product.productStatus,
            producerHash : product.producerHash,
            productCreationDate : product.productCreationDate,
            productAddressEth : product.productAddressEth,
            productDomaine : product.productDomaine,
            productCuvee : product.productCuvee,
            productYoutube : product.productYoutube,
            productDeskImg : product.productDeskImg,
            productMobImg : product.productMobImg,
            productMillesime : product.productMillesime,
            productCepages : product.productCepages,
            productAppellation : product.productAppellation,
            productRegion : product.productRegion,
            productCountry : product.productCountry,
            productQuality : product.productQuality,
            domainHistory : product.domainHistory,
            productAccords : product.productAccords,
            domainPostalAddress : product.domainPostalAddress,
            domainUrl : product.domainUrl,
            domainFacebook : product.domainFacebook,
            domainEmail : product.domainEmail,
            historiqueTransactions : product.historiqueTransactions,
          }
        })
        console.log('DashboardRow - productsFromDB', productsFromDB);
        ctx.props.handleProductsFromDB(productsFromDB)
        ctx.props.handleStateToProps();
      })
    })
  })
}



 render() {
   var actionBtn1
   var actionBtn2
   if (this.props.productStatus == 'en stock' && this.props.ownerAddressEth == this.props.user.adress0x) {
     actionBtn1 = <Button style={styles.lightSmallBtn}><Link to={`/product/${this.props.productAddressEth}`} className='lightBtnLink'>Détails</Link></Button>
     actionBtn2 = <Button style={styles.blueSmallBtn}><Link to={`/sellproduct/${this.props.productAddressEth}`} className='blueBtnLink'>Vendre</Link></Button>
   } else if (this.props.productStatus == 'transaction en cours' && this.props.ownerAddressEth == this.props.user.adress0x) {
     actionBtn1 = <Button style={styles.lightSmallBtn}><Link to={`/product/${this.props.productAddressEth}`} className='lightBtnLink'>Détails</Link></Button>
   } else {
     actionBtn1 = <Button style={styles.lightSmallBtn}><Link to={`/product/${this.props.productAddressEth}`} className='lightBtnLink'>Détails</Link></Button>
     actionBtn2 = <Button style={styles.blueSmallBtn} onClick={this.toggle}>Acheter</Button>
   }

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
               <td>{this.props.productAddressEth.substring(0, 8)}[...]{this.props.productAddressEth.substring(11, 20)}</td>
               <td>{this.props.productStatus}</td>
               <td>{this.props.productName}</td>
               <td>{this.props.productAppellation}</td>
               <td>{formatDate(this.props.productCreationDate)}</td>
               <td>
                 <div style={{display : 'flex'}}>
                  {actionBtn1}
                  {actionBtn2}
                 </div>
               </td>
               <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                 <ModalHeader style={styles.h2} toggle={this.toggle}>Validation de la vente</ModalHeader>
                 <ModalBody>
                   <Container>
                     <Row style={styles.modalFormat}>
                       <Col sm="4">
                         <img style={styles.imageModal} src={this.props.productDeskImg}/>
                       </Col>
                       <Col sm="8">
                         <h4 style={styles.h4}>{this.props.productName}</h4>
                         <p style={styles.normalTxt}><strong>ID Produit</strong><br />{this.props.productAddressEth}</p>
                         <p style={styles.normalTxt}><strong>Vendeur</strong><br />{this.props.productDomaine}<br />{this.props.domainPostalAddress}<br />{this.props.domainEmail}</p>
                         <p style={styles.normalTxt}><strong>Date de la vente</strong><br />{this.props.transactCreationDate}</p>
                         <Toast style={{maxWidth : '350px', marginBottom : '15px'}} isOpen={this.state.showSecuToast}>
                           <ToastHeader style={{backgroundColor : '#711A1A', color : '#FFF'}} icon={<Spinner size="sm" />}>
                             WineTrust sécurise vos données
                           </ToastHeader>
                           <ToastBody>
                             Merci de patienter, traitement en cours
                           </ToastBody>
                         </Toast>
                         <Alert isOpen={this.state.errorOpen} color="danger">{this.state.errorMessage}</Alert>
                       </Col>
                     </Row>
                   </Container>
                 </ModalBody>
                 <ModalFooter>
                   <Button style={styles.lightBigBtn} onClick={this.toggle}>Annuler</Button>
                   <Button className='blueBigBtnHover' style={styles.blueBigBtn} onClick={this.handleSubmit}>Valider</Button>
                 </ModalFooter>
               </Modal>
             </tr>
       );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleProductsFromDB : function(products) {
      dispatch({
        type: 'updateProducts',
        products
      })
    }
  }
}

function mapStateToProps(state) {
  console.log('DashboardRow : state products >>', state.products);
  console.log('DashboardRow : state userData >>', state.userData);
 return {
   products: state.products,
   user : state.userData
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRow);
