import React from 'react'
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

const BuyerDeleteForm = ({ buyer }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

        } else {
            const newformerBuyer = {
                buyerID: buyer.buyerID,
                buyerName: buyer.buyerName,
                email: buyer.email,
                location: buyer.location,
                contactNo: buyer.contactNo,
            }

            
            axios
                .delete(`http://localhost:5000/buyer/${buyer._id}`)
                .then(() => {
                    swal("Deleted", "Successfully Deleted", "success")
                })
                 .catch((err) => {
                    swal("Failed", "Deletion not Successful", "error")
                });

            axios
                .post("http://localhost:5000/formerbuyer", newformerBuyer)
                .then((data) => console.log(data))
                .catch((err) => alert(err));

        }

        setValidated(true);
    };

  return (
    <div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>
                Are You Sure, Do You Want to Delete this Buyer?
            </Form.Label>
            </Form.Group>

            <button className='btn-del' type="submit">
                Delete
            </button>
        </Form>
        
    </div>
  )
}

export default BuyerDeleteForm