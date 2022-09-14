import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import VehicleAssignForm from './VehicleAssignForm';

const VehicleAssignModal = (props) => {
  return (
    <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign Vehicle and Confirm Delivery</Modal.Title>
        </Modal.Header>
        <ModalBody>
          {/* <BuyerForm det={props.buyerdet} /> */}
          <VehicleAssignForm det ={props.deliverdet} />
        </ModalBody>

       
        <Modal.Footer>
        <button className='btn' onClick={props.onHide}>
            Close
        </button>
        </Modal.Footer>
      </Modal>
  )
}

export default VehicleAssignModal

