import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from "./BuyerSideNavBar";
import Badge from "react-bootstrap/Badge";

const DeliveryDetails = () => {
  const [delivery, setDelivery] = useState([]);

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
        <h2>Approved Deliveries</h2>
        <div style={{ marginLeft: "80%" }}>
          <button
            className="btn"
            // onClick={() => {setModalShow(true);setBuyerdet(null)}}
          >
            Generate Report
          </button>
        </div>

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
