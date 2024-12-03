import { React, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const MyModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return(
        <div>
           <Button variant="primary" onClick={handleShow}>Open Modal</Button>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to proceed?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
           </Modal>
        </div>
    );
};

export default MyModal;