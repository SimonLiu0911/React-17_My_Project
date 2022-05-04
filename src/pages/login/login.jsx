import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import memoryUtils from "../../utils/memoryUtils";

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
      const { success, token, expired } = response.data;
      memoryUtils.user = response.data
      if (success) {
        sessionStorage.setItem("apiToken", token);
        document.cookie = `Token=${token}; expires=${new Date(
          expired * 1000
        )}; path=/`;
        props.history.replace('/')
      }
      console.log("login try");
      setLoging(false);
    } catch ({ response }) {
      console.log("login catch");
      const { errors } = response.data;
      const { email, password } = errors;
      console.log(errors);
      setLoging(false);
      if (email) {
        setEmailErrorMsg(email[0]);
      }
      if (password) {
        setPasswordErrorMsg(password[0]);
      }
    }
  };

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      setEmailErrorMsg("");
    }
    return () => {
      isMounted = false
    }
  }, [email]);

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      setPasswordErrorMsg("");
    }
    return () => {
      isMounted = false
    }
  }, [password]);

  useEffect(() => {
    sessionStorage.clear()
  }, [])

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
