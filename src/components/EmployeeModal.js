import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import EmployeeForm from "./EmployeeForm";

const EmployeeModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props.employeedata != null ? "Edit Employee" : "Add Employee"}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <EmployeeForm data={props.employeedata} />
      </ModalBody>
    </Modal>
  );
};

export default EmployeeModal;
