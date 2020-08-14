import React from "react";
import {Button,Modal} from "react-bootstrap"
import { useState } from "react";


const Modall =({status,onConfirm})=>{
    const [show, setShow] = useState(status);

    const handleClose = () => {
        setShow(false)
        onConfirm(false)
    };
    const handleShow = () => {
        setShow(false)
        onConfirm(true)};
       
            return(
                <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleShow}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            )
        
};

export default Modall