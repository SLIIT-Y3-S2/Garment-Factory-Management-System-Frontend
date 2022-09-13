import React, { useState, useEffect } from 'react'
import StocksInSideNavBar from "./StocksInSideNavBar";
import axios from "axios";
import Form from "react-bootstrap/Form";


const OutStock = () => {
    const [validated, setvalidated] = useState(false);
    const [BuyerId, setBuyerId] = useState("");
    const [BuyerName, setBuyerName] = useState("");
    const [OrderId, setOrderId] = useState("");
    const [GarmentType, setGarmentType] = useState("");
    const [UnitPrice, setUnitPrice] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [TotalCost, setTotalCost] = useState("");
    const [date, setDate] = useState("");
    const [Time, setTime] = useState("");
  
    const disablePastDays = () => {
      const today = new Date();
      // const dd = String(today.getDate());
      // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      // const yyyy = today.getFullYear();
      return today;
    };
  
    // const onSubmit = (event) => {
    //   const newStockOutType = {
    //     GarmentType: GarmentType,
    //     UnitPrice: UnitPrice,
    //     Quantity: Quantity,
    //     ReceivedFrom: ReceivedFrom,
    //     StoredSection: StoredSection,
    //     StoredBin: StoredBin,
    //     Date: date,
    //     Time: Time,
    //   };
  
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     // event.stopPropagation();
    //   } else {
    //       axios
    //         .post("http://localhost:5000/stockout", newStockOutType)
    //         .then(() => alert("You release a stock"))
    //         .catch((err) => alert(err));
    //       console.log(newStockOutType);
    //   }
    //   setvalidated(true);
    // };
  
    // const Resetform = () =>{
    //   setGarmentType(null);
    //   setUnitPrice(null);
    //   setQuantity(null);
    //   setReceivedFrom(null);
    //   setStoredSection(null);
    //   setStoredBin(null);
    //   setDate(null);
    //   setTime(null);
    // }
  
    return (
      <>
        <StocksInSideNavBar />
        <div className="pageBody">
          <div className="title">Release Stock</div>
          <div className="form1">
            <br />
            <Form noValidate validated={validated}>

            <Form.Group className="mb-3">
                <Form.Label>Buyer ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Buyer id"
                  value={BuyerId}
                  onChange={(e) => setBuyerId(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter buyer id
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Buyer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={BuyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Order Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter order id"
                  value={OrderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter order id
                </Form.Control.Feedback>
              </Form.Group>

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
                <Form.Label>TotalCost</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter total cost"
                  value={TotalCost}
                  onChange={(e) => setTotalCost(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter cost
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
                  label="I have released the stock"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <button className="btn">Submit</button> &nbsp;
              <button className='btn' type='reset'>Reset</button>
            </Form>
            <br />
          </div>
        </div>
      </>
    );
  };

export default OutStock
