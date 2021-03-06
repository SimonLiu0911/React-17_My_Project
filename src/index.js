import React from "react";
import ReactDOM from "react-dom";
import Layout from './components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import './styles/main.scss';

ReactDOM.render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById("root")
);
