import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/form";

const VehicleAssignForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [oid, setOrderID] = useState(det.orderID);
  const [bid, setBuyerID] = useState(det.buyerID);
  const [bname, setBuyerName] = useState(det.setBuyerName);
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [vno, setVehicleNo] = useState();
  const [cost, setCost] = useState();

  const handleSubmit = (event) => {
    // const newDelivery = {
    //   buyerID: bid,
    //   buyerName: bname,
    //   email: email,
    //   location: location,
    //   contactNo: num,
    // };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // axios
      //   .post("http://localhost:5000/buyer", newBuyer)
      //   .then(() => alert("Successfully Added"))
      //   .catch((err) => alert(err));
    }
    setvalidated(true);
  };

  const Resetform = () => {
    setOrderID(null);
    setBuyerID(null);
    setBuyerName(null);
    setDate(null);
    setTime(null);
    setVehicleNo(null);
    setCost(null);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="dID">
          <Form.Label>Order ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Order ID"
            value={oid}
            onChange={(e) => setOrderID(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bID">
          <Form.Label>Buyer ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Buyer ID"
            value={bid}
            onChange={(e) => setBuyerID(e.target.value)}
            required
          />
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
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Label>Vehicle No</Form.Label>
        <Form.Select
          aria-label="Vehicle No"
          value={vno}
          onChange={(e) => setVehicleNo(e.target.value)}
        >
          <option selected disabled hidden>
            Vehicle No
          </option>
          <option>ABC-1234</option>
          <option>CDE-5678</option>
          <option>250-4589</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formCost">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </Form.Group>
        <button className="btn" type="submit">
          Submit
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn" type="reset" onClick={Resetform}>
          {" "}
          Reset{" "}
        </button>
      </Form>
    </div>
  );
};

export default VehicleAssignForm;
