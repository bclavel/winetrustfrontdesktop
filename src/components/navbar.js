import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <div style={{backgroundColor : 'red'}}>
      <Container>
          <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
    </Container>
    </div>
    );
  }
}
