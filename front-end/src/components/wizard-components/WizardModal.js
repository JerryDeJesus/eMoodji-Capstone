import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


export default function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


// import React, { useState } from "react";
// import {Modal, Button} from "react-bootstrap";

// export default function WizardModal() {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
   
// //   const { show, setShow } = useState(false);

// //   const handleHide = () => setShow(false);

// //   const handleShow = () => setShow(true);

// //   return (

// //     //   <>
// //     //     <Modal.Dialog>
// //     //         <Modal.Header closeButton>
// //     //             <Modal.Title>Modal title</Modal.Title>
// //     //         </Modal.Header>

// //     //         <Modal.Body>
// //     //             <p>Modal body text goes here.</p>
// //     //         </Modal.Body>

// //     //         <Modal.Footer>
// //     //             <Button variant="secondary">Close</Button>
// //     //             <Button variant="primary">Save changes</Button>
// //     //         </Modal.Footer>
// //     //     </Modal.Dialog>
// //     //   </>



// //     // <>
// //     // <Modal show={show} onHide={handleHide}>
// //     //     <button onClick={handleShow}>BUTTTONNN</button>

// //     //   <Modal.Header closeButton>
// //     //     <Modal.Title>Modal heading</Modal.Title>
// //     //   </Modal.Header>

// //     //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
     
// //     //   <Modal.Footer>
// //     //     <button onClick={handleHide}>
// //     //       Close
// //     //     </button>
// //     //     <button onClick={handleHide}>
// //     //       Save Changes
// //     //     </button>
// //     //   </Modal.Footer>
// //     // </Modal>
// //     // </>
// //   );
// }


