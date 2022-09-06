import React, { useState } from "react";
import StocksInSideNavBar from "./StocksInSideNavBar";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddStock = ({ upd }) => {
  const [validated, setvalidated] = useState(false);
  const [GarmentType, setGarmentType] = useState(
    upd != null ? upd.GarmentType : ""
  );
  const [UnitPrice, setUnitPrice] = useState(upd != null ? upd.UnitPrice : "");
  const [Quantity, setQuantity] = useState(upd != null ? upd.Quantity : "");
  const [ReceivedFrom, setReceivedFrom] = useState(
    upd != null ? upd.ReceivedFrom : ""
  );
  const [StoredSection, setStoredSection] = useState(
    upd != null ? upd.StoredSection : ""
  );
  const [StoredBin, setStoredBin] = useState(upd != null ? upd.StoredBin : "");
  const [date, setDate] = useState(upd != null ? upd.date : "");
  const [Time, setTime] = useState(upd != null ? upd.Time : "");

  const disablePastDays = () => {
    const today = new Date();
    // const dd = String(today.getDate());
    // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // const yyyy = today.getFullYear();
    return today;
  };

  const onSubmit = (event) => {
    const newStockInType = {
      GarmentType: GarmentType,
      UnitPrice: UnitPrice,
      Quantity: Quantity,
      ReceivedFrom: ReceivedFrom,
      StoredSection: StoredSection,
      StoredBin: StoredBin,
      Date: date,
      Time: Time,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (upd == null) {
        axios
          .post("http://localhost:5000/stockin", newStockInType)
          .then(() => alert("You add a stock"))
          .catch((err) => alert(err));
        console.log(newStockInType);

        if(newStockInType.GarmentType === 'Blouse'){
          axios
          .put("http://localhost:5000/totalstock/6315fef3997af5bc72182029", newStockInType)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }
        
      } else {
        axios
          .put(`http://localhost:5000/stockin/${upd._id}`, newStockInType)
          .then(() => alert("Stock is Updated"))
          .catch((err) => alert(err));
      }
    }
    setvalidated(true);
  };

  const Resetform = () =>{
    setGarmentType(null);
    setUnitPrice(null);
    setQuantity(null);
    setReceivedFrom(null);
    setStoredSection(null);
    setStoredBin(null);
    setDate(null);
    setTime(null);
  }

  return (
    <>
      <StocksInSideNavBar />
      <div className="pageBody">
        <div className="title">{upd != null ? "Edit Stock" : "Add Stock"}</div>
        <div className={upd == null ? "form1" : ""}>
          <br />
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Garment Type</Form.Label>
              <Form.Select
                value={GarmentType}
                onChange={(e) => setGarmentType(e.target.value)}
                required
              >
                <option value="" selected disabled hidden>
                  Select
                </option>
                <option>Trouser Gens</option>
                <option>Trouser Ladies</option>
                <option>Shirt Gens</option>
                <option>Shirt Ladies</option>
                <option>TShirt Gens</option>
                <option>TShirt Ladies</option>
                <option>Skirt</option>
                <option>Blouse</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Select One
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Unit Price (Rs:)</Form.Label>
              <Form.Control
                id="v1"
                type="number"
                placeholder="Enter unit price"
                value={UnitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter price
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={Quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter Quantity
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Received From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter received section"
                value={ReceivedFrom}
                onChange={(e) => setReceivedFrom(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter Received section
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stored Section</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stored section"
                value={StoredSection}
                onChange={(e) => setStoredSection(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter stored section
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stored bin no</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter bin no"
                value={StoredBin}
                onChange={(e) => setStoredBin(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter bin
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                min={disablePastDays()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter Date
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Time"
                value={Time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter Time
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label={upd == null ? "I have released the stock" : "I edited the released stock"}
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <button className="btn">{upd != null ? "Done" : "Submit"}</button>
            {upd == null ?
              (<button className='btn' type='reset' onClick={Resetform}> Reset </button>) 
            : ""}
          </Form>
          <br />
        </div>
      </div>
    </>
  );
};

export default AddStock;
