import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router"

import Layout from '../../components/Layout/layout'
import Home from '../home/home';
import Product from '../product/product'
import Role from '../role/role'

class Admin extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/production">
            <Product />
          </Route>
          <Route path="/role">
            <Role />
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Layout>
    );
  }
}

export default Admin;
