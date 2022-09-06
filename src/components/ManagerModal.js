import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import ManagerForm from "./ManagerForm";

const ManagerModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props.managerdata != null ? "Edit Manager" : "Add Manager"}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <ManagerForm data={props.managerdata} />
      </ModalBody>
    </Modal>
  );
};

export default ManagerModal;
