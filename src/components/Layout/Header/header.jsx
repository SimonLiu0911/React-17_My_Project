import React from "react";
import { withRouter } from "react-router-dom";
// import { Button } from "react-bootstrap";
import BaseButton from "../../Base/BaseButton/BaseButton"

import { reqLogout } from '../../../api';
import {HeaderStyle} from './style';

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
    <HeaderStyle className="d-flex justify-content-end align-items-center">
      <div className="me-3">
        <span className="me-2">歡迎, admin</span>
        {/* <Button variant="primary" onClick={handleLoginOut}>
          登出
        </Button> */}
        <BaseButton variant="primary" onClick={handleLoginOut}>登出</BaseButton>
      </div>
    </HeaderStyle>
  );
};

export default withRouter(Header);
