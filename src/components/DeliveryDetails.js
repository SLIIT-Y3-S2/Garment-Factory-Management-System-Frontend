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
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const DeliveryDetails = () => {
  const [delivery, setDelivery] = useState([]);
  const [show, setShow] = useState(false);

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

  console.log("delivery", delivery[0]);
  

  const calc = () =>{
    let sum = 0;
    for(let i = 0; i < delivery.length; i++){
      sum = sum + parseInt(delivery[i].totalCost);
    }
    return sum;
  }

  

  const filterContent = (deliveries, searchTerm) => {
    const result = deliveries.filter(
      (delivery) =>
        delivery.orderID.toLowerCase().includes(searchTerm) ||
        delivery.buyerID.toLowerCase().includes(searchTerm) ||
        delivery.buyerName.toLowerCase().includes(searchTerm) ||
        delivery.location.toLowerCase().includes(searchTerm) ||
        delivery.date.toLowerCase().includes(searchTerm) ||
        delivery.time.toLowerCase().includes(searchTerm) ||
        delivery.vehicleNo.toLowerCase().includes(searchTerm)
    );
    setDelivery(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/delivery").then((res) => {
      if (res.data) {
        filterContent(res.data, searchTerm);
      }
    });
  };

  

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
        <br />

        <Row>
          <Col>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <img
                  src="Logo.ico"
                  className="rounded me-2"
                  alt=""
                  height={30}
                  width={30}
                />
                <strong className="me-auto">Sum of Total Cost</strong>
                <small>WoW</small>
              </Toast.Header>

              <Toast.Body>
                <b>{"Rs. "}{calc()}</b>
              </Toast.Body>
            </Toast>
          </Col>
          <Col xs={2}>
            <button className="btn" onClick={() => setShow(true)}>
              Show Total Cost
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DeliveryDetails;
