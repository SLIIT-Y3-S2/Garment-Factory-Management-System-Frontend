import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import BuyerDeleteForm from './BuyerDeleteForm'


const BuyerDeleteModal = (props) => {


    return (
        <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Delete Buyer
          </Modal.Title>
        </Modal.Header>

        <ModalBody>
          <BuyerDeleteForm buyer = {props.buyerdelete} />
        </ModalBody>
        
        <Modal.Footer>
            {/* <button className='btn' onClick={del}>Delete</button> */}
            <button className='btn' onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    )
}

export default BuyerDeleteModal