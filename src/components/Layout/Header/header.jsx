import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

import { reqLogout } from '../../../api';

import "./header.scss";

const Header = (props) => {
  const handleLoginOut = async () => {
    const apiToken = sessionStorage.getItem("apiToken")
    const response = await reqLogout(apiToken)
    const { success } = response.data
    if (success) {
      props.history.replace("/login")
    }
  };
  return (
    <div id="header" className="d-flex justify-content-end align-items-center">
      <div className="me-3">
        <span className="me-2">歡迎, admin</span>
        <Button variant="primary" onClick={handleLoginOut}>
          登出
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Header);
