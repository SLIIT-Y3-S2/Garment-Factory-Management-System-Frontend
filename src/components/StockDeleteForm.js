import React from "react";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const StockDeleteForm = ({ StockView }) => {
  const [validated, setValidated] = useState(false);
  const [TotalStock, setTotalStock] = useState([]);
  const [StocksCount2, setStocksCount2] = useState([]);
  const [StocksCount3, setStocksCount3] = useState([]);
  const [StocksCount4, setStocksCount4] = useState([]);
  const [StocksCount5, setStocksCount5] = useState([]);
  const [StocksCount6, setStocksCount6] = useState([]);
  const [StocksCount7, setStocksCount7] = useState([]);
  const [StocksCount8, setStocksCount8] = useState([]);

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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const newformerStock = {
          GarmentType: StockView.GarmentType,
          UnitPrice: StockView.UnitPrice,
          Quantity: StockView.Quantity,
          ReceivedFrom: StockView.ReceivedFrom,
          StoredSection: StockView.StoredSection,
          StoredBin: StockView.StoredBin,
          Date: StockView.Date,
          Time: StockView.Time,
      }

      axios
        .delete(`http://localhost:5000/stockin/${StockView._id}`)
        .then(() => {
          alert("Successfully Deleted");
        })
          
        .catch((err) => {
          alert(err);
        });

      axios
          .post("http://localhost:5000/deletedstock", newformerStock)
          .then((data) => console.log(data))
          .catch((err) => alert(err));
      console.log(newformerStock);

      if(newformerStock.GarmentType === 'Blouse'){
        console.log(TotalStock.Quantity);
        const totalStock = parseInt(TotalStock.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock);
        const newTotalStock = {
          Quantity: totalStock,
        }
        axios
        .put("http://localhost:5000/totalstock/6315fef3997af5bc72182029", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'Trouser Gens'){
        console.log(StocksCount2.Quantity);
        const totalStock2 = parseInt(StocksCount2.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock2);
        const newTotalStock = {
          Quantity: totalStock2,
        }
        axios
        .put("http://localhost:5000/totalstock/631627656073cde3af8406d0", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'Trouser Ladies'){
        console.log(StocksCount3.Quantity);
        const totalStock3 = parseInt(StocksCount3.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock3);
        const newTotalStock = {
          Quantity: totalStock3,
        }
        axios
        .put("http://localhost:5000/totalstock/631627bf6073cde3af8406d1", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'Shirt Gens'){
        console.log(StocksCount4.Quantity);
        const totalStock4 = parseInt(StocksCount4.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock4);
        const newTotalStock = {
          Quantity: totalStock4,
        }
        axios
        .put("http://localhost:5000/totalstock/6331e6da01ab7efdac54d9c8", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'Shirt Ladies'){
        console.log(StocksCount5.Quantity);
        const totalStock5 = parseInt(StocksCount5.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock5);
        const newTotalStock = {
          Quantity: totalStock5,
        }
        axios
        .put("http://localhost:5000/totalstock/6331e6ec01ab7efdac54d9ca", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'TShirt Gens'){
        console.log(StocksCount6.Quantity);
        const totalStock6 = parseInt(StocksCount6.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock6);
        const newTotalStock = {
          Quantity: totalStock6,
        }
        axios
        .put("http://localhost:5000/totalstock/6331e70401ab7efdac54d9cc", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'TShirt Ladies'){
        console.log(StocksCount7.Quantity);
        const totalStock7 = parseInt(StocksCount7.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock7);
        const newTotalStock = {
          Quantity: totalStock7,
        }
        axios
        .put("http://localhost:5000/totalstock/6331e71501ab7efdac54d9ce", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

      if(newformerStock.GarmentType === 'Skirt'){
        console.log(StocksCount8.Quantity);
        const totalStock8 = parseInt(StocksCount8.Quantity) - parseInt(newformerStock.Quantity);
        console.log(totalStock8);
        const newTotalStock = {
          Quantity: totalStock8,
        }
        axios
        .put("http://localhost:5000/totalstock/6331e73501ab7efdac54d9d0", newTotalStock)
        .then(() => alert("stock updated"))
        .catch((err) => alert(err));
        console.log(newformerStock.Quantity);

      }

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

        <button className="btn-del" type="submit">
          Delete
        </button>
      </Form>
    </div>
  );
};

export default StockDeleteForm;
