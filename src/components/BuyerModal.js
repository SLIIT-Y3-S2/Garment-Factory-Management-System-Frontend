import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import BuyerForm from './BuyerForm';

const BuyerModal = (props) => {
    
    return (
      <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.buyerdet != null ? ("Edit Buyer") : ("Add Buyer")}</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <BuyerForm det={props.buyerdet} />
        </ModalBody>

       
        <Modal.Footer>
        <button className='btn' onClick={props.onHide}>
            Close
        </button>
        </Modal.Footer>
      </Modal>
    );
}

export default BuyerModal
