import React, { Component } from "react";
import { Form, Input, Button } from 'antd';

import "./login.scss";

class Login extends Component {

  handleSubmit = () => {
    console.log('trigger handleSubmit');
  }
  render() {
    return (
      <div className="login-content">
        <h2 className="font-size-1">用戶登錄</h2>
        {/* <div className="form-content"> */}
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        {/* </div> */}
      </div>
    );
  }
}

export default Login;
