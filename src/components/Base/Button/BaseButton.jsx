import React from 'react';
import { Button } from 'react-bootstrap';

const BaseButton = (props) => {
  const defaultStyle = {
    width: "100px",
    // backgroundColor: "#0059BE"
  }
  return (
    <Button 
      variant={props.variant}
      style={props.customStyle ? props.customStyle : defaultStyle}
      onClick={props.fn}
    >
      {props.children}
    </Button>
  );
}

export default BaseButton;
