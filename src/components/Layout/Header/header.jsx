import React from "react";
import { Button } from "react-bootstrap";

import './header.scss'

const Header = () => {
  return (
    <div id="header">
      <div>
        <span>歡迎</span>
        <Button variant="primary">登出</Button>
      </div>
    </div>
  );
};

export default Header;
