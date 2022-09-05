import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Alert from '@mui/material/Alert';

const SupplierForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [supplierid, setSupplierid] = useState(det != null ? det.supplierId : "");
  const [name, setName] = useState(det != null ? det.name : "");
  const [mobile, setMobile] = useState(det != null ? det.mobile : "");
  const [email, setEmail] = useState(det != null ? det.email : "");
  const [address, setAddress] = useState(det != null ? det.address : "");
  const [item, setItem] = useState(det != null ? det.item : "");
  

  const handleSubmit = (event) => {
   // event.preventDefault();
    const newSupplier = {
      supplierId: supplierid,  
      name: name,
      mobile: mobile,
      email: email,
      address: address,
      item: item,
    };
    

    
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (det == null) {

          axios
            .post("http://localhost:5000/supplier/", newSupplier)
            .then(
            // console.log(data),
            () => swal("Successfull!", "Supplier Added Successfully!", "success",{timer: 3000})
            // ()=> <Alert severity="success">This is a success alert — check it out!</Alert>
            )
            .catch((err) => alert(err));

        
      }else{
             axios

               .put(
                 `http://localhost:5000/supplier/${det._id}`,
                 newSupplier
               )
               .then(() =>
                 swal(
                   "Successfull!",
                   "Supplier Updated Successfully!",
                   "success",
                   {timer:3000 }
                 )
                // <Alert severity="success">This is a success alert — check it out!</Alert>
               )
               .catch((err) => alert(err));
           }
      }
    
    setvalidated(true);
  };


  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      // encType="multipart/form-data"
    >
       <Form.Group className="mb-3" controlId="formSupplierId">
       {det == null ? (
          <div>
            <Form.Label>Supplier ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Supplier ID"
              value={supplierid}
              onChange={(e) => setSupplierid(e.target.value)}
              required
            />
          </div>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Moblie Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Moblie Number"
          title="Must include 10 digits without Country Code"
          pattern="[0-9]{10}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Mobile Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Email Address
        </Form.Control.Feedback>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="FormAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Residental Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
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


      <button variant="primary" type="submit">
        {det != null ? "Save Changes" : "Add"}
      </button>
      &nbsp;&nbsp;
      
    </Form>
  );
};

export default SupplierForm;