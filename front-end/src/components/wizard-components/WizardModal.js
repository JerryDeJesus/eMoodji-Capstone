
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export default function WizardModal() {
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="center-button">
      <button className="wizard-button" onClick={handleShow}>Submit</button>
    </div>
      <Modal show={show} onHide={handleHide} backdrop = "true">
        <Modal.Header closeButton>
          <Modal.Title><div className="modal-div">Hi! What would you like to do?</div></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Link to="/createaccount"><button className="modal-button" onClick={handleHide}>Create Account</button></Link>
          <Link to="/loginpage"><button className="modal-button" onClick={handleHide}>Log In</button></Link>
        </Modal.Body>
  
      </Modal>
    </>
  );
}

