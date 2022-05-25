
import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export default function WizardModal() {
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <button className="testing" onClick={handleShow}>SHOW BUTTTONNN</button>
      <Modal show={show} onHide={handleHide} backdrop = "true">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      
        <Modal.Footer>
        <Link to="/createaccount"><button onClick={handleHide}>
            Create Account
          </button></Link>
          <Link to="/loginpage"><button onClick={handleHide}>
            Log In
          </button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

