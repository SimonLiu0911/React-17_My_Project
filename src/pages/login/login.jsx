import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./login.scss";

class Login extends Component {
  handleSubmit = () => {
    console.log("trigger handleSubmit");
  };
  render() {
    return (
      <div className="login-content">
        <h2 className="font-size-1 login-title">用戶登錄</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="login-form-btn" variant="primary" type="button">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
