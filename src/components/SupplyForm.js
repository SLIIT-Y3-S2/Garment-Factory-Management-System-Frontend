import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Alert from '@mui/material/Alert';

const SupplyForm = () => {
  const [validated, setvalidated] = useState(false);
  const [supplierid, setSupplierid] = useState();
  const [item, setItem] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  
  

  const handleSubmit = (event) => {
   // event.preventDefault();
    const newSupply = {
      supplierId: supplierid,  
      item: item,
      qty: qty,
      price: price,
      date: date,
      
    };
    

    
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      

          axios
            .post("http://localhost:5000/supply/", newSupply)
            .then(
            // console.log(data),
            () => swal("Successfull!", "Supply Added Successfully!", "success",{timer: 3000})
            // ()=> <Alert severity="success">This is a success alert — check it out!</Alert>
            )
            .catch((err) => alert(err));

        
      }
      
    
    setvalidated(true);
  };

  const disablePastDays = () => {
    const today = new Date();
    const dd = String(today.getDate() - 7).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const disableFutureDays = () => {
    const date = new Date();
    const ddf = String(date.getDate()).padStart(2, "0");
    const mmf = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyyf = date.getFullYear();
    return yyyyf + "-" + mmf + "-" + ddf;
  };


  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      
    >
       <Form.Group className="mb-3" controlId="formSupplierId">
       
          
            <Form.Label>Supplier ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Supplier ID"
              value={supplierid}
              onChange={(e) => setSupplierid(e.target.value)}
              required
            />
         <Form.Control.Feedback type="invalid">
          Please insert Valid Supplier ID
        </Form.Control.Feedback>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormItem">
        <Form.Label>Item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter supply item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formQty">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="No of bundles,..."
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert quantity
        </Form.Control.Feedback>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Unit Price</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="Rs:"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert item unit price
        </Form.Control.Feedback>
      </Form.Group>

      
      <Form.Group className="mb-4" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          min={disablePastDays()}
          max={disableFutureDays()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Suppliying Date
        </Form.Control.Feedback>
      </Form.Group>

      


      <button variant="primary" type="submit">
        Add
      </button>
      
      
    </Form>
  );
};

export default SupplyForm;