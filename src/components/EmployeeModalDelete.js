import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import EmployeeDeleteForm from "./EmployeeDeleteForm";

const EmployeeModalDelete = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Employee</Modal.Title>
      </Modal.Header>
      <ModalBody>
        {props.managerdatadelete != null ? (
          <EmployeeDeleteForm manager={props.managerdatadelete} />
        ) : (
          <EmployeeDeleteForm employee={props.employeedatadelete} />
        )}
      </ModalBody>
    </Modal>
  );
};

export default EmployeeModalDelete;
