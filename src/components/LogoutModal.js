import React from 'react'
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogoutModal = (props) => {
    const navigate = useNavigate();

    const handlelogout = () => {
      sessionStorage.removeItem("token");
      navigate("/");
    };

  return (
    <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Log Out</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <h5>Are you sure you want to log out?</h5>
        <button className="btn-del" type="submit" onClick={() => handlelogout}>
          Log Out
        </button>
      </ModalBody>
    </Modal>
  );
}

export default LogoutModal