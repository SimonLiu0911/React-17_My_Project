import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

function Loginoutmodal(props) {
  const { show, handleClose } = props

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={false} className="justify-content-center">
          <Modal.Title>確認是否登出</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            否
          </Button>
          <Button variant="primary" onClick={handleClose}>
            是
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Loginoutmodal;