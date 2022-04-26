import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./layout.scss";

import Header from "./Header/header";
import Footer from "./Footer/footer";
import SideNav from "./sideNav/sideNav";

class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="content-left">
            <SideNav></SideNav>
          </Col>
          <Col className="content-right">
            <Header />
            <Container fluid>
              <Row>
                <Col>
                  <section className="content-main">
                    {this.props.children}
                  </section>
                </Col>
              </Row>
            </Container>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
