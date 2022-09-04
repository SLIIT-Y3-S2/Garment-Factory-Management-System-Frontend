import React from 'react'
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const EmployeeDeleteForm = ({ employee }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
          const newFormerEmployee = {
            Name: employee.Name,
            Email: employee.Email,
            Mobile: employee.Mobile,
            Address: employee.Address,
            NIC: employee.NIC,
            Position: employee.Position,
          };

          axios
            .delete(`http://localhost:5000/manager/deleteManager/${employee._id}`)
            .then((data) => {
              alert("Employee deleted successfully");
            })
            .catch((err) => {
              alert(err.message);
            });
          

          axios
            .post("http://localhost:5000/formeremployee/addFormerEmployee", newFormerEmployee)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              alert(err.message);
            });
      }
    };
          
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Are You Sure, Do You Want to Delete this Employee?
          </Form.Label>
        </Form.Group>
        <button className='btn' type="submit">
          Delete
        </button>
      </Form>
    </>
  );
}

export default EmployeeDeleteForm