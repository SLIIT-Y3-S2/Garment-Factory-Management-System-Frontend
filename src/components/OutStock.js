import React, { useState, useEffect } from "react";
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
    // const dd = String(today.getDate());
    // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // const yyyy = today.getFullYear();
    return today;
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
    const newStockOutType = {
      BuyerId: BuyerId,
      BuyerName: BuyerName,
      OrderId: OrderId,
      GarmentType: GarmentType,
      UnitPrice: UnitPrice,
      Quantity: Quantity,
      TotalCost: UnitPrice * Quantity,
      Date: date,
      Time: Time,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      // event.stopPropagation();
    } 
        axios
        .post("http://localhost:5000/stockout", newStockOutType)
        .then(() => alert("You release a stock"))
        .catch((err) => alert(err));
      console.log(newStockOutType);

      if (newStockOutType.GarmentType === "Blouse" && parseInt(TotalStock.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(TotalStock.Quantity);
        const totalStock =
          parseInt(TotalStock.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock);
        const newTotalStock = {
          Quantity: totalStock,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/6315fef3997af5bc72182029",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      } 

      if (newStockOutType.GarmentType === "Trouser Gens" && parseInt(StocksCount2.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount2.Quantity);
        const totalStock2 =
          parseInt(StocksCount2.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock2);
        const newTotalStock = {
          Quantity: totalStock2,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/631627656073cde3af8406d0",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      } 

      if (newStockOutType.GarmentType === "Trouser Ladies" && parseInt(StocksCount3.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount3.Quantity);
        const totalStock3 =
          parseInt(StocksCount3.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock3);
        const newTotalStock = {
          Quantity: totalStock3,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/631627bf6073cde3af8406d1",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      }

      if (newStockOutType.GarmentType === "Shirt Gens" && parseInt(StocksCount4.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount4.Quantity);
        const totalStock4 =
          parseInt(StocksCount4.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock4);
        const newTotalStock = {
          Quantity: totalStock4,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/6331e6da01ab7efdac54d9c8",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      }

      if (newStockOutType.GarmentType === "Shirt Ladies" && parseInt(StocksCount5.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount5.Quantity);
        const totalStock5 =
          parseInt(StocksCount5.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock5);
        const newTotalStock = {
          Quantity: totalStock5,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/6331e6ec01ab7efdac54d9ca",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      }

      if (newStockOutType.GarmentType === "TShirt Gens" && parseInt(StocksCount6.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount6.Quantity);
        const totalStock6 =
          parseInt(StocksCount6.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock6);
        const newTotalStock = {
          Quantity: totalStock6,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/6331e70401ab7efdac54d9cc",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      }

      if (newStockOutType.GarmentType === "TShirt Ladies" && parseInt(StocksCount7.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount7.Quantity);
        const totalStock7 =
          parseInt(StocksCount7.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock7);
        const newTotalStock = {
          Quantity: totalStock7,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/6331e71501ab7efdac54d9ce",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      }

      if (newStockOutType.GarmentType === "Skirt" && parseInt(StocksCount8.Quantity) >= parseInt(newStockOutType.Quantity)) {
        console.log(StocksCount8.Quantity);
        const totalStock8 =
          parseInt(StocksCount8.Quantity) - parseInt(newStockOutType.Quantity);
        console.log(totalStock8);
        const newTotalStock = {
          Quantity: totalStock8,
        };
        axios
          .put(
            "http://localhost:5000/totalstock/6331e73501ab7efdac54d9d0",
            newTotalStock
          )
          .then(() => alert("stock updated"))
          .catch((err) => alert(err));
        console.log(newStockOutType.Quantity);
      }
      else {
        alert("You don't have enough stock");
      }

    setvalidated(true);
  };

  const Resetform = () => {
    setBuyerId(null);
    setBuyerName(null);
    setOrderId(null);
    setGarmentType(null);
    setUnitPrice(null);
    setQuantity(null);
    setTotalCost(null);
    setDate(null);
    setTime(null);
  };

  return (
    <>
      <StocksInSideNavBar />
      <div className="pageBody">
        <div className="title">Release Stock</div>
        <div className="form1">
          <br />
          <Form noValidate validated={validated} onSubmit={onSubmit}>
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
              <Form.Label >TotalCost</Form.Label>
              <Form.Control
                type="number"
                //placeholder="Enter total cost"
                disabled
                value={UnitPrice * Quantity}
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
            <button className="btn" type="reset" onClick={Resetform}>
              Reset
            </button>
          </Form>
          <br />
        </div>
      </div>
    </>
  );
};

export default OutStock;
