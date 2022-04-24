import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './layout.scss'
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <>
        <Row>
          <Col sm={2}>123</Col>
          <Col sm={10}>
            <Header />
            <Container>
              <Row>
                <Col>
                  <section>{this.props.children}</section>
                </Col>
              </Row>
            </Container>
            <Footer />
          </Col>
        </Row>
      </>
    );
  }
}

export default Layout;
