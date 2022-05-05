import React from 'react';
import { Button } from 'react-bootstrap';

import Plus from "../../../assets/img/plus.svg"

const Basebutton = (props) => {
  const { variant, size, disabled, onClick, prefix } = props
  return (
    <>
      <Button
        className=""
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onClick}
      >
        {
          (() => {
            switch (prefix) {
              case "plus":
                return <img className="btn_icon me-1" src={Plus} alt="icon" />
              default:
                return 
            }
          })()
        }
        {props.children}
      </Button>
    </>
  );
}

export default Basebutton;
