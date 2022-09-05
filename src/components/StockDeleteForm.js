import React from 'react'
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"

const StockDeleteForm = ({StockView}) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

        } else {
            // const newformerStock = {
            //     GarmentType: StockView.GarmentType,
            //     UnitPrice: StockView.UnitPrice,
            //     Quantity: StockView.Quantity,
            //     ReceivedFrom: StockView.ReceivedFrom,
            //     StoredSection: StockView.StoredSection,
            //     StoredBin: StockView.StoredBin,
            //     Date: StockView.date,
            //     Time: StockView.Time,
            // }

            
            axios
                .delete(`http://localhost:5000/stockin/${StockView._id}`)
                .then(() => {
                    alert("Successfully Deleted")
                })
                 .catch((err) => {
                    alert(err)
                });

            // axios
            //     .post("http://localhost:5000/formerbuyer", newformerBuyer)
            //     .then((data) => console.log(data))
            //     .catch((err) => alert(err));

        }

        setValidated(true);
    };

  return (
    <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>
                Are You Sure, Do You Want to Delete this Stock?
            </Form.Label>
            </Form.Group>

            <button className='btn' type="submit">
                Delete
            </button>
        </Form>
      
    </div>
  )
}

export default StockDeleteForm
