import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import NavBar from './navbar';
import { Link } from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateTest : null,
      modal: false
    };

  this.toggle = this.toggle.bind(this);
}

toggle() {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
}

 render() {
   var productData = {
     title : 'test'
   }
  return (
    <div style={styles.background}>
       <Container>
       <NavBar />
        <Row>
          <Col sm="12" md={{ size: 4, offset: 8 }} style={styles.headerTxt}>Vous êtes : Domaine Beauregard (producteur)</Col>
        </Row>
        <Row>
          <Col sm="12" md='6' style={styles.productImg}><img src='/images/bouteille.png'/></Col>
          <Col sm="12" md='6'>
            <h1 style={styles.h1}>Chateau Beauregard 2014</h1>
            <h4 style={styles.h4}>Pomerol AOC</h4>
            <h4 style={styles.h4}>Domaine Beauregard</h4>
            <h4 style={styles.h4}>Région de Bordeaux, France</h4>
            <div style={{marginTop : '25px', marginBottom : '15px'}}>
              <Button style={styles.smallBtn} onClick={this.toggle}>Acheter 49,96€</Button>
              <p style={styles.smallTxt}>Vendu par Ovinia.com</p>
            </div>
            <div style={{marginTop : '25px', marginBottom : '15px'}}>
            <h2 style={styles.h2}>Découvrez le domaine Beauregard</h2>
              <a style={styles.textLink} href='https://www.chateau-beauregard.com/' target='_blank'>www.chateau-beauregard.com</a>
              <Row>
                <Col sm="1"><img src='/images/picto_email.png'/></Col>
                <Col sm="11" style={styles.textContact}>Par email</Col>
              </Row>
              <Row>
                <Col sm="1"><img src='/images/picto_facebook.png'/></Col>
                <Col sm="11" style={styles.textContact}>Par Facebook</Col>
              </Row>
            </div>
            <div style={{marginTop : '25px', marginBottom : '15px'}}>
              <h2 style={styles.h2}>Caractéristiques</h2>
              <p style={styles.normalTxt}><strong>Cépages</strong><br />Cépages 95% Pinot noir, 5% Merlot</p>
              <p style={styles.normalTxt}><strong>Accord mets & vin</strong><br />Viande rouge, Gibier</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md='6'>
            <h2 style={styles.h2}>Histoire du domaine</h2>
            <p style={styles.normalTxt}><em>Propriété des familles Moulin et Cathiard depuis 2014, le Château Beauregard renaît autour de sa fonction première : produire un grand vin de Pomerol au cœur d’un lieu historiquement dédié à la résidence de ses hôtes.</em></p>
            <p style={styles.normalTxt}>L’histoire de Beauregard remonte au XIIe siècle et aux Chevaliers Hospitaliers de Saint Jean de Jérusalem, à qui l’on doit la célèbre Croix des Templiers, emblème de Beauregard. Actifs dans la région de Pomerol et propriétaires d’un petit manoir ils cultivaient déjà ces terres. Sur ce site, la famille Beausoleil fait construire cinq siècles plus tard un premier édifice, qui fut remplacé à l’époque napoléonienne par le Château actuel : une magnifique chartreuse girondine, qui s’ouvre sur une terrasse avec deux pigeonniers surplombant des douves et un très beau parc, œuvre d’un élève de Victor Louis, architecte du Grand Théâtre de Bordeaux.</p>
          </Col>
          <Col sm="12" md='6'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jGPVRxth6Dk" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h2 style={styles.h2}>Historique des transactions</h2>
            <Table style={styles.tableTxt}>
              <thead>
                <tr>
                  <th>ID transaction</th>
                  <th>Date</th>
                  <th>Lieu</th>
                  <th>Vendeur</th>
                  <th>Acheteur</th>
                  <th>Statut transaction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>03948xjfe4417ty8ik63ee2</td>
                  <td>03/11/2018</td>
                  <td>Dinard, France</td>
                  <td>Domaine Beauregard</td>
                  <td>Intermarché Dinard</td>
                  <td>Validée</td>
                </tr>
              </tbody>
            </Table>
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
  tableTxt : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    textAlign : 'center'
  },
  textContact : {
    fontFamily: 'Roboto',
    fontSize: '14px',
    display : 'flex',
    alignItems : 'center',
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
