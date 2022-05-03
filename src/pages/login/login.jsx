import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { reqLogin } from "../../api";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoging, setLoging] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const handleSubmit = async () => {
    setLoging(true);
    try {
      const response = await reqLogin(email, password);
      const { success, token } = response.data;
      if (success) {
        sessionStorage.setItem("token", token);
        // props.history.replace('/')
      }
      console.log(1, "try");
      setLoging(false);
    } catch ({ response }) {
      console.log(2, "catch");
      const { errors } = response.data;
      const { email, password } = errors;
      setLoging(false);
      setEmailErrorMsg(email[0]);
      setPasswordErrorMsg(password[0]);
    }
  };

  useEffect(() => {
    setEmailErrorMsg("");
  }, [email]);

  useEffect(() => {
    setPasswordErrorMsg("");
  }, [password]);

  return (
    <div className="login-content">
      <h2 className="font-size-1 login-title">用戶登錄</h2>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error-msg font-size-7">{emailErrorMsg}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error-msg font-size-7">{passwordErrorMsg}</span>
        </Form.Group>
        <Button
          className="login-form-btn"
          variant="primary"
          type="button"
          onClick={handleSubmit}
          disabled={!email || !password}
        >
          {isLoging ? "Login..." : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
