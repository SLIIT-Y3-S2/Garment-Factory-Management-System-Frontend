import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import SupDeleteForm from "./SupDeleteForm";

const ModleDelete = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          
             Delete Supplier
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
          <SupDeleteForm supplier={props.supplierdelete} />
        
        
      </ModalBody>
    </Modal>
  );
};

export default ModleDelete;