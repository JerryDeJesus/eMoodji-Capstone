import React, { useState } from "react";
import {Modal} from "react-bootstrap";

export default function WizardModal() {
  const { show, setShow } = useState(false);

  const handleHide = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
    <Modal show={show} onHide={handleHide}>
        <button onClick={handleShow}>BUTTTONNN</button>

      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>

      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
     
      <Modal.Footer>
        <button onClick={handleHide}>
          Close
        </button>
        <button onClick={handleHide}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
    </>
  );
}


