import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/form";

const BuyerForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [bid, setBuyerID] = useState(det != null ? det.buyerID : "");
  const [bname, setBuyerName] = useState(det != null ? det.buyerName : "");
  const [email, setEmail] = useState(det != null ? det.email : "");
  const [location, setLocation] = useState(det != null ? det.location : "");
  const [num, setContactNo] = useState(det != null ? det.contactNo : "");

  const handleSubmit = (event) => {
    const newBuyer = {
      buyerID: bid,
      buyerName: bname,
      email: email,
      location: location,
      contactNo: num,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (det == null) {
        axios
          .post("http://localhost:5000/buyer", newBuyer)
          .then(() => alert("Successfully Added"))
          .catch((err) => alert(err));
      } else {
        axios
          .put(`http://localhost:5000/buyer/${det._id}`, newBuyer)
          .then(() => alert("Successfully Updated"))
          .catch((err) => alert(err));
      }
    }

    setvalidated(true);
  };

  const Resetform = () => {
    setBuyerID(null);
    setBuyerName(null);
    setEmail(null);
    setLocation(null);
    setContactNo(null);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formID">
          <Form.Label>Buyer ID</Form.Label>
          {det == null ? (
            <Form.Control
              type="text"
              placeholder="Enter ID"
              value={bid}
              onChange={(e) => setBuyerID(e.target.value)}
              required
            />
          ) : (
            <Form.Control
              type="text"
              placeholder="Enter ID"
              value={bid}
              onChange={(e) => setBuyerID(e.target.value)}
              required
              disabled
            />
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Buyer/Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Buyer/Company Name"
            value={bname}
            onChange={(e) => setBuyerName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="abc@xyz.com"
            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please insert Valid Email Address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMobile">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact No"
            title="Must include 10 digits without Country Code"
            pattern="[0-9]{10}"
            value={num}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please insert Valid Mobile Number
          </Form.Control.Feedback>
        </Form.Group>
        <button className="btn" type="submit">
          {det != null ? "Save Changes" : "Add"}
        </button>
        &nbsp; &nbsp; &nbsp;
        {det == null ? (
          <button className="btn" type="reset" onClick={Resetform}>
            {" "}
            Reset{" "}
          </button>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};

export default BuyerForm;
