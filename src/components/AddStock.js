import React, { useState, useEffect } from "react";
import StocksInSideNavBar from "./StocksInSideNavBar";
import axios from "axios";
import Form from "react-bootstrap/Form";

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

  const [TotalStock, setTotalStock] = useState([]);
  const [StocksCount2, setStocksCount2] = useState([]);
  const [StocksCount3, setStocksCount3] = useState([]);
  const [StocksCount4, setStocksCount4] = useState([]);
  const [StocksCount5, setStocksCount5] = useState([]);
  const [StocksCount6, setStocksCount6] = useState([]);
  const [StocksCount7, setStocksCount7] = useState([]);
  const [StocksCount8, setStocksCount8] = useState([]);

  const disablePastDays = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
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


  useEffect(() => {
    const getTotalStock = () => {
      axios
        .get("http://localhost:5000/totalstock/6315fef3997af5bc72182029")
        .then((res) => {
          setTotalStock(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTG = () => {
      axios
        .get("http://localhost:5000/totalstock/631627656073cde3af8406d0")
        .then((res) => {
          setStocksCount2(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTL = () => {
      axios
        .get("http://localhost:5000/totalstock/631627bf6073cde3af8406d1")
        .then((res) => {
          setStocksCount3(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountSG = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e6da01ab7efdac54d9c8")
        .then((res) => {
          setStocksCount4(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountSL = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e6ec01ab7efdac54d9ca")
        .then((res) => {
          setStocksCount5(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTSG = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e70401ab7efdac54d9cc")
        .then((res) => {
          setStocksCount6(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTSL = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e71501ab7efdac54d9ce")
        .then((res) => {
          setStocksCount7(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountSK = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e73501ab7efdac54d9d0")
        .then((res) => {
          setStocksCount8(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getTotalStock();
    getStocksCountTG();
    getStocksCountTL();
    getStocksCountSG();
    getStocksCountSL();
    getStocksCountTSG();
    getStocksCountTSL();
    getStocksCountSK();
  }, []);

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
      // event.stopPropagation();
    } else {
      if (upd == null) {
        axios
          .post("http://localhost:5000/stockin", newStockInType)
          .then(() => alert("You add a stock"))
          .catch((err) => alert(err));
        console.log(newStockInType);

        if(newStockInType.GarmentType === 'Blouse'){
          console.log(TotalStock.Quantity);
          const totalStock = parseInt(TotalStock.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock);
          const newTotalStock = {
            Quantity: totalStock,
          }
          axios
          .put("http://localhost:5000/totalstock/6315fef3997af5bc72182029", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'Trouser Gens'){
          console.log(StocksCount2.Quantity);
          const totalStock2 = parseInt(StocksCount2.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock2);
          const newTotalStock = {
            Quantity: totalStock2,
          }
          axios
          .put("http://localhost:5000/totalstock/631627656073cde3af8406d0", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'Trouser Ladies'){
          console.log(StocksCount3.Quantity);
          const totalStock3 = parseInt(StocksCount3.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock3);
          const newTotalStock = {
            Quantity: totalStock3,
          }
          axios
          .put("http://localhost:5000/totalstock/631627bf6073cde3af8406d1", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'Shirt Gens'){
          console.log(StocksCount4.Quantity);
          const totalStock4 = parseInt(StocksCount4.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock4);
          const newTotalStock = {
            Quantity: totalStock4,
          }
          axios
          .put("http://localhost:5000/totalstock/6331e6da01ab7efdac54d9c8", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'Shirt Ladies'){
          console.log(StocksCount5.Quantity);
          const totalStock5 = parseInt(StocksCount5.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock5);
          const newTotalStock = {
            Quantity: totalStock5,
          }
          axios
          .put("http://localhost:5000/totalstock/6331e6ec01ab7efdac54d9ca", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'TShirt Gens'){
          console.log(StocksCount6.Quantity);
          const totalStock6 = parseInt(StocksCount6.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock6);
          const newTotalStock = {
            Quantity: totalStock6,
          }
          axios
          .put("http://localhost:5000/totalstock/6331e70401ab7efdac54d9cc", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'TShirt Ladies'){
          console.log(StocksCount7.Quantity);
          const totalStock7 = parseInt(StocksCount7.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock7);
          const newTotalStock = {
            Quantity: totalStock7,
          }
          axios
          .put("http://localhost:5000/totalstock/6331e71501ab7efdac54d9ce", newTotalStock)
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
          console.log(newStockInType.Quantity);

        }

        if(newStockInType.GarmentType === 'Skirt'){
          console.log(StocksCount8.Quantity);
          const totalStock8 = parseInt(StocksCount8.Quantity) + parseInt(newStockInType.Quantity);
          console.log(totalStock8);
          const newTotalStock = {
            Quantity: totalStock8,
          }
          axios
          .put("http://localhost:5000/totalstock/6331e73501ab7efdac54d9d0", newTotalStock)
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
        <div className={upd != null ? "" : "form1"}>
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
                max={disableFutureDays()}
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
            <button className="btn">{upd != null ? "Done" : "Submit"}</button> &nbsp;
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
