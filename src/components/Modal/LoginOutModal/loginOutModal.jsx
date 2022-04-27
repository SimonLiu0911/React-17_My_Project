import React from 'react';
import { Modal } from "react-bootstrap";

import BaseButton from "../../Base/Button/BaseButton";

function Loginoutmodal(props) {
  const { show, handleLoginOut, closeModal } = props

  return (
    <>
      <Modal className='test' show={show} onHide={handleLoginOut} backdrop="static">
        <Modal.Header closeButton={false} className="justify-content-center">
          <Modal.Title>確認是否登出</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <BaseButton variant="secondary" fn={closeModal}>否</BaseButton>
          <BaseButton variant="primary" fn={handleLoginOut}>是</BaseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Loginoutmodal;