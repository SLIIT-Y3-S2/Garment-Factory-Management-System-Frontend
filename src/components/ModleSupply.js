import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import SupplyForm from './SupplyForm'

 
const SupplyModel = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Supply
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <SupplyForm/>
      </ModalBody>
      <Modal.Footer>
      <button variant="primary" type="reset">
        Reset
      </button>
      </Modal.Footer>
    </Modal>
  )
}
 
export default SupplyModel