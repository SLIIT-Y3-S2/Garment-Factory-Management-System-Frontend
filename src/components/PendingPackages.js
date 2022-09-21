import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from "./BuyerSideNavBar";
import Badge from "react-bootstrap/Badge";
import VehicleAssignModal from "./VehicleAssignModal";
import { Grid } from "@mui/material";

const PendingPackages = () => {
  const [orders, setOrder] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [deliverdet, setDeliverdet] = useState();

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
              Pending Deliveries
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
              <th>Garment Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Unit Price (Rs.)</th>
              <th>Quantity</th>
              <th>Total Cost (Rs.)</th>
              <th>Approve Order</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                ord001 <Badge bg="dark">Pending</Badge>
              </td>
              <td>buy001</td>
              <td>ABC Company</td>
              <td>T-Shirt</td>
              <td>2021-05-01</td>
              <td>10:00 AM</td>
              <td>500.00</td>
              <td>100</td>
              <td>50000.00</td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    setModalShow(true);
                    // setDeliverdet(order);
                  }}
                >
                  Confirm
                </button>
              </td>
            </tr>
          </tbody>
        </Table>

        <VehicleAssignModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          deliverdet={deliverdet}
        />
      </div>
    </>
  );
};

export default PendingPackages;
