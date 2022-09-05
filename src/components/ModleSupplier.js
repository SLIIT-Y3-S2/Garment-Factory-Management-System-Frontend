import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import SupplierForm from './SupplierForm'

const ModleSupplier = (props) => {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.supplierDet != null ? ("Edit Supplier") : ("Add Supplier")}</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <SupplierForm det={props.supplierDet} />
        </ModalBody>

        <Modal.Footer>
        {props.supplierDet == null ? (
          <button className='btn' type="reset">
            Reset
          </button>) : " "}
        </Modal.Footer>
      </Modal>
    );
}

export default ModleSupplier