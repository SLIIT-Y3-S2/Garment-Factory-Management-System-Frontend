import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from 'react-bootstrap'
import StockDeleteForm from "./StockDeleteForm";


const AppDeleteModal = (props) => {

  return(
    <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Delete Stock</Modal.Title>
        </Modal.Header>

        <ModalBody>
          <StockDeleteForm StockView = {props.StocksDelete} />
        </ModalBody>

        <Modal.Footer>
        <button className='btn' onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
  )
};

export default AppDeleteModal;
