import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <section>{this.props.children}</section>
        <Footer />
      </>
    );
  }
}

export default Layout;
