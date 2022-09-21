import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from "./BuyerSideNavBar";
import Badge from "react-bootstrap/Badge";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DeliveryDetails = () => {
  const [delivery, setDelivery] = useState([]);

  const columns = [
    { title: "Order ID", field: "orderID" },
    { title: "Buyer ID", field: "buyerID" },
    { title: "Buyer Name", field: "buyerName" },
    { title: "Location", field: "location" },
    { title: "Date", field: "date" },
    { title: "Time", field: "time" },
    { title: "Vehicle No", field: "vehicleNo" },
    { title: "Total Cost", field: "totalCost" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("All Deliveries", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: delivery,
    });
    doc.save("Deliveries.pdf");
  };

  useEffect(() => {
    const getDeliveries = () => {
      axios
        .get("http://localhost:5000/delivery")
        .then((res) => {
          setDelivery(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getDeliveries();
  }, []);

  return (
    <>
      <BuyerSideNavBar />
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
              Approved Deliveries
            </h2>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "45%",
                height: "60px",
                borderRadius: "5px",
                border: "2px solid #174C4F",
                paddingLeft: "10px",
                marginTop: "10px",
              }}
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

        <br />
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer ID</th>
              <th>Buyer/Company Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Vehicle No</th>
              <th>Total Cost (Rs.)</th>
            </tr>
          </thead>
          {delivery.map((delivery) => (
            <tbody key={delivery._id}>
              <tr>
                <td>
                  {delivery.orderID} <Badge bg="dark">Approved</Badge>
                </td>
                <td>{delivery.buyerID}</td>
                <td>{delivery.buyerName}</td>
                <td>{delivery.location}</td>
                <td>{delivery.date}</td>
                <td>{delivery.time}</td>
                <td>{delivery.vehicleNo}</td>
                <td>{delivery.totalCost}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default DeliveryDetails;
