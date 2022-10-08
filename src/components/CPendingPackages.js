import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import StocksInSideNavBar from "./StocksInSideNavBar";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";

const CPendingPackages = () => {
  const [order, setOrder] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [deliverdet, setDeliverdet] = useState();

  const columns = [
    { title: "Order ID", field: "OrderId" },
    { title: "Buyer ID", field: "BuyerId" },
    { title: "Buyer Name", field: "BuyerName" },
    { title: "Garment Type", field: "GarmentType" },
    { title: "Unit Price", field: "UnitPrice" },
    { title: "Quantity", field: "Quantity" },
    { title: "Total Cost", field: "TotalCost" },
    { title: "Date", field: "Date" },
    { title: "Time", field: "Time" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("All Packages", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: order,
    });
    doc.save("Packages " + Date() + ".pdf");
  };

  useEffect(() => {
    const getPackages = () => {
      axios
        .get("http://localhost:5000/stockout")
        .then((res) => {
          setOrder(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getPackages();
  }, []);

  const filterContent = (porders, searchTerm) => {
    const result = porders.filter(
      (porder) =>
        porder.OrderId.toLowerCase().includes(searchTerm) ||
        porder.BuyerId.toLowerCase().includes(searchTerm) ||
        porder.BuyerName.toLowerCase().includes(searchTerm) ||
        porder.GarmentType.toLowerCase().includes(searchTerm) ||
        porder.Date.toLowerCase().includes(searchTerm) ||
        porder.Time.toLowerCase().includes(searchTerm)
    );
    setOrder(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/stockout").then((res) => {
      if (res.data) {

        filterContent(res.data, searchTerm);
      }
    });
  };

  return (
    <>
      <StocksInSideNavBar />
      <div className="pageBody">
        <Grid container>
          <Grid item xs={0.1} />
          <Grid
            item
            xs={11.8}
            style={{
              backgroundColor: "#63C2C7",
              height: "80px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px 0px 10px",
              boxShadow: "5px 5px 5px rgba(0,0,0,0.75)",
            }}
          >
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>
              Pending Orders
            </h2>

            <input
              placeholder="Search"
              className="form-control"
              name="searchTerm"
              type="search"
              style={{
                width: "45%",
                height: "60px",
                borderRadius: "5px",
                border: "2px solid #174C4F",
                paddingLeft: "10px",
                marginTop: "10px",
              }}
              onChange={handleTextSearch}
            />
            <div>
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => downloadPdf()}
              >
                <BsPrinterFill />
                &nbsp;&nbsp;Generate Report
              </button>
              &nbsp;&nbsp;
            </div>
          </Grid>
          <Grid item xs={0.1} />
        </Grid>

        <div style={{ marginLeft: "80%" }}></div>

        <br />
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer ID</th>
              <th>Buyer/Company Name</th>
              <th>Garment Type</th>
              <th>Unit Price (Rs.)</th>
              <th>Quantity</th>
              <th>Total Cost (Rs.)</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          {order.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>
                  {order.OrderId}
                  <Badge bg="dark">Pending</Badge>
                </td>
                <td>{order.BuyerId}</td>
                <td>{order.BuyerName}</td>
                <td>{order.GarmentType}</td>
                <td>{order.UnitPrice}</td>
                <td>{order.Quantity}</td>
                <td>{order.TotalCost}</td>
                <td>{order.Date}</td>
                <td>{order.Time}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default CPendingPackages;
