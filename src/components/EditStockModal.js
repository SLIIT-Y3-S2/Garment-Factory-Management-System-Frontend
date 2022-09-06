import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import AddStock from './AddStock'

const EditStockModal = (props) => {
  return (
    <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <ModalBody>
          <AddStock upd={props.Stockdet} />
        </ModalBody>

       
        <Modal.Footer>
        <button className='btn' onClick={props.onHide}>
            Close
        </button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditStockModal
