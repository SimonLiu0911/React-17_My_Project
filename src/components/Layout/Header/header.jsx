import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./header.scss";

import LoginOutModal from "../../Modal/LoginOutModal/loginOutModal";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleLoginOut = () => setShow(false);
  const closeModal = () => setShow(false);
  return (
    <>
      <div id="header" className="d-flex justify-content-end align-items-center">
        <div className="me-3">
          <span className="me-2">歡迎, admin</span>
          <Button variant="primary" onClick={handleShow}>
            登出
          </Button>
        </div>
      </div>
      <LoginOutModal show={show} handleLoginOut={handleLoginOut} closeModal={closeModal} />
    </>
  );
};

export default Header;
