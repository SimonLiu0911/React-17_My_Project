import React from "react";
import { Button } from "react-bootstrap";

import "./header.scss";

const Header = () => {
  const handleLoginOut = () => {
    console.log("handleLoginOut");
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

export default Header;
