import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const SupDeleteForm = ({supplier}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      
        
      const newFormerSupplier = {
        supplierId: supplier.supplierid,
        name: supplier.name,
        mobile: supplier.mobile,
        email: supplier.email,
        address: supplier.address,
        item: supplier.item,
      };

        axios
          .delete(`http://localhost:5000/supplier/${supplier._id}`)
          .then(() => swal("Successfull", "Supplier Deleted Successfully!", "success",{timer: 3000}))
          .catch((err) => {
            alert(err);
          });
        
         axios
           .post("http://localhost:5000/formersupplier/", newFormerSupplier)
           .then((data) => console.log(data))
           .catch((err) => alert(err));
      
     
    }

    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Are You Sure, Do You Want to Delete this Record?
          </Form.Label>
          
        </Form.Group>
        <button className="btn" type="submit">
          Delete
        </button>
      </Form>
    </>
  );
};

export default SupDeleteForm;