import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import MsgModal from "../../components/Modal/MsgModal/MsgModal";

import { reqLogin } from "../../api";

// import "./login.scss";

const Login = (props) => {
  const emailNode = useRef();
  const passwordNode = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isLoging, setLoging] = useState(false);
  const [isDisable, setDisable] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const handleSubmit = async () => {
    setLoging(true);
    const email = emailNode.current.value;
    const password = passwordNode.current.value;
    try {
      const response = await reqLogin(email, password);
      const { success, token } = response.data;
      if (success) {
        setShowModal(true);
        // props.history.replace('/')
      }
    } catch ({ response }) {
      const { errors } = response.data;
      const { email, password } = errors;
      setEmailErrorMsg(email[0]);
      setPasswordErrorMsg(password[0]);
      setLoging(false);
    }
  };
  const handleClose = () => {
    setShowModal(false);
  };

  // TODO 當email和password沒有填寫時，disabled按鈕
  //   useEffect(() => {
  //     const email = emailNode.current.value;
  //     const password = passwordNode.current.value;
  //     if (!email && !password) {
  //       setDisable(false);
  //     }
  //   }, [email, password]);

  return (
    <div className="login-content">
      <h2 className="font-size-1 login-title">用戶登錄</h2>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={emailNode}
            type="email"
            placeholder="Enter email"
          />
          <span className="error-msg font-size-7">{emailErrorMsg}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordNode}
            type="password"
            placeholder="Password"
          />
          <span className="error-msg font-size-7">{passwordErrorMsg}</span>
        </Form.Group>
        <Button
          className="login-form-btn"
          variant="primary"
          type="button"
          onClick={handleSubmit}
          disabled={isDisable}
        >
          {isLoging ? "Login..." : "Login"}
        </Button>
      </Form>
      <MsgModal showModal={showModal} handleClose={handleClose}></MsgModal>
    </div>
  );
};

export default Login;
