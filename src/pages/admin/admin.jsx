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
          <Route exact path="/list1">
            <Home />
          </Route>
          <Route path="/list2">
            <Product />
          </Route>
          <Route path="/list3">
            <Role />
          </Route>
          <Redirect to="/list1"></Redirect>
        </Switch>
      </Layout>
    );
  }
}

export default Admin;
