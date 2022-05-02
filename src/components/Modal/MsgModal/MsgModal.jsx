import React from "react";
import { Modal } from "react-bootstrap";

const Msgmodal = (props) => {
  const { showModal, handleClose } = props;
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton={false}>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
};

export default Msgmodal;
